import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

/** Page container — 1180px wide with 24px side padding (CLAUDE.md §2). */
export function Container({
  className = "",
  ...rest
}: ComponentProps<"div">) {
  return (
    <div
      className={`mx-auto w-full max-w-[1180px] px-6 ${className}`}
      {...rest}
    />
  );
}

/** Eyebrow label — Montserrat 700, 13px, uppercase, accessible lime. */
export function Kicker({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-head text-[13px] font-bold uppercase tracking-[0.06em] text-accent-accessible ${className}`}
    >
      {children}
    </span>
  );
}

/** Centered section header — eyebrow → headline → support text. */
export function SectionHead({
  kicker,
  title,
  lead,
}: {
  kicker: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="mx-auto mb-12 max-w-[680px] text-center">
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-2.5 text-[clamp(26px,3.4vw,36px)] tracking-[-0.015em]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-3 text-[17px] text-text-secondary">{lead}</p>
      ) : null}
    </div>
  );
}

const buttonStyles = {
  base: "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold leading-none select-none transition-colors duration-150 ease-brand",
  variant: {
    primary: "bg-primary text-on-primary hover:bg-primary-hover",
    secondary:
      "border-[1.5px] border-fg text-fg hover:border-accent-2 hover:text-accent-2",
    ghost: "text-link hover:text-link-hover",
  },
  size: {
    md: "h-11 px-4 text-[15px]",
    lg: "h-[50px] px-[26px] text-[15px]",
  },
} as const;

type ButtonLinkProps = Omit<ComponentProps<typeof Link>, "className"> & {
  variant?: keyof (typeof buttonStyles)["variant"];
  size?: keyof (typeof buttonStyles)["size"];
  className?: string;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={`${buttonStyles.base} ${buttonStyles.variant[variant]} ${buttonStyles.size[size]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
