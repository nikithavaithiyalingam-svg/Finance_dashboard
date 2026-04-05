import { useAppSelector } from '../store/hooks';

export const useDarkMode = () => {
  return useAppSelector(state => state.theme === 'dark');
};