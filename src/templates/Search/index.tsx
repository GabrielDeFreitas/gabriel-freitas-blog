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
      <SearchInput posts={posts} onSearch={handleSearchResults} />
      {showResults && <Tiles posts={searchResults} />}{' '}
    </>
  );
};

export default SearchTemplate;
