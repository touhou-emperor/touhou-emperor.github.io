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
      <div className="md:flex flex-row gap-8 p-8">
        <div className="md:w-1/4 shrink md:sticky md:top-0 flex-auto h-72 md:h-screen mb-8 md:mb-0 overflow-auto pr-4">
          <summary>目录</summary>
          <ul>
            {indexs.map(({ hash, text }) => (
              <li key={hash} className="py-1">
                <a href={`#${hash}`} className="no-underline hover:underline">{text}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-3/4 leading-8 grow flex-auto">
          <MDXProvider
            components={{
              img: (props) => (
                <img
                  className="mx-auto my-4 md:max-w-[80%] max-w-full"
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
              a: (props) => (
                <a {...props} className={'text-red-800 px-1'} />
              )
            }}>
            <PageMDX />
          </MDXProvider>
        </div>
      </div>
    </>
  );
}
