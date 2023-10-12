import SectionWithWave from '#/ui/shared/SectionWithWave';
import Image from 'next/image';
import HowItWorksJpg from '#/public/images/client/how-it-works.jpg';
import Link from 'next/link';
import { PagesLinks } from '#/constants/links';
import Button, { ButtonType } from '#/ui/shared/Button';

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

            <Link href={PagesLinks.proPage.link} className="mb-8 text-white">
              <Button type={ButtonType.primary} description="Detalii" />
            </Link>
          </div>
        </div>
      </>
    </SectionWithWave>
  );
}
