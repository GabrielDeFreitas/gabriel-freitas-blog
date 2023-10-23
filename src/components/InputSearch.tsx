import React, { useState } from 'react';
import { Search } from '@styled-icons/bootstrap/Search';

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
      setErrorMessage('');
      onSearch(trimmedSearchTerm, posts);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 pb-4 px-4 mb-[-4rem]">
      <h1 className="title-text-transform my-1 font-medium text-2xl min-h-[26px] text-gray-600 dark:text-white">
        Search
      </h1>
      <p className="min-h-[26px] text-gray-600 dark:text-white font-medium">
        Search any article ...
      </p>
      <div className="flex flex-col space-y-2 my-6">
        <div className="flex items-center space-x-2">
          <input
            autoFocus
            aria-label="Search field"
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Search for anything..."
            value={searchTerm}
            onChange={handleInputChange}
            className="w-full px-4 py-4 rounded-md border flex items-center justify-center hover:border-gray-400 hover:bg-gray-100 hover:text-gray-800 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded"
            aria-label="Clique aqui para fazer alguma ação"
          >
            <span className="flex items-center justify-center">
              <Search size={25} aria-hidden="true" aria-label="Button Search" className="w-6 h-6" />
            </span>
          </button>
        </div>
        {errorMessage && <p className="text-red-500 text-xl font-medium">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default SearchInput;
