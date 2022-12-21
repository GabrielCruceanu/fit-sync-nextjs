import TrainerHeader from '#/ui/antrenor/TrainerHeader';
import TrainerHowItWorks from '../../ui/antrenor/TrainerHowItWorks';
import TrainerFeatures from '#/ui/antrenor/TrainerFeatures';
import TrainerFAQ from '#/ui/antrenor/TrainerFAQ';

export default function TrainerPage() {
  return (
    <main>
      <TrainerHeader />
      <TrainerHowItWorks />
      <TrainerFeatures />
      <TrainerFAQ />
    </main>
  );
}
