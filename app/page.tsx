import HomeHeader from '#/ui/home/HomeHeader';
import ClientHowItWorks from '#/ui/home/ClientHowItWorks';
import HomeBeAPro from '#/ui/home/HomeBeAPro';

export default async function Page() {
  return (
    <>
      <HomeHeader />
      <ClientHowItWorks />
      <HomeBeAPro />
      {/*<ClientFAQ />*/}
    </>
  );
}
