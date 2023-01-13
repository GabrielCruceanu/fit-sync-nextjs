export default function TrainerProfileDescription({
  description,
}: {
  description: string;
}) {
  return (
    <div className="my-5 px-4 text-justify md:my-6">
      <h3 className="mb-2 text-xl">Descriere</h3>
      <p className="text-justify">{description}</p>
    </div>
  );
}
