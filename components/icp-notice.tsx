export const ICP_NUMBER = "京ICP备2026077570号";
export const ICP_URL = "https://beian.miit.gov.cn/";

/**
 * ICP 备案号，按工信部要求在页面底部展示并链接至备案系统。
 * 号段与日期由 Sarah 提供，勿自行改写格式。
 */
export function IcpNotice({ className }: { className?: string }) {
  return (
    <a
      className={className}
      href={ICP_URL}
      target="_blank"
      rel="noopener noreferrer"
    >
      {ICP_NUMBER}
    </a>
  );
}
