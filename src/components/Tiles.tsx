import LinkWrapper from "./Link"

const Tiles = () => (
  <>
    <ul className="grid gap-y-10 m-4">
      <li className="flex gap-4 flex-col p-8 bg-white border border-gray-300 rounded">
        <span>22 de ago, 2023</span>
        <LinkWrapper/>
        <div className="flex-grow">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.</div>
      </li>
      <li className="flex gap-4 flex-col p-8 bg-white border border-gray-300 rounded">
        <span>22 de ago, 2023</span>
        <LinkWrapper/>
        <div className="flex-grow">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.</div>
      </li>
      <li className="flex gap-4 flex-col p-8 bg-white border border-gray-300 rounded">
        <span>22 de ago, 2023</span>
        <LinkWrapper/>
        <div className="flex-grow">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.</div>
      </li>
    </ul>
  </>
)

export default Tiles
