import createNextIntlPlugin from 'next-intl/plugin';
import os from 'os';

const withNextIntl = createNextIntlPlugin('./i18n/request.js');

// Automatically detect all local IPv4 network addresses on startup
const getLocalDevOrigins = () => {
  const origins = new Set(['localhost', 'localhost:3000', '127.0.0.1', '127.0.0.1:3000']);
  const interfaces = os.networkInterfaces();
  
  for (const name of Object.keys(interfaces)) {
    for (const net of interfaces[name] || []) {
      if (net.family === 'IPv4' && !net.internal) {
        origins.add(net.address);
        origins.add(`${net.address}:3000`);
        // Add subnet wildcards (e.g. 192.168.1.*)
        const parts = net.address.split('.');
        if (parts.length === 4) {
          const subnet = `${parts[0]}.${parts[1]}.${parts[2]}.*`;
          origins.add(subnet);
          origins.add(`${subnet}:3000`);
        }
      }
    }
  }

  // Broad LAN wildcards
  origins.add('192.168.*.*');
  origins.add('192.168.*.*:3000');
  origins.add('10.*.*.*');
  origins.add('172.*.*.*');

  return Array.from(origins);
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: getLocalDevOrigins(),
  devIndicators: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
};

export default withNextIntl(nextConfig);