import Link from 'next/link'

const Header = () => (
  <>
    <header className='max-w-2xl mx-auto py-10 px-4'>
      <div className="flex items-center justify-between">
          <button className="border rounded-md w-6 h-6 flex items-center justify-center">
          </button>
          <nav className="ml-auto text-sm font-medium space-x-6">
            <Link className="hover:underline focus:outline-offset-8 focus:outline-black-700 visited:text-wai-green" href="/">Home</Link>
            <Link className="hover:underline focus:outline-offset-8 focus:outline-black-700 visited:text-wai-green" href="/about">About</Link>
          </nav>
      </div>
    </header>
  </>
)

export default Header
