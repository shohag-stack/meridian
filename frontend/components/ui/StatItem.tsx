import { Bed } from 'lucide-react';
export function StatItem({ icon: Icon, value, label }: { icon: typeof Bed; value: string | number; label?: string }) {
  return (
    <div className="flex items-center gap-1.5">
      <Icon size={16} className="text-primary shrink-0" />
      <span className="text-md font-medium text-neutral-950">
        {value}
        {label && <span className="text-neutral-950 font-normal"> {label}</span>}
      </span>
    </div>
  );
}