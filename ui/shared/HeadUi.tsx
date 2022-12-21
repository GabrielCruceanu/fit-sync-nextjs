import { DefaultTags } from '#/ui/shared/DefaultTags';

export default function HeadUi({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <DefaultTags />
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
}
