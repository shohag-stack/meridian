"use client";

import { useForm, Controller } from "react-hook-form";
import { useState, useRef, useEffect } from "react";
import GuestsIcon from "./icons/GuestsIcon";
import PromoCode from "./icons/PromoCode";
import { toISODate } from "@/app/utilis";
import { BookingFormValues } from "@/types";
import { DateField } from "./ui/DateField";
import { Counter } from "./ui/Counter";
import { useRouter } from "next/navigation";


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


// ── Main Component ────────────────────────────────────────────────────────────
export default function HotelBookingBar() {
  const [guestOpen, setGuestOpen] = useState(false);
  const guestRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

    const params = new URLSearchParams({
        adults: data.adults.toString(),
        children: data.children.toString(),
        checkIn: data.checkIn,
        checkOut: data.checkOut,
        promoCode: data.promoCode,
    })

    router.push(`accommodations?${params.toString()}`)
    
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
              <GuestsIcon />
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
                <PromoCode />
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
