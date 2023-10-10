import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Tiles, { TilesProps } from '@/components/Tiles';
import SearchInput from '@/components/InputSearch';

type Post = {
  id: string;
  name: string;
  shortDescription: string;
  slug: string;
  createdAt: number;
};

const SearchTemplate = ({ posts }: TilesProps) => {
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleSearchResults = (searchTerm: string, posts?: Post[]) => {
    if (posts) {
      const searchResults = posts.filter((post) =>
        post.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(searchResults);
      setShowResults(true);
    }
  };

  return (
    <>
      <NextSeo
        title="Gabriel Freitas | Blog"
        description="A simple study blog project"
        canonical="https://gabriel-freitas-blog.vercel.app"
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
      <SearchInput posts={posts} onSearch={handleSearchResults} />
      {showResults && searchResults.length > 0 && <Tiles posts={searchResults} />}{' '}
    </>
  );
};

export default SearchTemplate;
