import { useCallback, useEffect, useState } from 'react';
import { api } from '../services/api';

// Example API types
interface User {
  id: string;
  name: string;
  email: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

// Generic API hook
interface UseApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseApiReturn<T> extends UseApiState<T> {
  refetch: () => void;
  mutate: (data: T) => void;
}

// Custom hook for data fetching
export const useApi = <T>(
  url: string,
  options?: {
    enabled?: boolean;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
  }
): UseApiReturn<T> => {
  const [state, setState] = useState<UseApiState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = useCallback(async () => {
    if (!options?.enabled) return;

    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      let response;
      const method = options?.method || 'GET';

      switch (method) {
        case 'GET':
          response = await api.get<T>(url);
          break;
        case 'POST':
          response = await api.post<T>(url, options.body);
          break;
        case 'PUT':
          response = await api.put<T>(url, options.body);
          break;
        case 'DELETE':
          response = await api.delete<T>(url);
          break;
        default:
          response = await api.get<T>(url);
      }

      setState({
        data: response.data,
        loading: false,
        error: null,
      });
    } catch (error) {
      setState({
        data: null,
        loading: false,
        error: error instanceof Error ? error.message : 'An error occurred',
      });
    }
  }, [url, options?.enabled, options?.method, options?.body]);

  const mutate = useCallback((data: T) => {
    setState(prev => ({ ...prev, data }));
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...state,
    refetch: fetchData,
    mutate,
  };
};

// Specific hooks for common use cases
export const useUsers = () => {
  return useApi<User[]>('/users', { enabled: true });
};

export const useUser = (id: string) => {
  return useApi<User>(`/users/${id}`, { enabled: !!id });
};

export const usePosts = () => {
  return useApi<Post[]>('/posts', { enabled: true });
};

export const useUserPosts = (userId: string) => {
  return useApi<Post[]>(`/users/${userId}/posts`, { enabled: !!userId });
};

// Mutation hooks
export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (userData: Omit<User, 'id'>) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.post<User>('/users', userData);
      setLoading(false);
      return response.data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to create user';
      setError(errorMessage);
      setLoading(false);
      throw err;
    }
  }, []);

  return { mutate, loading, error };
};

export const useUpdateUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(
    async ({ id, ...userData }: Partial<User> & { id: string }) => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.put<User>(`/users/${id}`, userData);
        setLoading(false);
        return response.data;
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : 'Failed to update user';
        setError(errorMessage);
        setLoading(false);
        throw err;
      }
    },
    []
  );

  return { mutate, loading, error };
};

export const useDeleteUser = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      await api.delete(`/users/${id}`);
      setLoading(false);
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to delete user';
      setError(errorMessage);
      setLoading(false);
      throw err;
    }
  }, []);

  return { mutate, loading, error };
};
