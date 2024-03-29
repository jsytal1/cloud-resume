import { formatDate } from "@/app/lib/utils";

export default function Time({ date }: { date: string }) {
  const formattedDate = formatDate(date);

  return (
    <time className="whitespace-nowrap" dateTime={date}>
      {formattedDate}
    </time>
  );
}
