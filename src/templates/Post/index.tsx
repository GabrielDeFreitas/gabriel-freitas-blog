import Comments from '@/components/Comments';
import Contact from '@/components/Contact';
import { NextSeo } from 'next-seo';
import Image from 'next/image';

type imageProps = {
  url: string;
  height: number;
  width: number;
};

export type PostTemplateProps = {
  post: {
    slug: string;
    name: string;
    shortDescription: string;
    image: imageProps[];
    description?: {
      html: string;
      text: string;
    };
  };
};

export default function PostTemplate({ post }: PostTemplateProps) {
  return (
    <>
      <NextSeo
        title={`Gabriel Freitas | Blog - ${post.name}`}
        description={post.description?.text || 'A simple study blog project.'}
        canonical="https://gabriel-freitas-blog.vercel.app"
        openGraph={{
          url: 'https://gabriel-freitas-blog.vercel.app',
          title: `Gabriel Freitas | Blog - ${post.name}`,
          description: post.description?.text || 'A simple study blog project.',
          images: [
            {
              url: post.image[0].url,
              width: post.image[0].width,
              height: post.image[0].height,
              alt: `${post.name}`,
            },
          ],
        }}
      />
      <main className="max-w-2xl mx-auto py-10 pb-4 px-4">
        <article className="py-6 prose dark:prose-invert">
          <h1 className="title-text-transform my-1 font-medium text-2xl min-h-[26px] text-gray-600 dark:text-white">
            {post.name}
          </h1>
          <p className="my-0 text-gray-600 dark:text-gray-200">{post.shortDescription}</p>
          <hr className="my-4" />
          {post.image.map((image, index) => (
            <>
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={post.name}
                width={image.width}
                height={image.height}
                quality={75}
                loading="eager"
                layout="responsive"
                placeholder="blur"
                blurDataURL={image.url}
                sizes="(max-width: 768px), (max-width: 1200px)"
              />
            </>
          ))}
          <div dangerouslySetInnerHTML={{ __html: post.description?.html || '' }} />
          <hr className="my-4" />
          <Comments />
        </article>
      </main>
      <Contact />
    </>
  );
}
