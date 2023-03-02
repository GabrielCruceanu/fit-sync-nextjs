'use client';
import Image from 'next/image';
import HeroBackground from '#/ui/shared/HeroBackground';
import HowItWorkImage from '#/public/images/homepage/how-it-works.png';
import { executeScroll } from '#/lib/scrollTo';
import Button, { ButtonType } from '#/ui/shared/Button';

export default function HomeHeader() {
  const handleScroll = () => {
    // Scroll to the trainer section where we see the trainers searched
    executeScroll('home-details');
  };
  return (
    <section className="relative  z-0 flex min-h-screen w-full items-center justify-center bg-gray-900 p-4">
      <HeroBackground />
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:py-16">
        <div className="mb-8 grid items-center gap-6 lg:mb-16 lg:grid-cols-12 lg:gap-12">
          <div className="col-span-6 text-center sm:mb-6 lg:mb-0 lg:text-left">
            {/*Banner*/}
            {/*<a*/}
            {/*  href="#"*/}
            {/*  className="mb-6 inline-flex items-center justify-between rounded-full bg-gray-800 px-1 py-1 pr-4 text-sm text-white hover:bg-gray-700"*/}
            {/*  role="alert"*/}
            {/*>*/}
            {/*  <span className="mr-3 rounded-full bg-primary-600 px-3 py-1 text-xs text-white">*/}
            {/*    New*/}
            {/*  </span>{' '}*/}
            {/*  <span className="text-sm font-medium">*/}
            {/*    Flowbite is out! See new*/}
            {/*  </span>*/}
            {/*  <svg*/}
            {/*    className="ml-2 h-5 w-5"*/}
            {/*    fill="currentColor"*/}
            {/*    viewBox="0 0 20 20"*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*  >*/}
            {/*    <path*/}
            {/*      fillRule="evenodd"*/}
            {/*      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"*/}
            {/*      clipRule="evenodd"*/}
            {/*    ></path>*/}
            {/*  </svg>*/}
            {/*</a>*/}
            <h1 className="mb-4 text-4xl font-bold leading-none tracking-normal text-white md:text-5xl xl:text-6xl">
              Găseșțe antrenorul, nutriționistul sau sala de sport acum!
            </h1>
            <p className="mx-auto mb-6 max-w-xl font-light text-gray-300 md:text-lg lg:mx-0 xl:mb-8 xl:text-xl">
              Kaapo.Fit oferă profiluri detaliate ale antrenorilor,
              nutriționiștilor și ale centrelor de fitness, astfel încât să îl
              poți găsi pe cel care se potrivește cel mai bine nevoilor tale.
            </p>
            <Button
              onClick={() => handleScroll()}
              type={ButtonType.primary}
              description={'Detalii'}
            />
          </div>

          <div className="col-span-6">
            <Image
              src={HowItWorkImage}
              alt="Găseșțe pe Kaapo.Fit"
              placeholder="blur"
              width={600}
              height={435}
              className="mx-auto mt-4 block w-full "
            />
          </div>
        </div>
        {/*<div className="grid gap-8 sm:gap-12 md:grid-cols-3">*/}
        {/*  <div className="flex justify-center">*/}
        {/*    <svg*/}
        {/*      className="mr-3 h-6 w-6 shrink-0 text-primary-500"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 20 20"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        fillRule="evenodd"*/}
        {/*        d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z"*/}
        {/*        clipRule="evenodd"*/}
        {/*      ></path>*/}
        {/*    </svg>*/}
        {/*    <div>*/}
        {/*      <h3 className="mb-1 text-lg font-semibold leading-tight text-white">*/}
        {/*        Progress Tracking*/}
        {/*      </h3>*/}
        {/*      <p className="font-light text-gray-300">*/}
        {/*        Oferim o monitorizare detaliată a progresului, astfel încât să*/}
        {/*        poți rămâne motivat și să îți păstrazi obiectivul focusat.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="flex justify-center">*/}
        {/*    <svg*/}
        {/*      className="mr-3 h-6 w-6 shrink-0 text-primary-500"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 20 20"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        fillRule="evenodd"*/}
        {/*        d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z"*/}
        {/*        clipRule="evenodd"*/}
        {/*      ></path>*/}
        {/*    </svg>*/}
        {/*    <div>*/}
        {/*      <h3 className="mb-1 text-lg font-semibold leading-tight text-white">*/}
        {/*        Planuri de antrenament personalizate*/}
        {/*      </h3>*/}
        {/*      <p className="font-light text-gray-300">*/}
        {/*        Antrenorii de pe platforma noastră oferă, de asemenea, planuri*/}
        {/*        de antrenament personalizate, adaptate la obiectivele tale.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <div className="flex justify-center">*/}
        {/*    <svg*/}
        {/*      aria-hidden="true"*/}
        {/*      fill="currentColor"*/}
        {/*      viewBox="0 0 20 20"*/}
        {/*      xmlns="http://www.w3.org/2000/svg"*/}
        {/*      className="mr-3 h-6 w-6 shrink-0 text-primary-500"*/}
        {/*    >*/}
        {/*      <path*/}
        {/*        clipRule="evenodd"*/}
        {/*        d="M10 2a.75.75 0 01.75.75v.258a33.186 33.186 0 016.668.83.75.75 0 01-.336 1.461 31.28 31.28 0 00-1.103-.232l1.702 7.545a.75.75 0 01-.387.832A4.981 4.981 0 0115 14c-.825 0-1.606-.2-2.294-.556a.75.75 0 01-.387-.832l1.77-7.849a31.743 31.743 0 00-3.339-.254v11.505a20.01 20.01 0 013.78.501.75.75 0 11-.339 1.462A18.558 18.558 0 0010 17.5c-1.442 0-2.845.165-4.191.477a.75.75 0 01-.338-1.462 20.01 20.01 0 013.779-.501V4.509c-1.129.026-2.243.112-3.34.254l1.771 7.85a.75.75 0 01-.387.83A4.98 4.98 0 015 14a4.98 4.98 0 01-2.294-.556.75.75 0 01-.387-.832L4.02 5.067c-.37.07-.738.148-1.103.232a.75.75 0 01-.336-1.462 32.845 32.845 0 016.668-.829V2.75A.75.75 0 0110 2zM5 7.543L3.92 12.33a3.499 3.499 0 002.16 0L5 7.543zm10 0l-1.08 4.787a3.498 3.498 0 002.16 0L15 7.543z"*/}
        {/*        fillRule="evenodd"*/}
        {/*      ></path>*/}
        {/*    </svg>*/}

        {/*    <div>*/}
        {/*      <h3 className="mb-1 text-lg font-semibold leading-tight text-white">*/}
        {/*        Planuri de nutriție personalizate*/}
        {/*      </h3>*/}
        {/*      <p className="font-light text-gray-300">*/}
        {/*        Nutriționiștii de pe platforma noastră oferă, de asemenea,*/}
        {/*        planuri de nutritie personalizate, adaptate la obiectivele tale.*/}
        {/*      </p>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    </section>
  );
}
