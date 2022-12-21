import SectionWithWave from '#/ui/shared/SectionWithWave';
import Badge from '#/ui/shared/Badge';
import TitleSection from '#/ui/shared/TitleSection';
import Image from 'next/image';
import KaapoFitPhone from '#/public/images/client/how-it-works.jpg';
import { ArrowRightIcon } from '@heroicons/react/solid';
import { PagesLinks } from '#/constants/links';
import Button, { ButtonType } from '#/ui/shared/Button';
import Link from 'next/link';

export default function ClientFeatures() {
  return (
    <SectionWithWave bgWhite={false}>
      <div>
        <Badge>CAUTĂ UN ANTRENOR</Badge>
        <TitleSection>Antrenori personali</TitleSection>
        <p className="mb-3">
          Căutați în cea mai cuprinzătoare bază de date de formatori din
          România. Antrenorul dumneavoastră este aici.
        </p>
        <Link href={PagesLinks.searchTrainerHomePage.link}>
          <Button type={ButtonType.primary} description="CAUTĂ UN ANTRENOR" />
        </Link>
      </div>

      <ul className="mt-5 md:flex md:flex-wrap">
        <li className="mt-4 md:w-1/2 md:pr-3 lg:w-4/12">
          <Link href={PagesLinks.auth.link}>
            <div className="flex items-center justify-between rounded-xl bg-gray-800 p-4">
              <div className="flex items-center">
                <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full bg-teal-500 md:h-[100px] md:w-[100px]">
                  <Image
                    src={KaapoFitPhone}
                    alt="image"
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium leading-none md:text-xl">
                    Cristofer Arcand
                  </h4>
                  <h6 className="mb-1 text-sm text-gray-300">
                    High Intensity Training
                  </h6>
                  <span className="mr-2 inline-block rounded-md bg-teal-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    4.8
                  </span>
                  <span className="mr-2 inline-block rounded-md bg-amber-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    CERTIFICAT
                  </span>
                </div>
              </div>

              <ArrowRightIcon className="h-[16px] text-teal-500" />
            </div>
          </Link>
        </li>
        <li className="mt-4 md:w-1/2 md:pr-3 lg:w-4/12">
          <Link href={PagesLinks.auth.link}>
            <div className="flex items-center justify-between rounded-xl bg-gray-800 p-4">
              <div className="flex items-center">
                <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full bg-teal-500 md:h-[100px] md:w-[100px]">
                  <Image
                    src={KaapoFitPhone}
                    alt="image"
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium leading-none md:text-xl">
                    Cristofer Arcand
                  </h4>
                  <h6 className="mb-1 text-sm text-gray-300">
                    High Intensity Training
                  </h6>
                  <span className="mr-2 inline-block rounded-md bg-teal-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    4.8
                  </span>
                  <span className="mr-2 inline-block rounded-md bg-amber-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    CERTIFICAT
                  </span>
                </div>
              </div>

              <ArrowRightIcon className="h-[16px] text-teal-500" />
            </div>
          </Link>
        </li>
        <li className="mt-4 md:w-1/2  lg:w-4/12">
          <Link href={PagesLinks.auth.link}>
            <div className="flex items-center justify-between rounded-xl bg-gray-800 p-4">
              <div className="flex items-center">
                <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full bg-teal-500 md:h-[100px] md:w-[100px]">
                  <Image
                    src={KaapoFitPhone}
                    alt="image"
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium leading-none md:text-xl">
                    Cristofer Arcand
                  </h4>
                  <h6 className="mb-1 text-sm text-gray-300">
                    High Intensity Training
                  </h6>
                  <span className="mr-2 inline-block rounded-md bg-teal-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    4.8
                  </span>
                  <span className="mr-2 inline-block rounded-md bg-amber-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    CERTIFICAT
                  </span>
                </div>
              </div>

              <ArrowRightIcon className="h-[16px] text-teal-500" />
            </div>
          </Link>
        </li>
        <li className="mt-4 md:w-1/2 md:pr-3 lg:w-4/12">
          <Link href={PagesLinks.auth.link}>
            <div className="flex items-center justify-between rounded-xl bg-gray-800 p-4">
              <div className="flex items-center">
                <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full bg-teal-500 md:h-[100px] md:w-[100px]">
                  <Image
                    src={KaapoFitPhone}
                    alt="image"
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium leading-none md:text-xl">
                    Cristofer Arcand
                  </h4>
                  <h6 className="mb-1 text-sm text-gray-300">
                    High Intensity Training
                  </h6>
                  <span className="mr-2 inline-block rounded-md bg-teal-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    4.8
                  </span>
                  <span className="mr-2 inline-block rounded-md bg-amber-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    CERTIFICAT
                  </span>
                </div>
              </div>

              <ArrowRightIcon className="h-[16px] text-teal-500" />
            </div>
          </Link>
        </li>
        <li className="mt-4 md:w-1/2 md:pr-3 lg:w-4/12">
          <Link href={PagesLinks.auth.link}>
            <div className="flex items-center justify-between rounded-xl bg-gray-800 p-4">
              <div className="flex items-center">
                <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full bg-teal-500 md:h-[100px] md:w-[100px]">
                  <Image
                    src={KaapoFitPhone}
                    alt="image"
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium leading-none md:text-xl">
                    Cristofer Arcand
                  </h4>
                  <h6 className="mb-1 text-sm text-gray-300">
                    High Intensity Training
                  </h6>
                  <span className="mr-2 inline-block rounded-md bg-teal-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    4.8
                  </span>
                  <span className="mr-2 inline-block rounded-md bg-amber-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    CERTIFICAT
                  </span>
                </div>
              </div>

              <ArrowRightIcon className="h-[16px] text-teal-500" />
            </div>
          </Link>
        </li>
        <li className="mt-4 md:w-1/2 lg:w-4/12">
          <Link href={PagesLinks.auth.link}>
            <div className="flex items-center justify-between rounded-xl bg-gray-800 p-4">
              <div className="flex items-center">
                <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full bg-teal-500 md:h-[100px] md:w-[100px]">
                  <Image
                    src={KaapoFitPhone}
                    alt="image"
                    className="h-full w-auto object-cover"
                  />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-medium leading-none md:text-xl">
                    Cristofer Arcand
                  </h4>
                  <h6 className="mb-1 text-sm text-gray-300">
                    High Intensity Training
                  </h6>
                  <span className="mr-2 inline-block rounded-md bg-teal-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    4.8
                  </span>
                  <span className="mr-2 inline-block rounded-md bg-amber-500 px-2 py-1 text-xs font-bold leading-none text-white">
                    CERTIFICAT
                  </span>
                </div>
              </div>

              <ArrowRightIcon className="h-[16px] text-teal-500" />
            </div>
          </Link>
        </li>
      </ul>
    </SectionWithWave>
  );
}
