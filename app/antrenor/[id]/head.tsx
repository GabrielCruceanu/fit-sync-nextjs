import HeadUi from '#/ui/shared/HeadUi';
async function getTrainers(slug: string) {
  const res = await fetch('');
}
export default function Head({ params }: { params: { slug: string } }) {
  return (
    <>
      <HeadUi
        title={`Antrenor ${params.slug} | Kaapo.Fit`}
        description="Kaapo.Fit este platforma construită pentru antrenorii personali care vor să-și dezvolte afacerea și să managerieze mai ușor clienții online."
      />
    </>
  );
}
