import Contact from '@/components/Contact';

export type PageTemplateProps = {
  heading: string;
  body: string;
};

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <>
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
