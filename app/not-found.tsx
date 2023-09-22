import Link from 'next/link';

export default function PostNotFound() {
  return (
    <section className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl font-extrabold tracking-tight text-primary lg:text-9xl">
            404
          </h1>
          <p className="mb-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
            Această pagină lipsește.
          </p>
          <p className="mb-6 text-lg font-light text-gray-200">
            Ne pare rău, nu putem găsi pagina respectivă. Veți găsi multe de
            explorat pe pagina principala.
          </p>
          <Link
            href="/"
            className="mr-3 rounded-md bg-teal-700 py-2.5 px-4 text-sm font-semibold uppercase text-white transition ease-in hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800 md:px-5"
          >
            Acasă
          </Link>
        </div>
      </div>
    </section>
  );
}
