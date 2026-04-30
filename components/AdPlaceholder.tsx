type AdPlaceholderProps = {
  label: string;
};

export function AdPlaceholder({ label }: AdPlaceholderProps) {
  return (
    <div
      aria-label={label}
      className="flex min-h-24 items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 px-4 text-center text-sm font-medium text-slate-500"
    >
      {label}
    </div>
  );
}
