import { NextSeo } from 'next-seo'
import Image from 'next/image'

type imageProps = {
  url: string
  height: number
  width: number
}

export type PostTemplateProps = {
  post: {
    slug: string
    name: string
    image: imageProps[]
    description?: {
      html: string
      text: string
    }
  }
}

export default function PostTemplate ({ post }: PostTemplateProps) {

  return (
    <>
      <NextSeo
        title={`Gabriel Freitas | Blog - ${post.name}`}
        description={
          post.description?.text ||
          'A simple study blog project.'
        }
        canonical="https://gabrielfreitas.blog.com.br"
        openGraph={{
          url: 'https://gabrielfreitas.blog.com.br',
          title: `Gabriel Freitas | Blog - ${post.name}`,
          description:
            post.description?.text ||
            'A simple study blog project.',
          images: [
            {
              url: post.image[0].url,
              width: post.image[0].width,
              height: post.image[0].height,
              alt: `${post.name}`
            }
          ]
        }}
      />
       <div>
          {post.image.map((image, index) => (
            <>
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={post.name}
                width={image.width}
                height={image.height}
                quality={75}
              />
            </>
          ))}
        </div>
      <h1>{post.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.description?.html || '' }} />
    </>
  )
}
