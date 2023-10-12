import HowItWorkImage from '#/public/images/homepage/how-it-works.png';
import Image from 'next/image';
import Link from 'next/link';
import { PagesLinks } from '#/constants/links';
import Button, { ButtonType } from '#/ui/shared/Button';

export default function HomeHowItWorks() {
  return (
    <div className="flex items-center justify-center py-[100px] px-4 md:min-h-fit md:py-[160px]">
      <div className="container flex flex-col items-center justify-center lg:flex-row">
        <Image
          src={HowItWorkImage}
          alt="Cum functioneaza Kaapo.Fit"
          placeholder="blur"
          className="mx-auto mt-4 w-56 w-fit md:mx-0 md:w-[500px] lg:w-[500px]"
        />
        <div className="mt-7 lg:ml-28 lg:mt-0 lg:max-w-[600px]">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white">
            Cum Funcționează?
          </h2>
          <p className="mb-4 font-light text-gray-300 lg:text-xl">
            Bine ați venit pe Kaapo.Fit unde antrenorii personali,
            nutriționiștii și sălile de sport se pot înscrie și își pot prezenta
            serviciile.
          </p>
          <p className="mb-4 font-light text-gray-300 lg:text-xl">
            Misiunea noastră este de a oferi o platformă unde profesioniștii își
            pot ajuta clienții să își atingă obiectivele de fitness.
          </p>
          <p className="font-light text-gray-300 lg:text-xl">
            Înțelegem că nevoile fiecăruia sunt diferite, iar aplicația noastră
            permite antrenorilor și nutritioniștilor să ofere antrenamente și
            planuri de nutriție personalizate pentru a satisface nevoile
            individuale.
          </p>
          <div className="mt-5">
            <div className="mr-3 mt-3 inline-block md:mt-0 lg:mr-3">
              <Link replace href={PagesLinks.proPage.link}>
                <Button
                  type={ButtonType.primary}
                  description="Sunt profesionist"
                />
              </Link>
            </div>
            <div className="mt-3 inline-block md:mt-0">
              <Link replace href={PagesLinks.searchTrainerHomePage.link}>
                <Button
                  type={ButtonType.primary}
                  description="Caută un Antrenor"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
