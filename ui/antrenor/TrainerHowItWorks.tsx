import SectionWithWave from '#/ui/shared/SectionWithWave';
import Badge from '#/ui/shared/Badge';
import TitleSection from '#/ui/shared/TitleSection';
import Image from 'next/image';
import HowItWorksJpg from '#/public/images/antrenor/how-it-works.jpg';

export default function TrainerHowItWorks() {
  return (
    <SectionWithWave bgWhite={true}>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-2/4 lg:pr-4">
          <Badge>CUM FUNCȚIONEAZĂ</Badge>
          <TitleSection>Antrenează clienții online</TitleSection>
          <p>
            Esti un antrenor plin de energie, care își vrea viața înapoi? <br />{' '}
            Adaugă și administrează clienții cu ușurință, astfel încât să ai
            timp pentru ceea ce este important, antrenamentul cu clienții tăi.
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
              Ușurează viața
            </h4>
          </div>
          <p>
            Dorești o aplicație pentru antrenori personali care să te ajute să
            fii mai organizat și să îți ușureze viața? Ai nevoie de o aplicație
            intuitivă, robustă și care să îți permită să te concentrezi asupra
            părților importante ale muncii.
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
              Organizează clienții
            </h4>
          </div>
          <p>
            Kaapo.Fit este aplicația pentru antrenori personali care să îți
            organizeze datele despre clienți și să te ajute să te concentrezi pe
            lucrurile care contează cel mai mult în munca ta de antrenor.
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
              Acces la toate informațiile
            </h4>
          </div>
          <p>
            Scăpă de plictiseala organizării manuale a fișierelor clienților cu
            aplicația noastră de antrenor personal, ușor de utilizat și plină de
            informații.
          </p>
        </li>
      </ul>
    </SectionWithWave>
  );
}
