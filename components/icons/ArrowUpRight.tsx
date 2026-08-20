type ArrowUpRightProps = { className?: string };

export function ArrowUpRight({ className }: ArrowUpRightProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3.5 12.5 12.5 3.5M6 3.5h6.5V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
