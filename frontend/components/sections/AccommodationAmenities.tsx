import { Accommodation } from "@/types";
import Wifi from "@/components/icons/Wifi";
import Bathroom from "@/components/icons/Bathroom";
import Hairdryer from "../icons/Hairdryer";
import Tv from "../icons/Tv";
import Desk from "../icons/Desk";
import ShowerHead from "../icons/ShowerHead";
import slippers from "../icons/slippers";
import Curtains from "../icons/Curtains";
import Bathrobes from "../icons/Bathrobes";
import Balcony from "../icons/Balcony";
import Ac from "../icons/Ac";
import NonSmoking from "../icons/NonSmoking";
import Refrigerator from "../icons/Refrigerator";
import Towel from "../icons/Towel";
import Kettle from "../icons/Kettle";

const amenityIcons: Record<string, any> = {
  wifi: Wifi,
  bath: Bathroom,
  hairdryer: Hairdryer,
  tv: Tv,
  desk: Desk,
  showerHead: ShowerHead,
  slippers: slippers,
  curtains: Curtains,
  bathrobes: Bathrobes,
  balcony: Balcony,
  ac: Ac,
  nonSmoking: NonSmoking,
  refrigerator: Refrigerator,
  towel: Towel,
  kettle: Kettle

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
