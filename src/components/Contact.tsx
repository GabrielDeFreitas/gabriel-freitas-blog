import { Github } from '@styled-icons/bootstrap/Github';
import { Twitter } from '@styled-icons/bootstrap/Twitter';
import { Linkedin } from '@styled-icons/bootstrap/Linkedin';

const Contact = () => (
  <>
    <div className="max-w-2xl mx-auto py-1 pb-14 px-4">
      <div className="mb-4 flex flex-col md:flex-row items-start md:items-center rounded-2xl bg-gray-50 p-4 dark:bg-gray-800 md:-mx-6 md:p-6">
        <div className="flex-grow">
          <h2 className="font-medium mb-2 md:mb-0">
            If you want to have a chat, feel free to contact me.
          </h2>
        </div>
        <ul className="flex flex-wrap gap-2 md:justify-end">
          <li>
            <a href="#">
              <Github size={25} aria-label="GitHub Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Twitter size={25} aria-label="Twitter Icon" />
            </a>
          </li>
          <li>
            <a href="#">
              <Linkedin size={25} aria-label="Linkedin Icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </>
);

export default Contact;
