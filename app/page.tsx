import HomeHeader from '#/ui/home/HomeHeader';
import ClientHowItWorks from '#/ui/home/ClientHowItWorks';
import HomeBeAPro from '#/ui/home/HomeBeAPro';
import ClientFAQ from '#/ui/home/ClientFAQ';

export default async function Page() {
  return (
    <>
      <HomeHeader />
      <ClientHowItWorks />
      <HomeBeAPro />
      <ClientFAQ />
    </>
  );
}
