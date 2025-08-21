// Example usage patterns for the useApi hook

import { useEffect, useState, useCallback } from 'react';
import useApi from './useApi';
import type { User } from '../types';

// Example 1: GET request hook
export function useUsers() {
  const { fetchData, loading, error, isApiDown } = useApi('GET');
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = useCallback(async () => {
    const data = await fetchData('/api/users');
    if (data) {
      setUsers(data);
    }
  }, [fetchData]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return { users, loading, error, isApiDown, refetch: loadUsers };
}

// Example 2: POST request hook for creating users
export function useCreateUser() {
  const { fetchData, loading, error, isApiDown } = useApi('POST');

  const createUser = async (userData: { name: string; email: string; password: string }) => {
    const data = await fetchData('/api/users', userData);
    return data;
  };

  return { createUser, loading, error, isApiDown };
}

// Example 3: Login hook
export function useLogin() {
  const { fetchData, loading, error, isApiDown } = useApi('POST');

  const login = async (credentials: { email: string; password: string }) => {
    const data = await fetchData('/api/auth/login', credentials);
    return data;
  };

  return { login, loading, error, isApiDown };
}

// Example 4: Generic hook for any API call
export function useApiCall() {
  const getHook = useApi('GET');
  const postHook = useApi('POST');
  const putHook = useApi('PUT');
  const deleteHook = useApi('DELETE');

  return {
    get: getHook,
    post: postHook,
    put: putHook,
    delete: deleteHook,
  };
}

// Usage in components:
/*
function UsersList() {
  const { users, loading, error, isApiDown } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (isApiDown) return <div>API is down. Please check if the server is running.</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
    </ul>
  );
}

function CreateUserForm() {
  const { createUser, loading, error } = useCreateUser();

  const handleSubmit = async (formData: FormData) => {
    const userData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    
    const result = await createUser(userData);
    if (result) {
      // Handle success
      console.log('User created:', result);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      // form fields
      {error && <p>Error: {error}</p>}
      <button disabled={loading}>
        {loading ? 'Creating...' : 'Create User'}
      </button>
    </form>
  );
}
*/ 