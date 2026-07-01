import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  width?: number;
  priority?: boolean;
  className?: string;
  href?: string;
};

const ASPECT = 124 / 458; // intrinsic ratio of the extracted logo asset

export function Logo({
  width = 190,
  priority = false,
  className = "",
  href = "/",
}: LogoProps) {
  const height = Math.round(width * ASPECT);
  const img = (
    <Image
      src="/images/logo/lambolo-logo.png"
      alt="Lambolo"
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
  if (href) {
    return (
      <Link href={href} aria-label="Lambolo ana sayfa" className="inline-flex shrink-0">
        {img}
      </Link>
    );
  }
  return img;
}
