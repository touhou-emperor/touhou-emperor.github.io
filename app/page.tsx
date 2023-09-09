'use client';
import { useState, useCallback } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { debounce } from 'lodash';

import PageMDX from './page.mdx';

interface IndexItem {
  hash: string;
  text: string;
}

const _indexs: IndexItem[] = [];

export default function Page() {
  const [indexs, _setIndexs] = useState<IndexItem[]>([]);

  const setIndexs = useCallback(
    debounce(() => {
      _setIndexs(_indexs);
    }, 500),
    []
  );

  return (
    <>
      <details>
        <summary>目录</summary>
        <ul>
          {indexs.map(({ hash, text }) => (
            <li key={hash}>
              <a href={`#${hash}`}>{text}</a>
            </li>
          ))}
        </ul>
      </details>

      <MDXProvider
        components={{
          img: (props) => (
            <img
              className="mx-auto my-0"
              loading="lazy"
              {...props}
            />
          ),
          h2: (props) => {
            _indexs.push({
              hash: encodeURIComponent(props.children as string),
              text: props.children as string,
            });

            setIndexs();

            return (
              <h2
                id={encodeURIComponent(props.children as string)}
                {...props}></h2>
            );
          },
        }}>
        <PageMDX />
      </MDXProvider>
    </>
  );
}
