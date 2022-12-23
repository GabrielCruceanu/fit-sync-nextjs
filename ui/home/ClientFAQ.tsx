import SectionWithWave from '#/ui/shared/SectionWithWave';
import Badge from '#/ui/shared/Badge';
import TitleSection from '#/ui/shared/TitleSection';
import FaqItem from '#/ui/shared/FaqItem';

export default function ClientFAQ() {
  return (
    <SectionWithWave bgWhite={true}>
      <Badge>FAQ</Badge>
      <TitleSection>Întrebări frecvente</TitleSection>
      <p className="mb-3">
        Găsiți răspunsul dumneavoastră la cele mai frecvente întrebări puse de
        către antrenori.
      </p>
      <ul className="lg:flex lg:flex-wrap">
        <li className="mb-5 lg:w-1/2 lg:pr-3">
          <FaqItem
            question="How long does it take to ship my order?"
            response="Orders are usually shipped within 1-2 business days after placing the
          order."
          />
        </li>
        <li className="mb-5 lg:w-1/2 lg:pr-3">
          <FaqItem
            question="How long does it take to ship my order?"
            response="Orders are usually shipped within 1-2 business days after placing the
          order."
          />
        </li>
      </ul>
    </SectionWithWave>
  );
}
