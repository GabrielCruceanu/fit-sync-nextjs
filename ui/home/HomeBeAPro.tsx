import SectionWithWave from '#/ui/shared/SectionWithWave';
import Image from 'next/image';
import HowItWorksJpg from '#/public/images/client/how-it-works.jpg';
import Link from 'next/link';
import { PagesLinks } from '#/constants/links';

export default function HomeBeAPro() {
  return (
    <SectionWithWave bgWhite={false}>
      <>
        <div className="mx-auto max-w-screen-xl items-center gap-8 py-8 px-4 sm:py-16 md:grid md:grid-cols-2 lg:px-6 xl:gap-16">
          <Image
            src={HowItWorksJpg}
            alt="Antrenează clienții online"
            placeholder="blur"
            className="mx-auto mt-4 w-full rounded-3xl"
          />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
              Sunteți un profesionist?
            </h2>
            <p className="mb-6 font-light text-gray-400 md:text-lg">
              {/*Sunteți un antrenor și doriți să vă manageriati clienții mai ușor*/}
              {/*având toate informațiile necesare întrun singur loc și să obțineți*/}
              {/*mai multă expunere prin listarea pe platforma Kaapo.FIt?*/}
              Sunteți un profesionist și doriți să obțineți mai multă expunere
              prin listarea pe platforma Kaapo.Fit?
            </p>

            <Link
              scroll={true}
              href={PagesLinks.trainerHomePage.link}
              className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Detalii
              <svg
                className="ml-2 -mr-1 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </>
    </SectionWithWave>
  );
}
