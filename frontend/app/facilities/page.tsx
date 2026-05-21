import PageHeader from "@/components/ui/PageHeader";
import { facilities, facilitiesHeader } from "@/data/data";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <PageHeader header={facilitiesHeader} />

      <div className="container-site">
        <div className="section">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {facilities.map((item) => (
              <div
                key={item._id}
                className="group relative overflow-hidden bg-neutral-50 min-h-[420px] flex items-center p-8 transition-transform duration-300"
              >
                {/* Background Image */}
                <Image
                  src={item.thumbImage}
                  alt={item.title}
                  fill
                  className="
                    object-cover
                    opacity-0
                    scale-110
                    transition-all
                    duration-700
                    group-hover:opacity-100
                    group-hover:scale-100
                  "
                />

                {/* Dark Overlay */}
                <div
                  className="
                    absolute inset-0
                    bg-linear-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                />

                {/* Content */}
                <div
                  className="relative z-10
                    max-w-sm text-center
                    translate-y-0
                    transition-all
                    duration-500
                    group-hover:translate-y-28"
                >
                  <h2
                    className="
                      heading-4 capitalize
                      transition-colors duration-500
                      group-hover:text-white
                    "
                  >
                    {item.title}
                  </h2>

                  <p
                    className="
                      mt-3 text-neutral-600
                      transition-colors duration-500
                      group-hover:text-neutral-200
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
