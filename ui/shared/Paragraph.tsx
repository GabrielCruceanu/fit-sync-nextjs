export default function Paragraph({
  children,
  customClass,
}: {
  children: React.ReactNode;
  customClass: string;
}) {
  return (
    <p
      className={`mb-2 font-light text-gray-300 md:text-lg lg:mx-0 xl:mb-4 xl:text-xl ${customClass}`}
    >
      {children}
    </p>
  );
}
