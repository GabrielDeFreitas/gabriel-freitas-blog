import { TilesProps } from "@/components/Tiles";
import client from "@/graphql/client";
import { GetPostsQuery } from "@/graphql/generated/graphql";
import { GET_POSTS } from "@/graphql/queries";
import HomeTemplate from "@/templates/Home"

export default function Home({ posts }: TilesProps) {
  return <HomeTemplate posts={posts}/>
}

export const getStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS)

  return {
    props: {
      posts
    }
  }
}
