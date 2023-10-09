import { Search } from '@styled-icons/bootstrap/Search';
import Link from 'next/link';

const SearchButton = () => (
  <>
    <Link
      href="/search"
      className=" ml-2 border rounded-md w-7 h-7 flex items-center justify-center hover:border-gray-400 hover:bg-gray-100 hover:text-gray-800 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-200"
    >
      <span className="sr-only">Search page</span>
      <Search aria-label="Search icon" className="w-4 h-4" />
    </Link>
  </>
);

export default SearchButton;
