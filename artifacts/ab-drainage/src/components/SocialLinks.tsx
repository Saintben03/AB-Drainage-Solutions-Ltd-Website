import { Instagram, Facebook, type LucideIcon } from "lucide-react";

export const SOCIALS: { name: string; href: string; Icon: LucideIcon }[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ABDrainagesolutions_ltd/",
    Icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/people/AB-Drainage-Solutions/100089837958769/",
    Icon: Facebook,
  },
];

interface SocialLinksProps {
  className?: string;
  itemClassName?: string;
  iconSize?: number;
}

export function SocialLinks({
  className = "",
  itemClassName = "",
  iconSize = 18,
}: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {SOCIALS.map(({ name, href, Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow A&B Drainage Solutions on ${name}`}
          className={`transition-all ${itemClassName}`}
        >
          <Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}
