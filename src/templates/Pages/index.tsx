import Contact from '@/components/Contact'
import { NextSeo } from 'next-seo'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
<>
  <NextSeo
    title={`Gabriel Freitas | Blog - ${heading}`}
    description={
      heading ||
      'A simple study blog project.'
    }
    canonical="https://gabrielfreitas.blog.com.br"
    openGraph={{
    url: 'https://gabrielfreitas.blog.com.br',
    title: `Gabriel Freitas | Blog - ${heading}`,
    description:
      heading ||
      'A simple study blog project.',
      images: [
        {
          url: 'https://gabrielfreitas.blog.com.br/img/cover.png',
          width: 1280,
          height: 720,
          alt: 'Gabriel Freitas | Blog'
        }
      ],
    }}
  />
  <main className="max-w-2xl mx-auto py-10 px-4">
    <article className="py-6 prose dark:prose-invert">
      <h1 className="mb-1 md:mb-6 font-medium text-lg">{heading}</h1>
      <hr className="my-4"/>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <hr className="my-4"/>
    </article>
  </main>
  <Contact/>
</>
)

export default PageTemplate
