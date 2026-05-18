import { DateFieldProps } from "@/types";
import { useRef } from "react";
import Calendar from "../icons/Calendar";
import { formatDate } from "@/app/utilis";

export function DateField({
  label,
  value,
  min,
  onChange,
  onBlur,
  error,
  name,
}: DateFieldProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  function open() {
    try {
      inputRef.current?.showPicker();
    } catch {
      inputRef.current?.click();
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={(e) => e.key === "Enter" && open()}
      className="flex-1 min-w-0 flex items-center gap-3 px-5 py-4
                 border-b md:border-b-0 md:border-r border-neutral-200
                 hover:bg-cream transition-colors duration-200 cursor-pointer relative select-none"
    >
      <span className="text-primary shrink-0">
        <Calendar />
      </span>
      <span className="flex-1 overflow-hidden">
        <span className="eyebrow block mb-0.5">{label}</span>
        <span className="font-display text-sm text-neutral-950 truncate block">
          {value ? formatDate(value) : "Select date"}
        </span>
      </span>

      {/* Real input — invisible & pointer-events-none so showPicker() works */}
      <input
        ref={inputRef}
        type="date"
        name={name}
        value={value}
        min={min}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        style={{
          position: "absolute",
          opacity: 0,
          pointerEvents: "none",
          width: 1,
          height: 1,
          top: '100%',
          marginTop: 8,
          left: 0,
        }}
      />

      {error && (
        <span className="absolute bottom-1 left-14 text-[10px] text-error font-body">
          {error}
        </span>
      )}
    </div>
  );
}