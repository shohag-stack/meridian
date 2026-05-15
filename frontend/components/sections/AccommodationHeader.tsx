import { Accommodation } from '@/types'
import Image from 'next/image'
import Room from "@/components/icons/Room";
import Scene from "@/components/icons/Scene";
import Guests from "@/components/icons/Guests";
import Bath from "@/components/icons/Bath";

export default function AccommodationHeader({accommodation}: {accommodation: Accommodation}) {
  return (
    <div className="relative min-h-screen w-full">
            <Image
              src={accommodation.mainImage}
              alt={accommodation.title}
              fill
              className="object-cover"
            />
    
            {/* Content */}
            <div className="container-site absolute py-20 inset-0 z-30 flex items-end">
              <div className="flex gap-20 justify-between items-start w-full">
                <div className="w-full">
                  <h1 className="heading-1 text-white mb-4">
                    {accommodation.title}
                  </h1>
                  <p className="text-xl text-white max-w-md mb-4">
                    {" "}
                    {accommodation.shortDescription}
                  </p>
                  <button className="btn btn-primary"> Check Availability </button>
                </div>
    
                <div className="w-full bg-neutral-900/5 bg-opacity-50 backdrop-blur-sm rounded-lg p-10 flex justify-between items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <Room />
                    <div>
                      <p className="text-neutral-300 text-sm font-semibold">
                        Room Size
                      </p>
                      <span className="text-neutral-50 text-base font-semibold">
                        {accommodation.roomSize}
                      </span>
                    </div>
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <Scene />
                    <div>
                      <p className="text-neutral-300 text-sm font-semibold">
                        Scenic Views
                      </p>
                      <span className="text-neutral-50 text-base font-semibold">
                        {accommodation.face}
                      </span>
                    </div>
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <Guests />
                    <div>
                      <p className="text-neutral-300 text-sm font-semibold">
                        Guest Limits
                      </p>
                      <span className="text-neutral-50 text-base font-semibold">
                        {accommodation.guests} Guests
                      </span>
                    </div>
                  </div>
    
                  <div className="flex flex-col gap-2">
                    <Bath />
                    <div>
                      <p className="text-neutral-300 text-sm font-semibold">
                        Private En-Suite
                      </p>
                      <span className="text-neutral-50 text-base font-semibold">
                        {accommodation.bathrooms
                          ? `${accommodation.bathrooms} Bathrooms`
                          : "N/A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
