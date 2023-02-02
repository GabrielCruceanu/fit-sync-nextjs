import SectionWithWave from '#/ui/shared/SectionWithWave';
import Image from 'next/image';
import HowItWorkImage from '#/public/images/homepage/how-it-works.png';
import { PagesLinks } from '#/constants/links';
import Button, { ButtonType } from '#/ui/shared/Button';
import Link from 'next/link';

export default function ClientHowItWorks() {
  return (
    <SectionWithWave bgWhite={true}>
      <div className="mx-auto max-w-screen-xl space-y-12 py-8 px-4 sm:py-16 lg:space-y-20 lg:px-6">
        {/*Row*/}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Antrenor Personal
            </h2>
            <p className="mb-4 font-light lg:text-xl">
              Un antrenor personal te poate ajuta să îți descoperi potențialul
              fizic, să îți stabilești obiective realiste și să rămâi motivat.
            </p>
            <p className="mb-8 font-light lg:text-xl">
              Oferind îndrumare și sprijin, acesta te ajută să devii cea mai
              bună versiune a ta.
            </p>
            {/*List*/}
            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Antrenori personali certificați
                </span>
              </li>
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Program de antrenament personal online
                </span>
              </li>
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Antrenament 1 to 1
                </span>
              </li>
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Programare online
                </span>
              </li>
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Chat online
                </span>
              </li>
            </ul>

            <Link
              href={PagesLinks.searchTrainerHomePage.link}
              className="mb-8 text-white"
            >
              <Button
                type={ButtonType.primary}
                description="Caută un Antrenor"
              />
            </Link>
          </div>
          <img
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png"
            alt="office feature image"
          />
        </div>
        {/*Row*/}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <img
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-2.png"
            alt="office feature image 2"
          />
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Nutriționist
            </h2>
            <p className="mb-4 font-light lg:text-xl">
              Nutriționistul este expert în înțelegerea științei din spatele
              alimentelor și a modului în care acestea ne afectează organismul.
            </p>
            <p className="mb-8 font-light lg:text-xl">
              Acesta oferă îndrumarea și sfaturile necesare pentru a te asigura
              că obții cele mai bune beneficii din dieta și exercițiile fizice.
            </p>
            {/*List*/}
            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Nutriționiști certificați
                </span>
              </li>
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Planuri de masă personalizate
                </span>
              </li>
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Programare online
                </span>
              </li>
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Chat online
                </span>
              </li>
            </ul>

            <Link
              href={PagesLinks.searchTrainerHomePage.link}
              className="mb-8 text-white"
            >
              <Button
                type={ButtonType.primary}
                description="Caută un Nutritionist"
              />
            </Link>
          </div>
        </div>
        {/*Row*/}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Sală de antrenament
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>
            {/*List*/}
            <ul
              role="list"
              className="my-7 space-y-5 border-t border-gray-200 pt-8 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Continuous integration and deployment
                </span>
              </li>
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Development workflow
                </span>
              </li>
              <li className="flex space-x-3">
                {/*Icon*/}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-primary-600 dark:text-primary-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Knowledge management
                </span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
          <img
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-1.png"
            alt="office feature image"
          />
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl items-center gap-8 py-8 px-4 sm:py-16 lg:grid lg:grid-cols-2 lg:px-6 xl:gap-16 ">
        {/*<img*/}
        {/*  className="mb-4 w-full rounded-lg lg:mb-0"*/}
        {/*  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/features/feature-office-long.png"*/}
        {/*  alt="feature image"*/}
        {/*/>*/}
        {/*<Image*/}
        {/*  src={HowItWorksJpg}*/}
        {/*  alt="Antrenează clienții online"*/}
        {/*  placeholder="blur"*/}
        {/*  className="mb-4 w-full rounded-lg lg:mb-0"*/}
        {/*/>*/}
        <Image
          src={HowItWorkImage}
          alt="Cum functioneaza Kaapo.Fit"
          placeholder="blur"
          className="mb-4 w-full rounded-lg lg:mb-0"
        />
        <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Ușor, flexibil, simplu.
          </h2>
          <p className="mb-4 font-light lg:text-xl">
            Dacă sunteți un sportiv sau la început de drum și doriți să obțineți
            cele mai bune rezultate, , un nutritionist care sa va ofere un plan
            alimentar n.
          </p>
          <div className="mb-8 text-white">
            <Link href={PagesLinks.searchTrainerHomePage.link}>
              <Button
                type={ButtonType.primary}
                description="Caută un Antrenor"
              />
            </Link>
          </div>

          <div className="mb-6 border-t border-b border-gray-200 py-8 dark:border-gray-700">
            <div className="flex">
              <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                <svg
                  className="h-5 w-5 text-primary-600 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Antrenor personal
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Este important să-ți găsești un antrenor care să îți înțeleagă
                  nevoile și să te ajute să îți atingi obiectivul.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-600"
                >
                  Caută Antrenor
                  <svg
                    className="ml-1 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900">
                <svg
                  className="h-5 w-5 text-purple-600 dark:text-purple-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Nutriționist
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  See the packages your project depends on, the repositories
                  that depend on them, and any vulnerabilities detected.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-600"
                >
                  Learn more
                  <svg
                    className="ml-1 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900">
                <svg
                  className="dark;text-teal-300 h-5 w-5 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Code scanning
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Find vulnerabilities in custom code using static analysis.
                  Prevent new vulnerabilities from being introduced by scanning
                  every pull request.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-teal-600 hover:text-teal-800 dark:text-teal-500 dark:hover:text-teal-600"
                >
                  Learn more
                  <svg
                    className="ml-1 h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <p className="text-sm">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
        </div>
      </div>
      {/*<div className="lg:flex lg:items-center lg:justify-between">*/}
      {/*  <div className="lg:w-2/4 lg:pr-4">*/}
      {/*    <Badge>CUM FUNCȚIONEAZĂ</Badge>*/}
      {/*    <TitleSection>Antrenament personal online</TitleSection>*/}
      {/*    <p>*/}
      {/*      Un antrenor personal este o persoană care vă antrenează pentru a vă*/}
      {/*      atinge obiectivele de fitness. Acesta este de obicei un profesionist*/}
      {/*      cu cunoștințe în diferite tehnici de antrenament și exerciții.*/}
      {/*    </p>*/}
      {/*  </div>*/}

      {/*  <div className="mt-5 lg:mt-0 lg:w-2/4 lg:px-4">*/}
      {/*    <Image*/}
      {/*      src={HowItWorksJpg}*/}
      {/*      alt="Antrenează clienții online"*/}
      {/*      placeholder="blur"*/}
      {/*      className="mx-auto mt-4 w-full rounded-3xl"*/}
      {/*    />*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/*<h3 className="my-6 text-2xl font-semibold md:text-3xl lg:text-center">*/}
      {/*  Cum te poate ajuta platforma Kaapo.Fit?*/}
      {/*</h3>*/}
      {/*<ul className="lg:flex">*/}
      {/*  <li className="mb-5 lg:w-1/3 lg:pr-3">*/}
      {/*    <div className="md:flex md:items-center">*/}
      {/*      <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500 ">*/}
      {/*        <p className="text-2xl font-semibold leading-none text-teal-900 md:text-3xl">*/}
      {/*          1*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      <h4 className="mb-3 text-2xl font-semibold leading-none md:ml-3 lg:mb-4">*/}
      {/*        Găsiți un antrenor*/}
      {/*      </h4>*/}
      {/*    </div>*/}
      {/*    <p>*/}
      {/*      Dacă doriți să obțineți cele mai bune rezultate, este important să*/}
      {/*      găsiți un antrenor care să înțeleagă de ce aveți nevoie și să vă*/}
      {/*      ajute să vă atingeți obiectivul. Răsfoiți antrenorii personali în*/}
      {/*      funcție de locație sau de diferite servicii.*/}
      {/*    </p>*/}
      {/*  </li>*/}
      {/*  <li className="mb-5 lg:w-1/3 lg:px-3">*/}
      {/*    <div className="md:flex md:items-center">*/}
      {/*      <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500 ">*/}
      {/*        <p className="text-2xl font-semibold leading-none text-teal-900 md:text-3xl">*/}
      {/*          2*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      <h4 className="mb-3 text-2xl font-semibold md:ml-3 lg:mb-4">*/}
      {/*        Selectați un plan de pe pagina sa*/}
      {/*      </h4>*/}
      {/*    </div>*/}
      {/*    <p>*/}
      {/*      Atunci când găsiți un instructor cu o combinație potrivită de*/}
      {/*      abilități care să se potrivească nevoilor dumneavoastră, pur și*/}
      {/*      simplu luați legătura cu el. Ne vom asigura că vor primi mesajul.*/}
      {/*    </p>*/}
      {/*  </li>*/}
      {/*  <li className="mb-5 lg:w-1/3 lg:pl-3">*/}
      {/*    <div className="md:flex md:items-center">*/}
      {/*      <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500 ">*/}
      {/*        <p className="text-2xl font-semibold leading-none text-teal-900 md:text-3xl">*/}
      {/*          3*/}
      {/*        </p>*/}
      {/*      </div>*/}
      {/*      <h4 className="mb-3 text-2xl font-semibold md:ml-3 lg:mb-4">*/}
      {/*        Creați contul*/}
      {/*      </h4>*/}
      {/*    </div>*/}
      {/*    <p>*/}
      {/*      După ce a-ți găsit antrenorul creați-vă contul și completați toate*/}
      {/*      câmpurile cu detaliile necesare antrenorului pentru a vă realiza un*/}
      {/*      plan de anenament și nutriție personalizat.*/}
      {/*    </p>*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </SectionWithWave>
  );
}
