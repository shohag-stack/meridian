import { amenities } from "@/types";
import { Accommodation } from "@/types";
import Wifi from "@/components/icons/Wifi";
import Bathroom from "@/components/icons/Bathroom";
import Hairdryer from "../icons/Hairdryer";
import Tv from "../icons/Tv";

const amenityIcons: Record<string, any> = {
  wifi: Wifi,
  bath: Bathroom,
  hairdryer: Hairdryer,
  tv: Tv,
};

export default function AccommodationAmenities({
  accommodation,
}: {
  accommodation: Accommodation;
}) {
  return (
    <div className="container-site section">
      <h2 className="heading-2">Amenities</h2>
      <div className="grid grid-cols-3 gap-x-20 gap-y-10 bg-neutral-50 p-10">
        {accommodation.amenities?.map((item) => {
          const Icon = amenityIcons[item.icon];

          return (
            <div key={item.title} className="flex items-start gap-4">
              <div className="mt-1.5">
                {Icon && <Icon size={24} />}
              </div>

              <div>
                <p className="text-[#7B2942] text-xl font-medium">
                  {item.title}
                </p>

                <p className="text-[#7B2942]/80 text-lg">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
