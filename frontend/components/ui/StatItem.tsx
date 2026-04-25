import { Bed } from 'lucide-react';
export function StatItem({ icon: Icon, value, label }: { icon: typeof Bed; value: string | number; label?: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon size={16} className="text-neutral-800 shrink-0" />
      <span className="text-md font-medium text-ink">
        {value}
        {label && <span className="text-ink font-normal"> {label}</span>}
      </span>
    </div>
  );
}