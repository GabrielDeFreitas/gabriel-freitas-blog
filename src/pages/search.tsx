import { TilesProps } from '@/components/Tiles';
import client from '@/graphql/client';
import { GetPostsQuery } from '@/graphql/generated/graphql';
import { GET_POSTS } from '@/graphql/queries';
import SearchTemplate from '@/templates/Search';

export default function Search({ posts }: TilesProps) {
  return <SearchTemplate posts={posts} />;
}

export const getStaticProps = async () => {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS);

  return {
    props: {
      posts,
    },
  };
};
