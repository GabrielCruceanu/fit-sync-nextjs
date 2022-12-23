import HomeHeader from '../../ui/home/HomeHeader';
import HomeHowItWorks from '../../ui/home/ClientHowItWorks';
import ClientFeatures from '../../ui/home/ClientFeatures';
import ClientFAQ from '../../ui/home/ClientFAQ';
import HomeBeAPro from '../../ui/home/HomeBeAPro';

export default function ClientPage() {
  return (
    <>
      <HomeHeader />
      <HomeHowItWorks />
      <ClientFeatures />
      <HomeBeAPro />
      <ClientFAQ />
    </>
  );
}
