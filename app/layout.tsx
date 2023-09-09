import './globals.css';
import './tailwind.css';

import Script from 'next/script';

export const metadata = {
  title: '车万皇帝纪行',
  description: '东方, 车万, 车万皇帝, 东方Project, 囧仙, 囧仙子, 哆叽, 魅知',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
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
        </nav>

        <div className="container mx-auto p-8">{children}</div>
      </body>
    </html>
  );
}
