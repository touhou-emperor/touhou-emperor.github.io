'use client';
import { MDXProvider } from '@mdx-js/react';

import PageMDX from './page.mdx';

export default function Page() {
  return (
    <MDXProvider
      components={{
        img: (props) => (
          <img
            className="mx-auto my-0"
            loading="lazy"
            {...props}
          />
        ),
        h2: (props) => (
          <h2
            id={props.children as string}
            {...props}></h2>
        ),
      }}>
      <PageMDX />
    </MDXProvider>
  );
}
