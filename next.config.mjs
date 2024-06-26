import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "links.papreact.com",
            }, {

                protocol: "https",
                hostname: "links.papareact.com",
            }, {
                protocol: 'https',
                hostname: 'image.tmdb.org'
            }

        ]
    }
}

export default withPlaiceholder(nextConfig);
