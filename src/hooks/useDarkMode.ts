import type { RootState } from '../store';
import { useAppSelector } from '../store/hooks';

export const useDarkMode = () => {
  return useAppSelector((state: RootState) => state.theme === 'dark');
};