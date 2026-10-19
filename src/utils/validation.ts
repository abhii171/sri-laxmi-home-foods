export const normalizeMobile = (value: string): string => {
  if (!value) return '';
  const digits = value.replace(/\D/g, '');
  if (digits.length >= 10) {
    const last10 = digits.slice(-10);
    if (/^[6-9]\d{9}$/.test(last10)) {
      return last10;
    }
    if (digits.length === 10) {
      return digits;
    }
  }
  return digits;
};

export const isValidIndianMobile = (value: string): boolean => {
  const cleaned = normalizeMobile(value);
  return /^[6-9]\d{9}$/.test(cleaned) || /^\d{10}$/.test(cleaned);
};

export const normalizePin = (value: string): string => {
  if (!value) return '';
  return value.replace(/\D/g, '').slice(0, 6);
};

export const isValidPin = (value: string): boolean => {
  const cleaned = normalizePin(value);
  return /^\d{6}$/.test(cleaned);
};

export const validateRequiredFields = (fields: Record<string, string | undefined>) => {
  const missing = Object.entries(fields).filter(([, value]) => !value || !String(value).trim());
  return missing.length === 0 ? null : `Missing required field: ${missing[0][0]}`;
};
