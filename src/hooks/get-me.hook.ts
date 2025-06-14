// hooks/useMe.ts
import { useQuery } from '@tanstack/react-query';
import { type User, getMe } from '../api/auth';


export const ME_QUERY_KEY = ['me'];

export const useMe = () => {
  return useQuery<User>({
    queryKey: ME_QUERY_KEY,
    queryFn: getMe,
  });
};