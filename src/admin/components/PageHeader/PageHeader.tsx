import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <div
      className="
        mb-6
        border-b
        border-zinc-800
        pb-6
      "
    >
      <div
        className="
          flex
          flex-col
          gap-6
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div>
          <h1
            className="
              text-2xl
              font-bold
              tracking-tight
              text-white
              lg:text-4xl
            "
          >
            {title}
          </h1>

          {description && (
            <p
              className="
                mt-2
                max-w-2xl
                text-sm
                text-zinc-400
                lg:text-base
              "
            >
              {description}
            </p>
          )}
        </div>

        {actions && (
          <div className="w-full lg:w-auto">
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}