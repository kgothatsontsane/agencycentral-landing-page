/** @type {import('next').NextConfig} */

const nextConfig = {
    basePath: '/agencycentral-landing-page',
    assetPrefix: '/agencycentral-landing-page/',
    output: 'export',
    distDir: 'deployment',
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
 
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
};

export default nextConfig;
