import SectionWithWave from '#/ui/shared/SectionWithWave';
import Badge from '#/ui/shared/Badge';
import TitleSection from '#/ui/shared/TitleSection';
import Image from 'next/image';
import KaapoFitPhone from '#/public/images/homepage/phone.png';
import {
  ChatIcon,
  DocumentTextIcon,
  PresentationChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/solid';
import { PagesLinks } from '#/constants/links';
import ButtonOld, { ButtonType } from '#/ui/shared/Button-old';
import Link from 'next/link';

export default function TrainerFeatures() {
  return (
    <SectionWithWave bgWhite={false}>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2 lg:pr-4">
          <Badge>CARACTERISTICI</Badge>
          <TitleSection>Îmbunătățeste-ți experiența de coaching </TitleSection>
          <p className="mb-3">
            Redu orele din munca de administrare a programului și
            îmbunătățeste-ți experiența de coaching cu aplicația noastră de
            antrenor personal.
          </p>
          <p className="mb-4">
            Kaapo.fit te ajută să te concentrați pe ceea ce faceți cel mai bine
            - antrenamentul personal. Lasă administrația în seama noastră,
            astfel încât să ai mai mult timp să lucrezi cu clienții și să le
            urmărești progresul.
          </p>
          <Link href={PagesLinks.auth.link}>
            <ButtonOld type={ButtonType.primary} description="INCEPEȚI ACUM" />
          </Link>
        </div>

        <div className="mt-5 lg:mt-0 lg:w-1/2 lg:px-4">
          <div className="w-full lg:mx-auto lg:max-w-[300px]">
            <Image
              src={KaapoFitPhone}
              alt="Kaapo.Fit telefon"
              placeholder="blur"
              className="mx-auto mt-4 w-56 md:w-80"
            />
          </div>
        </div>
      </div>

      <ul className="lg:flex lg:flex-wrap">
        <li className="mb-5 lg:w-1/2 lg:pr-3">
          <div className="md:flex md:items-center">
            <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500">
              <UserGroupIcon className="block w-6 text-teal-900" />
            </div>
            <h4 className="mb-3 text-2xl font-semibold leading-none md:ml-3 lg:mb-4">
              Managementul clienților
            </h4>
          </div>
          <p>
            Folosind software-ul nostru de antrenor personal, Gestionați toți
            clienții dvs. și antrenamentele lor într-un singur loc. Vă facilităm
            adăugarea de noi clienți, furnizarea de planuri de antrenament
            personalizate, urmărirea progresului și menținerea comunicării.
          </p>
        </li>
        <li className="mb-5 lg:w-1/2 lg:pl-3">
          <div className="md:flex md:items-center">
            <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500 ">
              <ChatIcon className="block w-6 text-teal-900" />
            </div>
            <h4 className="mb-3 text-2xl font-semibold md:ml-3 lg:mb-4">
              Mesagerie în timp real
            </h4>
          </div>
          <p>
            Toate comunicările dintre antrenor și client sunt păstrate într-un
            singur loc, astfel încât nu veți pierde niciodată urma unui mesaj
            sau nu veți rata o conversație importantă cu un client.
          </p>
        </li>
        <li className="mb-5 lg:w-1/2 lg:pr-3">
          <div className="md:flex md:items-center">
            <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500 ">
              <DocumentTextIcon className="block w-6 text-teal-900" />
            </div>
            <h4 className="mb-3 text-2xl font-semibold md:ml-3 lg:mb-4">
              Constructor de programe
            </h4>
          </div>
          <p>
            Proiectați serii întregi de antrenamente si planuri de nutritie
            pentru clienții dvs. Scrieți-vă programele sau planurile de nutritie
            o singură dată, apoi personalizați-le pentru fiecare client, fără a
            fi nevoie să recreați programul de fiecare dată.
          </p>
        </li>
        <li className="mb-5 lg:w-1/2 lg:pl-3">
          <div className="md:flex md:items-center">
            <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500 ">
              <PresentationChartBarIcon className="block w-6 text-teal-900" />
            </div>
            <h4 className="mb-3 text-2xl font-semibold md:ml-3 lg:mb-4">
              Fiți la curent cu progresul și nutriția
            </h4>
          </div>
          <p>
            Kaapo.fit este o soluție unică pentru toate nevoile clienților
            dumneavoastră. De la conectare la programare, avem totul sub
            control! În plus, analizele noastre avansate vă vor ajuta să
            urmăriți progresul și nutriția lor și să asigurați că își respectă
            angajamentul.
          </p>
        </li>
      </ul>
    </SectionWithWave>
  );
}
