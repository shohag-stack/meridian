/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [{
            hostname: "images.unsplash.com"
        }, {
            hostname: 'res.cloudinary.com'
        }, 
        {
            hostname: "cdn.sanity.io"
        },{
            hostname: "assets.lummi.ai"
        }
    ]
    }
    
};

export default nextConfig;
