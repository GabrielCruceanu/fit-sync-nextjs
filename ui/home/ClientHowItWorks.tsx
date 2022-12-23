import SectionWithWave from '#/ui/shared/SectionWithWave';
import Badge from '#/ui/shared/Badge';
import TitleSection from '#/ui/shared/TitleSection';
import Image from 'next/image';
import HowItWorksJpg from '#/public/images/client/how-it-works.jpg';

export default function ClientHowItWorks() {
  return (
    <SectionWithWave bgWhite={true}>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-2/4 lg:pr-4">
          <Badge>CUM FUNCȚIONEAZĂ</Badge>
          <TitleSection>Antrenament personal online</TitleSection>
          <p>
            Un antrenor personal este o persoană care vă antrenează pentru a vă
            atinge obiectivele de fitness. Acesta este de obicei un profesionist
            cu cunoștințe în diferite tehnici de antrenament și exerciții.
          </p>
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

      <h3 className="my-6 text-2xl font-semibold md:text-3xl lg:text-center">
        Cum te poate ajuta platforma Kaapo.Fit?
      </h3>
      <ul className="lg:flex">
        <li className="mb-5 lg:w-1/3 lg:pr-3">
          <div className="md:flex md:items-center">
            <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500 ">
              <p className="text-2xl font-semibold leading-none text-teal-900 md:text-3xl">
                1
              </p>
            </div>
            <h4 className="mb-3 text-2xl font-semibold leading-none md:ml-3 lg:mb-4">
              Găsiți un antrenor
            </h4>
          </div>
          <p>
            Dacă doriți să obțineți cele mai bune rezultate, este important să
            găsiți un antrenor care să înțeleagă de ce aveți nevoie și să vă
            ajute să vă atingeți obiectivul. Răsfoiți antrenorii personali în
            funcție de locație sau de diferite servicii.
          </p>
        </li>
        <li className="mb-5 lg:w-1/3 lg:px-3">
          <div className="md:flex md:items-center">
            <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500 ">
              <p className="text-2xl font-semibold leading-none text-teal-900 md:text-3xl">
                2
              </p>
            </div>
            <h4 className="mb-3 text-2xl font-semibold md:ml-3 lg:mb-4">
              Selectați un plan de pe pagina sa
            </h4>
          </div>
          <p>
            Atunci când găsiți un instructor cu o combinație potrivită de
            abilități care să se potrivească nevoilor dumneavoastră, pur și
            simplu luați legătura cu el. Ne vom asigura că vor primi mesajul.
          </p>
        </li>
        <li className="mb-5 lg:w-1/3 lg:pl-3">
          <div className="md:flex md:items-center">
            <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-teal-500 ">
              <p className="text-2xl font-semibold leading-none text-teal-900 md:text-3xl">
                3
              </p>
            </div>
            <h4 className="mb-3 text-2xl font-semibold md:ml-3 lg:mb-4">
              Creați contul
            </h4>
          </div>
          <p>
            După ce a-ți găsit antrenorul creați-vă contul și completați toate
            câmpurile cu detaliile necesare antrenorului pentru a vă realiza un
            plan de anenament și nutriție personalizat.
          </p>
        </li>
      </ul>
    </SectionWithWave>
  );
}
