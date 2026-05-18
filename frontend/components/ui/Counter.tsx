import { CounterProps } from "@/types";

export function Counter({ label, value, min = 0, max = 10, onChange }: CounterProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-neutral-200 last:border-0">
      <span className="font-body text-sm text-neutral-700">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center
                     hover:bg-primary hover:text-white transition-all duration-200
                     disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="text-base leading-none mb-px">−</span>
        </button>
        <span className="font-display text-base font-medium text-neutral-950 w-4 text-center">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-8 h-8 rounded-full border border-primary text-primary flex items-center justify-center
                     hover:bg-primary hover:text-white transition-all duration-200
                     disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="text-base leading-none mb-px">+</span>
        </button>
      </div>
    </div>
  );
}