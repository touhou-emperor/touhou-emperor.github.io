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
      <head>
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
      </head>

      <body>
        <nav className="bg-red-600 px-6 shadow-xl">
          <div className="container flex items-center justify-between flex-wrap mx-auto md:px-8">
            <div className="flex items-center flex-shrink-0 text-white mr-6 py-6">
              <span className="font-semibold text-2xl tracking-tight">
                车万皇帝纪行
              </span>
            </div>

            <div className="py-6">
              <a
                className="no-underline py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-red-400 rounded-lg hover:bg-red-200 hover:text-red-700 focus:z-10 focus:ring-4 focus:ring-gray-200 transition"
                target="_blank"
                href="https://github.com/touhou-emperor/touhou-emperor.github.io">
                来Github添砖加瓦
              </a>
            </div>
          </div>
        </nav>

        <div className="container mx-auto pt-4">{children}</div>
      </body>
    </html>
  );
}
