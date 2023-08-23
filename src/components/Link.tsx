import Link from 'next/link'

const LinkWrapper = () => (
  <>
    <Link href="#" className="text-wai-green hover:underline focus:outline-offset-8 focus:outline-blue-700 visited:text-wai-green">
      <h2 className="flex items-start">
        <span>What is Lorem Ipsum?</span>
      </h2>
    </Link>
  </>
)

export default LinkWrapper
