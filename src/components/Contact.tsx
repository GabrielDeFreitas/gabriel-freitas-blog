import { Github } from '@styled-icons/bootstrap/Github';
import { Twitter } from '@styled-icons/bootstrap/Twitter';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';
import Link from 'next/link';
import socialLinks from '/home/gabrielfreitas/nextjs-blog-template/src/templates/socialLinks.json';

const Contact = () => (
  <>
    <div className="max-w-2xl mx-auto py-1 pb-14 px-4">
      <div className="mb-4 flex flex-col md:flex-row items-start md:items-center rounded-2xl bg-gray-50 p-4 dark:bg-gray-800 md:-mx-6 md:p-6">
        <div className="flex-grow">
          <h2 className="min-h-[26px] text-gray-600 dark:text-white font-medium mb-2 md:mb-0">
            If you want to have a chat, feel free to contact me.
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2 md:justify-end">
          <li>
            <Link
              href={socialLinks.github}
              className="text-gray-500 dark:text-gray-200 transition-colors hover:text-gray-800 dark:hover:text-gray-400"
            >
              <Github size={25} aria-label="GitHub Icon" className="w-6 h-6" />
            </Link>
          </li>
          <li>
            <Link
              href={socialLinks.twitter}
              className="text-gray-500 dark:text-gray-200 transition-colors hover:text-gray-800 dark:hover:text-gray-400"
            >
              <Twitter size={25} aria-label="Twitter Icon" className="w-6 h-6 fill-current" />
            </Link>
          </li>
          <li>
            <Link
              href={socialLinks.linkedin}
              className="text-gray-500 dark:text-gray-200 transition-colors hover:text-gray-800 dark:hover:text-gray-400"
            >
              <Linkedin size={25} aria-label="Linkedin Icon" className="w-6 h-6 fill-current" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Contact;
