import HomeHowItWorks from '#/ui/home/HomeHowItWorks';
import HomeHeader from '#/ui/home/HomeHeader';
import ClientHowItWorks from '#/ui/home/ClientHowItWorks';
import ClientFeatures from '#/ui/home/ClientFeatures';
import HomeBeAPro from '#/ui/home/HomeBeAPro';
import ClientFAQ from '#/ui/home/ClientFAQ';

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <HomeHowItWorks />
      <ClientHowItWorks />
      <ClientFeatures />
      <HomeBeAPro />
      <ClientFAQ />
    </>
  );
}
