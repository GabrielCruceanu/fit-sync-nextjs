import HowItWorkImage from '#/public/images/homepage/how-it-works.png';
import Image from 'next/image';
import Link from 'next/link';
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
        <div className="mt-7 md:max-w-[500px] lg:ml-28 lg:mt-0">
          <h2 className="mb-3 text-2xl font-semibold md:text-3xl lg:text-4xl lg:leading-tight">
            Cum Funcționează?
          </h2>
          <p className="mb-4 text-justify">
            Kaapo.Fit este platforma construită pentru antrenorii personali care
            vor să-și dezvolte afacerea și să managerieze mai ușor clienții
            online.
          </p>
          <p className="text-justify">
            Iar dacă ești sportiv sau la început de drum doreșți să obții cele
            mai bune rezultate, este important să-ți găseșți un antrenor care
            să-ți înțeleagă nevoile și să te ajute să iți atingi obiectivul.
          </p>
          <div className="mt-5">
            <Link href="/antrenor" className="mr-3 lg:mr-4">
              <Button type={ButtonType.primary} description="Sunt Antrenor" />
            </Link>
            <Link href="/client">
              <Button
                type={ButtonType.primary}
                description="Caută un Antrenor"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
