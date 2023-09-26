import client from '@/graphql/client';
import { GetPostBySlugQuery, GetPostsQuery } from '@/graphql/generated/graphql';
import { GET_POSTS, GET_POST_BY_SLUG } from '@/graphql/queries';
import PostTemplate, { PostTemplateProps } from '@/templates/Post';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export default function Post({ post }: PostTemplateProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Loading...</div>;

  return <PostTemplate post={post} />;
}

export async function getStaticPaths() {
  const { posts } = await client.request<GetPostsQuery>(GET_POSTS, { first: 3 });

  const paths = posts.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { post } = await client.request<GetPostBySlugQuery>(GET_POST_BY_SLUG, {
    slug: `${params?.slug}`,
  });

  if (!post) return { notFound: true };

  return {
    revalidate: 60, // once per day
    props: {
      post,
    },
  };
};
