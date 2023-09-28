import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NextSeo } from 'next-seo';
import Tiles, { TilesProps } from '@/components/Tiles';

const HomeTemplate = ({ posts }: TilesProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 1;

  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return <div>Nenhum post disponível.</div>;
  }

  const offset = currentPage * postsPerPage;
  const paginatedPosts = posts.slice(offset, offset + postsPerPage);

  const pageCount = Math.ceil(posts.length / postsPerPage);

  const handlePageClick = (data: { selected: number }) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  return (
    <>
      <NextSeo
        title="Gabriel Freitas | Blog"
        description="A simple study blog project"
        canonical="https://gabrielfreitas.blog.com.br"
        openGraph={{
          url: 'https://gabrielfreitas.blog.com.br',
          title: 'Gabriel Freitas | Blog',
          description: 'A simple study blog project',
          images: [
            {
              url: 'https://gabrielfreitas.blog.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Gabriel Freitas | Blog',
            },
          ],
          site_name: 'Gabriel Freitas | Blog',
        }}
      />
      <Tiles posts={paginatedPosts} />
      <div className="max-w-2xl mx-auto py-10 px-4">
        {pageCount > 1 && (
          <ReactPaginate
            previousLabel={'Prev'}
            nextLabel={'Next'}
            breakLabel={'...'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination mt-8 flex justify-center'}
            activeClassName={'py-2'}
            previousLinkClassName={
              currentPage === 0
                ? 'hidden'
                : 'flex items-center justify-center rounded border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm font-medium leading-none text-gray-700 shadow-sm hover:border-gray-400 hover:bg-gray-100 hover:text-gray-800 active:scale-98 active:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-200'
            }
            nextLinkClassName={
              currentPage === pageCount - 1
                ? 'hidden'
                : 'flex items-center justify-center rounded border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm font-medium leading-none text-gray-700 shadow-sm hover:border-gray-400 hover:bg-gray-100 hover:text-gray-800 active:scale-98 active:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-200'
            }
            pageLinkClassName={
              'spacePageLink flex items-center justify-center rounded border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm font-medium leading-none text-gray-700 shadow-sm hover:border-gray-400 hover:bg-gray-100 hover:text-gray-800 active:scale-98 active:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-200'
            }
            breakLinkClassName={'bg-gray-200 text-gray-700 border border-gray-300 px-3 py-1'}
          />
        )}
      </div>
    </>
  );
};

export default HomeTemplate;
