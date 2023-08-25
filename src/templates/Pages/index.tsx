import LinkWrapper from '@/components/Link'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
<>
  <LinkWrapper href="/">
    <h2>
      <span>Return</span>
    </h2>
  </LinkWrapper>
  <article className="flex gap-4 flex-col p-8 bg-white border border-gray-300 rounded">
    <h1>{heading}</h1>
    <div dangerouslySetInnerHTML={{ __html: body }} />
  </article>
</>
)

export default PageTemplate
