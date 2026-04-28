// import { urlFor } from "@/(core)/sanity/lib/image";
// import Image from "next/image";
// import type { PortableTextComponents } from "@portabletext/react";

// type SanityImage = {
//   _type: "image";
//   asset: {
//     _ref: string;
//   };
// };


// export const components: PortableTextComponents = {
//   types: {
//     image: ({ value }) => (
//       <Image
//         src={urlFor(value).width(800).url()}
//         alt="blog"
//         width={800}
//         height={500}
//         className="my-8"
//       />
//     ),

//     imageGrid: ({ value }: {value: {images: SanityImage[]}}) => {
//       if (!value?.images) return null;

//       return (<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
//         {value.images.map((img, i) => {
//           if (!img?.asset) return null;
//           return (
//             <Image
//             key={i}
//             src={urlFor(img).width(400).url()}
//             alt=""
//             className="w-full object-cover"
//             width={400}
//             height={300}
//           />
//           )
//     })}
//       </div>
//   )},

    
//   },
//   block: {
//     h1: ({ children }) => <h1 className="text-4xl font-bold my-6">{children}</h1>,
//     h2: ({ children }) => <h2 className="text-3xl font-semibold my-5">{children}</h2>,
//     normal: ({ children }) => <p className="leading-7 my-4">{children}</p>,
//   },
// };