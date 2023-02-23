export default function ProfileDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="my-5 px-4 text-justify md:my-6">
      <h3 className="mb-2 text-2xl font-semibold tracking-wide">Descriere</h3>
      <p className="lg:text-l text-gray-300">{description}</p>
    </div>
  );
}
