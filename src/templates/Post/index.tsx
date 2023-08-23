import Image from 'next/image'

const PostTemplate = () => (
<>
  <article className="flex gap-4 flex-col p-8 bg-white border border-gray-300 rounded">
    <header className="">
      <h1>title rarirama</h1>
      <span>Wednesday June 1, 2022</span>
    </header>
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
    <Image
      src="https://bit.ly/placeholder-img"
      alt="image placeholder"
      width={32}
      height={32}
      quality={75}
    />
  </article>
</>
)

export default PostTemplate
