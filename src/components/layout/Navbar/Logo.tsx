import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/20">
        <span className="text-lg font-black text-white">TZ</span>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-xl font-black tracking-tight text-white">
          TechZeon
        </span>

        <span className="text-xs text-zinc-400">
          Tecnologia sem enrolação
        </span>
      </div>
    </Link>
  );
}