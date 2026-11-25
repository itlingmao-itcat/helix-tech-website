import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary text-background text-sm font-bold">
        HX
      </span>
      <span className="text-white text-lg font-semibold tracking-wide group-hover:text-primary transition-colors">
        HELIX TECH
      </span>
    </Link>
  );
};

export default Logo;
