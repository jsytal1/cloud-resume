export const stripPhonePunctuation = (raw: string): string => {
  return raw.replace(/[^\+\d]/g, "");
};

export const formatDate = (dateStr: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const parts = dateStr.split("-");

  const year = parts[0];
  const monthIndex = parseInt(parts[1], 10) - 1;
  const month = months[monthIndex];
  const day = parts[2];

  if (parts.length === 2) {
    return `${month} ${year}`;
  } else if (parts.length === 3) {
    return `${month}, ${day} ${year}`;
  }
};
