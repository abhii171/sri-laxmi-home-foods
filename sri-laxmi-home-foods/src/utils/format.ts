export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);

export const formatDate = (date: string | Date) =>
  new Intl.DateTimeFormat('en-IN', { dateStyle: 'medium' }).format(
    typeof date === 'string' ? new Date(date) : date,
  );
