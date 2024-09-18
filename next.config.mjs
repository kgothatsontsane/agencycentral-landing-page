/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === 'production';
const nextConfig = {
    basePath: isProduction ? '/agencycentral-landing-page' : '',
    output: 'export',
    distDir: 'deployment',
    images: {
        unoptimized: true
    }, 
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
 
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
};

export default nextConfig;
