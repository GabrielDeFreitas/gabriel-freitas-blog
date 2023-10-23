import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { NextSeo } from 'next-seo';
import Tiles, { TilesProps } from '@/components/Tiles';

const HomeTemplate = ({ posts }: TilesProps) => {
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 4;

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
        canonical="https://gabriel-freitas-blog.vercel.app/"
        openGraph={{
          url: 'https://gabriel-freitas-blog.vercel.app',
          title: 'Gabriel Freitas | Blog',
          description: 'A simple study blog project',
          images: [
            {
              url: 'https://gabriel-freitas-blog.vercel.app/img/cover.png',
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
            activeClassName={'custom-page-buttom-active'}
            previousLinkClassName={currentPage === 0 ? 'hidden' : 'custom-page-buttom'}
            nextLinkClassName={currentPage === pageCount - 1 ? 'hidden' : 'custom-page-buttom'}
            pageLinkClassName={'custom-page-buttom'}
            breakLinkClassName={'bg-gray-200 text-gray-700 border border-gray-300 px-3 py-1'}
          />
        )}
      </div>
    </>
  );
};

export default HomeTemplate;
