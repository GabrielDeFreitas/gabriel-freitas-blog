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
    description: {
      html: string
    }
  }
}

export default function PostTemplate ({ post }: PostTemplateProps) {
  return (
    <>
      <h1>{post.name}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.description.html }} />
    </>
  )
}
