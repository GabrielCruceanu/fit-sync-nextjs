import SectionWithWave from '#/ui/shared/SectionWithWave';
import Badge from '#/ui/shared/Badge';
import TitleSection from '#/ui/shared/TitleSection';
import Image from 'next/image';
import HowItWorksJpg from '#/public/images/client/how-it-works.jpg';
import Link from 'next/link';
import { PagesLinks } from '#/constants/links';
import Button, { ButtonType } from '#/ui/shared/Button';

export default function HomeBeAPro() {
  return (
    <SectionWithWave bgWhite={false}>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-2/4 lg:pr-4">
          <Badge>Profesional</Badge>
          <TitleSection>Sunteți un profesionist?</TitleSection>
          <p className="mb-4">
            Sunteți un antrenor și doriți să vă manageriati clienții mai ușor
            având toate informațiile necesare întrun singur loc și să obțineți
            mai multă expunere prin listarea pe platforma Kaapo.FIt?
          </p>

          <Link href={PagesLinks.trainerHomePage.link}>
            <Button type={ButtonType.primary} description="Detalii" />
          </Link>
        </div>

        <div className="mt-5 lg:mt-0 lg:w-2/4 lg:px-4">
          <Image
            src={HowItWorksJpg}
            alt="Antrenează clienții online"
            placeholder="blur"
            className="mx-auto mt-4 w-full rounded-3xl"
          />
        </div>
      </div>
    </SectionWithWave>
  );
}
