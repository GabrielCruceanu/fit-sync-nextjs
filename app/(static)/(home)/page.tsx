import HomeHeader from '#/modules/static/home/HomeHeader';
import ClientHowItWorks from '#/modules/static/home/ClientHowItWorks';
import HomeBeAPro from '#/modules/static/home/HomeBeAPro';
import ClientFAQ from '#/modules/static/home/ClientFAQ';

export default function Page() {
  return (
    <>
      <HomeHeader />
      <ClientHowItWorks />
      <HomeBeAPro />
      <ClientFAQ />
    </>
  );
}
