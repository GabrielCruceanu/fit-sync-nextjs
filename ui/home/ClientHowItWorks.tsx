import SectionWithWave from '#/ui/shared/SectionWithWave';
import Image from 'next/image';
import TrainerDesktop from '#/public/images/client/trainer-desktop.jpg';
import TrainerMobile from '#/public/images/client/trainer-mobile.jpg';
import NutritionistDesktop from '#/public/images/client/nutritionist-desktop.jpg';
import NutritionistMobile from '#/public/images/client/nutritionist-mobile.jpg';
import GymDesktop from '#/public/images/client/gym-desktop.jpg';
import GymMobile from '#/public/images/client/gym-mobile.jpg';
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
            {/*Image on mobile and tablet*/}
            <Image
              className="mb-4 flex w-full rounded-lg lg:mb-0 lg:hidden"
              src={TrainerMobile}
              alt="Antrenor Personal"
            />
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
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
          {/*Image on desktop*/}
          <Image
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src={TrainerDesktop}
            alt="Antrenor personal"
          />
        </div>
        {/*Row*/}
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          {/*Image on mobile and tablet*/}
          <Image
            className="mb-4 flex w-full rounded-lg lg:mb-0 lg:hidden"
            src={NutritionistMobile}
            alt="Nutriționist"
          />
          {/*Image on desktop*/}
          <Image
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src={NutritionistDesktop}
            alt="Nutriționist personal"
          />
          <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
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
            {/*Image on mobile and tablet*/}
            <Image
              className="mb-4 flex w-full rounded-lg lg:mb-0 lg:hidden"
              src={GymMobile}
              alt="Sală de antrenament"
            />
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
              Sală de antrenament
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              Găsirea unei săli de sport bune este esențială pentru a-ți atinge
              obiectivele de fitness, deoarece aceasta îți poate oferi
              echipamentul și sprijinul de care ai nevoie pentru a-ți atinge
              potențialul maxim.
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
                  Sală cu antrenor personal
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
                  Abonament sală fitness
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
                  Abonament ESX sau 7Card
                </span>
              </li>
            </ul>

            <Link
              href={PagesLinks.searchTrainerHomePage.link}
              className="mb-8 text-white"
            >
              <Button type={ButtonType.primary} description="Caută o Sală" />
            </Link>
          </div>
          {/*Image on desktop*/}
          <Image
            className="mb-4 hidden w-full rounded-lg lg:mb-0 lg:flex"
            src={GymDesktop}
            alt="Sală de antrenament"
          />
        </div>
      </div>

      {/*<div className="lg:flex lg:items-center lg:justify-between">*/}
      {/*  <div className="lg:w-2/4 lg:pr-4">*/}
      {/*    <Badge>CUM FUNCȚIONEAZĂ</Badge>*/}
      {/*    <TitleSection>Antrenament personal online</TitleSection>*/}
      {/*    <p>*/}
      {/*      Un pro personal este o persoană care vă antrenează pentru a vă*/}
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
      {/*        Găsiți un pro*/}
      {/*      </h4>*/}
      {/*    </div>*/}
      {/*    <p>*/}
      {/*      Dacă doriți să obțineți cele mai bune rezultate, este important să*/}
      {/*      găsiți un pro care să înțeleagă de ce aveți nevoie și să vă*/}
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
