import SectionWithWave from '#/ui/shared/SectionWithWave';
import Badge from '#/ui/shared/Badge';
import TitleSection from '#/ui/shared/TitleSection';
import { PagesLinks } from '#/constants/links';
import Link from 'next/link';
import ProList from '#/ui/shared/ProList';
import * as _ from 'lodash';
import Button, { ButtonType } from '#/ui/shared/Button';
import { TypedTrainerDetails } from '#/types';

export default function ClientFeatures({
  trainers,
}: {
  trainers: TypedTrainerDetails;
}) {
  const sixRandomTrainers = _.sampleSize(trainers, 6);

  return (
    <SectionWithWave bgWhite={false}>
      <div className="items-center lg:flex">
        <div className="lg:order-1 lg:ml-4 lg:w-5/12">
          <Badge>CAUTĂ UN ANTRENOR</Badge>
          <TitleSection>Antrenori personali</TitleSection>
          <p className="mb-3">
            Căutați în cea mai cuprinzătoare bază de date de formatori din
            România. Antrenorul dumneavoastră este aici.
          </p>
          <Link replace href={PagesLinks.searchTrainerHomePage.link}>
            <Button type={ButtonType.primary} description="Caută un Antrenor" />
          </Link>
        </div>

        <div className="lg:w-7/12">
          <ProList proList={sixRandomTrainers} isHome={true} />
        </div>
      </div>
    </SectionWithWave>
  );
}
