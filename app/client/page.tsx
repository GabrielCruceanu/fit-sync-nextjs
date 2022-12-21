import ClientHeader from '../../ui/client/ClientHeader';
import ClientHowItWorks from '../../ui/client/ClientHowItWorks';
import ClientFeatures from '../../ui/client/ClientFeatures';
import ClientFAQ from '../../ui/client/ClientFAQ';
import ClientBeAPro from '#/ui/client/ClientBeAPro';

export default function ClientPage() {
  return (
    <>
      <ClientHeader />
      <ClientHowItWorks />
      <ClientFeatures />
      <ClientBeAPro />
      <ClientFAQ />
    </>
  );
}
