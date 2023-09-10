import './globals.css';
import './tailwind.css';

import Script from 'next/script';

export const metadata = {
  title: '车万皇帝纪行',
  description:
    '东方爱好者不需要车万皇帝。谢谢每一位为东方奉献自己人，但请不要献祭别人。',
  keywords: '囧仙,赵旭升,车万皇帝,囧仙子,东方,车万,东方Project,哆叽,魅知',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <Script
        strategy="beforeInteractive"
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-NKLTP9H6LC"></Script>
      <Script
        strategy="beforeInteractive"
        id="google-analytics">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-NKLTP9H6LC');
            `}
      </Script>

      <body>
        <nav className="flex items-center justify-between flex-wrap bg-neutral-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <span className="font-semibold text-xl tracking-tight">
              车万皇帝纪行
            </span>
          </div>

          <div>
            <a
              className="text-white"
              target="_blank"
              href="https://github.com/touhou-emperor/touhou-emperor.github.io">
              来Github添砖加瓦
            </a>
          </div>
        </nav>

        <div className="container mx-auto p-8">{children}</div>
      </body>
    </html>
  );
}
