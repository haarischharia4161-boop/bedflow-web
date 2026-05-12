import Link from "next/link";

type BedflowLogoProps = {
  size?: number;
  showWordmark?: boolean;
  className?: string;
};

export function BedflowLogo({
  size = 40,
  showWordmark = true,
  className = "",
}: BedflowLogoProps) {
  return (
    <Link
      href="/"
      className={`flex min-w-0 items-center gap-3 text-slate-950 ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- project favicon .ico */}
      <img
        src="/icon.ico"
        alt="Bedflow"
        width={size}
        height={size}
        className="shrink-0 rounded-xl object-contain"
        style={{ width: size, height: size }}
      />
      {showWordmark ? (
        <span className="truncate text-xl font-black tracking-tight sm:text-2xl">
          Bedflow
        </span>
      ) : null}
    </Link>
  );
}
