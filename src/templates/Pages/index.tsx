import Contact from '@/components/Contact';
import { NextSeo } from 'next-seo';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <>
    <NextSeo
      title={`Gabriel Freitas | Blog - ${heading}`}
      description={heading || 'A simple study blog project.'}
      canonical="https://gabriel-freitas-blog.vercel.app"
      openGraph={{
        url: 'https://gabriel-freitas-blog.vercel.app',
        title: `Gabriel Freitas | Blog - ${heading}`,
        description: heading || 'A simple study blog project.',
        images: [
          {
            url: 'https://gabriel-freitas-blog.vercel.app/img/cover.png',
            width: 1280,
            height: 720,
            alt: 'Gabriel Freitas | Blog',
          },
        ],
      }}
    />
    <main className="max-w-2xl mx-auto py-10 px-4">
      <article className="py-6 prose dark:prose-invert">
        <h1 className="title-text-transform min-h-[26px] text-gray-600 dark:text-white font-medium mb-1 md:mb-6 text-2xl">
          {heading}
        </h1>
        <hr className="my-4" />
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <hr className="my-4" />
      </article>
    </main>
    <Contact />
  </>
);

export default PageTemplate;
