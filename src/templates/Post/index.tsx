import Image from 'next/image'
import LinkWrapper from '@/components/Link'

const PostTemplate = () => (
<>
  <article className="flex gap-4 flex-col p-8 bg-white border border-gray-300 rounded">
    <LinkWrapper href="/">
      <h2>
        <span>Return</span>
      </h2>
    </LinkWrapper>
    <header className="">
      <h1>title rarirama</h1>
      <span>Wednesday June 1, 2022</span>
    </header>
    <Image
      src="https://bit.ly/placeholder-img"
      alt="image placeholder"
      width={32}
      height={32}
      quality={75}
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi sit amet felis
      fringilla, a consequat elit cursus. Fusce et magna eget libero elementum ultricies at
      nec urna. Nulla facilisi.
    </p>
    <p>
      Quisque tincidunt, nunc in efficitur congue, orci urna ultrices nisl, vel tincidunt
      tortor sapien non mi. Proin facilisis nisi et purus congue, in eleifend lorem volutpat.
      Curabitur at purus sit amet ligula iaculis tincidunt.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod nisi sit amet felis
      fringilla, a consequat elit cursus. Fusce et magna eget libero elementum ultricies at
      nec urna. Nulla facilisi.
    </p>
    <p>
      Quisque tincidunt, nunc in efficitur congue, orci urna ultrices nisl, vel tincidunt
      tortor sapien non mi. Proin facilisis nisi et purus congue, in eleifend lorem volutpat.
      Curabitur at purus sit amet ligula iaculis tincidunt.
    </p>
  </article>
</>
)

export default PostTemplate
