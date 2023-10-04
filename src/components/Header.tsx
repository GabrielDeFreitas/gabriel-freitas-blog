import Link from 'next/link';
import { ModeToggle } from './ModeToggle';

const Header = () => (
  <>
    <header className="max-w-2xl mx-auto py-10 px-4">
      <div className="flex items-center justify-between">
        <ModeToggle />
        <nav className="ml-auto text-sm font-medium space-x-6">
          <Link
            className="hover:underline focus:outline-offset-8 focus:outline-black-700 visited:text-wai-green"
            href="/"
          >
            Home
          </Link>
          <Link
            className="hover:underline focus:outline-offset-8 focus:outline-black-700 visited:text-wai-green"
            href="/about"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  </>
);

export default Header;
