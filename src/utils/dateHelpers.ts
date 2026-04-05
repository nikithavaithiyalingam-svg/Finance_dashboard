import { format, parseISO, startOfMonth, endOfMonth, isWithinInterval } from 'date-fns';

export const formatDate = (date: string | Date): string => {
  const d = typeof date === 'string' ? parseISO(date) : date;
  return format(d, 'dd MMM yyyy');
};

export const getCurrentMonthRange = () => {
  const now = new Date();
  return {
    start: startOfMonth(now),
    end: endOfMonth(now),
  };
};

export const isDateInRange = (date: string, from: string, to: string): boolean => {
  if (!from && !to) return true;
  const d = parseISO(date);
  const start = from ? parseISO(from) : new Date(0);
  const end = to ? parseISO(to) : new Date(9999, 11, 31);
  return isWithinInterval(d, { start, end });
};