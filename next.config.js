/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nozoovsgwamdhvmmujlx.supabase.co"
      }
    ]
  }
}

module.exports = nextConfig
