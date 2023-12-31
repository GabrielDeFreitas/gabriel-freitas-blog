import Link from 'next/link';
import { format } from 'date-fns';
import { Calendar2Week } from '@styled-icons/bootstrap/Calendar2Week';

type Post = {
  id: string;
  name: string;
  shortDescription: string;
  slug: string;
  createdAt: number;
};

export type TilesProps = {
  posts?: Post[];
};

const Tiles = ({ posts = [] }: TilesProps) => (
  <>
    <main className="max-w-2xl mx-auto py-10 px-4">
      <hr className="my-4" />
      <ul className="grid gap-y-10">
        {Array.isArray(posts) &&
          posts.map(({ id, slug, name, createdAt, shortDescription }) => {
            return (
              <li key={`post-${id}`}>
                <Link
                  className="group relative flex rounded-2xl p-2 md:active:scale-98 items-center justify-between"
                  href={`/posts/${slug}`}
                >
                  <div>
                    <h2 className="title-text-transform min-h-[26px] text-gray-500 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-200 sm:block">
                      {name}
                    </h2>
                    <p className="my-0 dark:text-gray-350 hidden min-h-[26px] text-gray-500 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-200 sm:block">
                      {shortDescription}
                    </p>
                    <div className="flex gap-1.5">
                      <Calendar2Week
                        size={21}
                        aria-label="Calendar Icon"
                        className="align-middle text-gray-500 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-200"
                      />
                      <p className="italic my-0 dark:text-gray-350 min-h-[26px] text-gray-500 transition-colors group-hover:text-gray-900 dark:group-hover:text-gray-200 sm:block">
                        {format(new Date(createdAt), 'MMMM d, yyyy |  hh:mm a')}
                      </p>
                    </div>
                  </div>
                  <span className="absolute inset-1 -z-10 rounded-2xl bg-gray-100 opacity-0 transition-all duration-200 ease-bounce group-hover:-inset-2 dark:bg-gray-800 md:block group-hover:opacity-100"></span>
                </Link>
              </li>
            );
          })}
      </ul>
      <hr className="my-4" />
    </main>
  </>
);

export default Tiles;
