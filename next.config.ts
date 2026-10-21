import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 证书页历史链接带尾斜杠（/certification/），旧访问者浏览器缓存了到该地址的 301。
  // 关闭 Next 的尾斜杠 308 规范化，让两种形式都直接 200，避免与旧缓存形成重定向循环。
  skipTrailingSlashRedirect: true,
  // 发布时可以建到临时目录再原子替换：NEXT_DIST_DIR=.next-build npm run build
  // 好处是构建期间线上仍在读完整的旧 .next，不会出现 chunk 500（2026-10-22 事故）
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
