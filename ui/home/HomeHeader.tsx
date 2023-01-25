import Link from 'next/link';
import ButtonOld, { ButtonType } from '#/ui/shared/Button-old';
import Image from 'next/image';
import KaapoFitPhone from '#/public/images/homepage/phone.png';
import { PagesLinks } from '#/constants/links';
import HeroBackground from '#/ui/shared/HeroBackground';

export default function HomeHeader() {
  return (
    <div className="relative z-0 flex min-h-screen w-full items-center justify-center p-4">
      <HeroBackground />
      <div className="container">
        <div className="items-center justify-around lg:flex">
          <div className="w-full lg:max-w-[600px]">
            <h1 className="mb-5 text-center text-3xl font-semibold md:text-5xl lg:mb-8 lg:text-left lg:text-6xl lg:leading-tight">
              Un jurnal pentru o viață sănătoasă
            </h1>
            <div className="flex justify-center lg:justify-start">
              <Link
                href={PagesLinks.trainerHomePage.link}
                className="mr-3 lg:mr-4"
              >
                <ButtonOld
                  type={ButtonType.primary}
                  description="Sunt Antrenor"
                />
              </Link>
              <Link href={PagesLinks.clientHomePage.link}>
                <ButtonOld
                  type={ButtonType.primary}
                  description="Caută un Antrenor"
                />
              </Link>
            </div>
          </div>
          <div className="w-full lg:max-w-[300px]">
            <Image
              src={KaapoFitPhone}
              alt="Kaapo.Fit telefon"
              placeholder="blur"
              className="mx-auto mt-4 w-56 md:w-80"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
