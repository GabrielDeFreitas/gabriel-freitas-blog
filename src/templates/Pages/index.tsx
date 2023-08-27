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
  <article className="flex gap-4 flex-col p-8 bg-white border border-gray-300 rounded">
    <h1>{heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </article>
</>
)

export default PageTemplate
