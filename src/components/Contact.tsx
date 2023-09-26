import Link from 'next/link';

const Contact = () => (
  <>
    <div className="max-w-2xl mx-auto py-1 pb-14 px-4">
      <div className="mb-4 flex items-center rounded-2xl bg-gray-50 p-4 dark:bg-gray-800 md:-mx-6 md:p-6">
        <div className="mr-4">
          <h2 className="font-medium">Get in touch</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            If you want to have a chat, feel free to contact me.
          </p>
        </div>
        <Link
          className="ml-auto rounded border border-gray-300 bg-gray-50 px-2.5 py-2 text-sm font-medium leading-none text-gray-700 shadow-sm hover:border-gray-400 hover:bg-gray-100 hover:text-gray-800 active:scale-98 active:shadow-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-700 dark:hover:text-gray-200"
          href="/contact"
        >
          Contact
        </Link>
      </div>
    </div>
  </>
);

export default Contact;
