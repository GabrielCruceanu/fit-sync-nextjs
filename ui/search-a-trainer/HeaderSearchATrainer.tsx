import HeroBackground from '#/ui/shared/HeroBackground';
import SearchProForm from '#/ui/shared/SearchProForm';

export default function HeaderSearchATrainer() {
  return (
    <section className="relative z-0 flex min-h-screen w-full items-center justify-center p-4">
      <HeroBackground />
      <div className="container ">
        <div className="items-center justify-around lg:flex">
          <div className="flex w-full flex-col items-center lg:block lg:max-w-[600px]">
            <h1 className="mb-3 text-center text-3xl font-semibold md:text-5xl lg:mb-4 lg:text-left lg:text-5xl lg:leading-tight">
              Antrenori personali
            </h1>
            <p className="mb-4 text-center lg:text-left">
              Căutați în cea mai cuprinzătoare bază de date de formatori din
              România. Antrenorul dumneavoastră este aici.
            </p>
            <SearchProForm />
          </div>
        </div>
      </div>
    </section>
  );
}
