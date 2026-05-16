"use client";

import { useForm, Controller } from "react-hook-form";
import { useState, useRef, useEffect } from "react";

// ── Types ─────────────────────────────────────────────────────────────────────
interface BookingFormValues {
  adults: number;
  children: number;
  checkIn: string;
  checkOut: string;
  promoCode: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────
function formatDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function toISODate(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().split("T")[0];
}

// ── Icons ─────────────────────────────────────────────────────────────────────
const GuestIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
  </svg>
);

const CalendarIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TagIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const ChevronUpIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

// ── Counter ───────────────────────────────────────────────────────────────────
interface CounterProps {
  label: string;
  value: number;
  min?: number;
  max?: number;
  onChange: (v: number) => void;
}

function Counter({ label, value, min = 0, max = 10, onChange }: CounterProps) {
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

// ── DateField ─────────────────────────────────────────────────────────────────
// Clicking the visible div calls showPicker() on the hidden-but-real input.
// The input has pointer-events:none so only the div click fires showPicker,
// preventing a double-open on browsers that also bubble the click to the input.
interface DateFieldProps {
  label: string;
  value: string;
  min?: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  name: string;
}

function DateField({
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
        <CalendarIcon />
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

// ── Main Component ────────────────────────────────────────────────────────────
export default function HotelBookingBar() {
  const [guestOpen, setGuestOpen] = useState(false);
  const guestRef = useRef<HTMLDivElement>(null);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormValues>({
    defaultValues: {
      adults: 1,
      children: 0,
      checkIn: toISODate(0),
      checkOut: toISODate(1),
      promoCode: "",
    },
  });

  const adults = watch("adults");
  const children = watch("children");
  const checkIn = watch("checkIn");

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (guestRef.current && !guestRef.current.contains(e.target as Node)) {
        setGuestOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  function onSubmit(data: BookingFormValues) {
    console.log("Booking submitted:", data);
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div
        className="flex flex-col md:flex-row items-stretch bg-white rounded-xl overflow-visible"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        {/* ── GUEST ─────────────────────────────────────────────── */}
        <div ref={guestRef} className="relative flex-1 min-w-0">
          <button
            type="button"
            onClick={() => setGuestOpen((o) => !o)}
            className="w-full h-full flex items-center gap-3 px-5 py-4
                       border-b md:border-b-0 md:border-r border-neutral-200
                       hover:bg-cream transition-colors duration-200 cursor-pointer"
          >
            <span className="text-primary shrink-0">
              <GuestIcon />
            </span>
            <span className="text-left overflow-hidden flex-1">
              <span className="eyebrow block mb-0.5">Guest</span>
              <span className="font-display text-sm text-neutral-950 truncate block">
                {adults} Adult{adults !== 1 ? "s" : ""}, {children} Child
                {children !== 1 ? "ren" : ""}
              </span>
            </span>
            <span className="text-primary shrink-0 ml-auto">
              {guestOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </span>
          </button>

          {guestOpen && (
            <div
              className="absolute top-full left-0 mt-2 bg-white rounded-xl p-5 z-50 min-w-[260px]"
              style={{
                boxShadow: "var(--shadow-hover)",
                border: "1px solid var(--color-neutral-200)",
              }}
            >
              <p className="eyebrow mb-3">Select Guests</p>
              <Controller
                name="adults"
                control={control}
                rules={{ min: 1 }}
                render={({ field }) => (
                  <Counter
                    label="Adults"
                    value={field.value}
                    min={1}
                    max={10}
                    onChange={field.onChange}
                  />
                )}
              />
              <Controller
                name="children"
                control={control}
                render={({ field }) => (
                  <Counter
                    label="Children"
                    value={field.value}
                    min={0}
                    max={10}
                    onChange={field.onChange}
                  />
                )}
              />
              <button
                type="button"
                onClick={() => setGuestOpen(false)}
                className="btn btn-primary w-full justify-center"
                style={{ marginTop: "1rem" }}
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* ── CHECK IN ──────────────────────────────────────────── */}
        <Controller
          name="checkIn"
          control={control}
          rules={{ required: "Required" }}
          render={({ field }) => (
            <DateField
              label="Check In"
              name={field.name}
              value={field.value}
              min={toISODate(0)}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.checkIn?.message}
            />
          )}
        />

        {/* ── CHECK OUT ─────────────────────────────────────────── */}
        <Controller
          name="checkOut"
          control={control}
          rules={{ required: "Required" }}
          render={({ field }) => (
            <DateField
              label="Check Out"
              name={field.name}
              value={field.value}
              min={checkIn || toISODate(1)}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors.checkOut?.message}
            />
          )}
        />

        {/* ── PROMO CODE ────────────────────────────────────────── */}
        <Controller
          name="promoCode"
          control={control}
          render={({ field }) => (
            <div
              className="flex-1 min-w-0 flex items-center gap-3 px-5 py-4
                            border-b md:border-b-0 md:border-r border-neutral-200"
            >
              <span className="text-primary shrink-0">
                <TagIcon />
              </span>
              <span className="flex-1 overflow-hidden">
                <label
                  htmlFor="promoCode"
                  className="eyebrow block mb-0.5 cursor-pointer"
                >
                  Promo Code
                </label>
                <input
                  id="promoCode"
                  type="text"
                  placeholder="Enter code"
                  {...field}
                  className="font-display text-sm text-neutral-950 bg-transparent border-none
                             outline-none w-full placeholder:text-neutral-400 truncate"
                />
              </span>
            </div>
          )}
        />

        {/* ── BOOK NOW ──────────────────────────────────────────── */}
        <div className="shrink-0 flex">
          <button
            type="submit"
            className="btn btn-static flex-1 md:flex-none
                       rounded-none rounded-b-xl md:rounded-bl-none md:rounded-r-xl
                       px-10 text-sm tracking-widest"
            style={{ marginTop: 0 }}
          >
            Book Now
          </button>
        </div>
      </div>
    </form>
  );
}
