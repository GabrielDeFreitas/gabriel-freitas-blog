import Link from 'next/link'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <>
    <Link href={href} className="text-wai-green hover:underline focus:outline-offset-8 focus:outline-blue-700 visited:text-wai-green">
      <h2 className="flex items-start">
        <span>{children}</span>
      </h2>
    </Link>
  </>
)

export default LinkWrapper
