import Image from 'next/image'
import React from 'react'

interface Props {
    header: {
        title: string;
        shortDescription: string;
        mainImage: string
    }
}

export default function PageHeader({header}: Props) {
  return (
    <div className="relative min-h-screen w-full">
                <Image
                  src={header.mainImage}
                  alt={header.title}
                  fill
                  className="object-cover"
                />
        
                {/* Content */}
                <div className="container-site absolute py-20 inset-0 z-30 flex items-end">
                  <div className="flex gap-20 justify-between items-start w-full">
                    <div className="w-full">
                      <h1 className="heading-1 text-white mb-4">
                        {header.title}
                      </h1>
                      <p className="text-xl text-white max-w-md mb-4">
                        {" "}
                        {header.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
  )
}
