//import { Inter } from 'next/font/google'
import Tiles, { TilesProps } from "@/components/Tiles"
import LinkWrapper from "@/components/Link"

//const inter = Inter({ subsets: ['latin'] })
const HomeTemplate = ({ posts }: TilesProps) => (
  <>
    <main className="w-4/5 mx-auto">
      <div className="p-4">
      <LinkWrapper href="/about">
          <h2>
            <span>About</span>
          </h2>
        </LinkWrapper>
        <Tiles posts={posts}/>
      </div>
    </main>
  </>
)

export default HomeTemplate
