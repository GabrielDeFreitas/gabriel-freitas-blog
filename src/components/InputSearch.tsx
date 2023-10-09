import React, { useState } from 'react';

type Post = {
  id: string;
  name: string;
  shortDescription: string;
  slug: string;
  createdAt: number;
};

type SearchInputProps = {
  onSearch: (searchTerm: string, posts: Post[] | undefined) => void;
  posts?: Post[] | undefined;
};

const SearchInput = ({ onSearch, posts }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setErrorMessage('');
  };

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm === '') {
      setErrorMessage('Enter something to search.');
    } else {
      setErrorMessage('No results found.');
      onSearch(trimmedSearchTerm, posts);
    }
  };

  return (
    <div>
      <input
        autoFocus
        type="text"
        name="search"
        autoComplete="off"
        placeholder="Search for anything..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default SearchInput;
