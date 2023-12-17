export const stripPhonePunctuation = (raw: string): string => {
  return raw.replace(/[^\+\d]/g, "");
};
