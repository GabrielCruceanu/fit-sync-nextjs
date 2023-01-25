import Link from 'next/link';
import ButtonOld, { ButtonType } from '#/ui/shared/Button-old';
import Image from 'next/image';
import KaapoFitPhone from '#/public/images/homepage/phone.png';
import { PagesLinks } from '#/constants/links';
import HeroBackground from '#/ui/shared/HeroBackground';

export default function TrainerHeader() {
  return (
    <section className="relative z-0 flex min-h-screen w-full items-center justify-center p-4">
      <HeroBackground />
      <div className="container ">
        <div className="items-center justify-around lg:flex">
          <div className="flex w-full flex-col items-center lg:block lg:max-w-[600px]">
            <h1 className="mb-3 text-center text-3xl font-semibold md:text-5xl lg:mb-4 lg:text-left lg:text-5xl lg:leading-tight">
              Antrenează clienții online
            </h1>
            <p className="mb-4 text-center lg:text-left">
              Kaapo.Fit este platforma construită pentru antrenorii personali
              care vor să-și dezvolte afacerea și să managerieze mai ușor
              clienții online.
              <br />
              <br />
              Începe testul gratuit de 14 zile astăzi!
            </p>

            <Link href={PagesLinks.auth.link}>
              <ButtonOld type={ButtonType.primary} description="ÎNCEPE ACUM" />
            </Link>
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
    </section>
  );
}
