//import { Inter } from 'next/font/google'
import { NextSeo } from 'next-seo'
import Tiles, { TilesProps } from "@/components/Tiles"
import LinkWrapper from "@/components/Link"

//const inter = Inter({ subsets: ['latin'] })
const HomeTemplate = ({ posts }: TilesProps) => (
  <>
    <NextSeo
      title="Gabriel Freitas | Blog"
      description="A simple study blog project"
      canonical="https://gabrielfreitas.blog.com.br"
      openGraph={{
        url: 'https://gabrielfreitas.blog.com.br',
        title: 'Gabriel Freitas | Blog',
        description:
          'A simple study blog project',
        images: [
          {
            url: 'https://gabrielfreitas.blog.com.br/img/cover.png',
            width: 1280,
            height: 720,
            alt: 'Gabriel Freitas | Blog'
          }
        ],
        site_name: 'Gabriel Freitas | Blog'
      }}
    />
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