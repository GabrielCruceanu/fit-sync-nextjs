export default function Paragraph({
  children,
  customClass,
}: {
  children: React.ReactNode;
  customClass: string;
}) {
  return (
    <p className={`text-lg text-muted-foreground ${customClass}`}>{children}</p>
  );
}
