import LinkWrapper from "./Link"

type Post = {
  id: string
  name: string
  slug: string
  createdAt: number
}

export type TilesProps = {
  posts?: Post[]
}

const Tiles = ({ posts }: TilesProps) => (
  <>
    <ul className="grid gap-y-10 m-4">
      {posts?.map(({ id, slug, name, createdAt }) => {
        return (
          <li key={`post-${id}`} className="flex gap-4 flex-col p-8 bg-white border border-gray-300 rounded">
            <span>{createdAt}</span>
              <LinkWrapper href="/post">
                <h2>
                  <span>{name}</span>
                </h2>
              </LinkWrapper>
          </li>
        )
      })}
    </ul>
  </>
)

export default Tiles
