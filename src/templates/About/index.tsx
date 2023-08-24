import LinkWrapper from '@/components/Link'

const AboutTemplate = () => (
<>
  <LinkWrapper href="/">
    <h2>
      <span>Return</span>
    </h2>
  </LinkWrapper>
  <article className="flex gap-4 flex-col p-8 bg-white border border-gray-300 rounded">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi sit amet felis
      fringilla, a consequat elit cursus. Fusce et magna eget libero elementum ultricies at
      nec urna. Nulla facilisi.
    </p>
  </article>
</>
)

export default AboutTemplate
