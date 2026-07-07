import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export function IconCross(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export function IconYen(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 4l6 8 6-8M12 12v8M8 14.5h8M8 17.5h8" />
    </svg>
  );
}

export function IconTrash(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M6 7l1 13h10l1-13M10 11v6M14 11v6" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v5c0 4.7-3 7.7-7 9.3C8 18.7 5 15.7 5 11V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconHouse(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 11l9-7 9 7M5.5 9.5V20h13V9.5M10 20v-5h4v5" />
    </svg>
  );
}

export function IconBook(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 19V5a2 2 0 012-2h13v16H6a2 2 0 000 4h13" />
      <path d="M8 7h7" />
    </svg>
  );
}

export function IconChat(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M21 12a8 8 0 01-8 8H4l2-3.2A8 8 0 1121 12z" />
      <path d="M9 11h6M9 14h4" />
    </svg>
  );
}

export function IconAlert(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3L2.5 20h19z" />
      <path d="M12 9.5v4.5M12 17.2v.1" />
    </svg>
  );
}

export function IconGlobe(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </svg>
  );
}

export function IconExternal(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14 5h5v5M19 5l-8 8M19 14v5H5V5h5" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h4l2 5-2.5 1.5a12 12 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

const CATEGORY_ICONS = {
  cross: IconCross,
  yen: IconYen,
  trash: IconTrash,
  shield: IconShield,
  house: IconHouse,
  book: IconBook,
  chat: IconChat,
  alert: IconAlert,
} as const;

export function CategoryIcon({
  name,
  ...props
}: IconProps & { name: string }) {
  const Icon = CATEGORY_ICONS[name as keyof typeof CATEGORY_ICONS] ?? IconChat;
  return <Icon {...props} />;
}
