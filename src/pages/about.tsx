import client from "@/graphql/client"
import { GET_PAGES} from "@/graphql/queries"
import AboutTemplate from "@/templates/About"

const Post = () => (
  <>
    <main className="w-4/5 mx-auto">
      <div className="p-4">
        <AboutTemplate/>
      </div>
    </main>
  </>
)

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES)

  console.log(pages)

  return {
    props:{}
  }
}

export default Post
