import { Calendar, Clock, User } from "lucide-react";

interface MetaInfoProps {
  author: string;
  date: string;
  readingTime: number;
}

export default function MetaInfo({
  author,
  date,
  readingTime,
}: MetaInfoProps) {
  return (
    <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-400">
      <div className="flex items-center gap-2">
        <User size={16} />
        <span>{author}</span>
      </div>

      <div className="flex items-center gap-2">
        <Calendar size={16} />
        <span>{date}</span>
      </div>

      <div className="flex items-center gap-2">
        <Clock size={16} />
        <span>{readingTime} min</span>
      </div>
    </div>
  );
}