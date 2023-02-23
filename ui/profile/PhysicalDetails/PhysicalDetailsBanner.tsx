import Button, { ButtonType } from '#/ui/shared/Button';
import Link from 'next/link';
import { PagesLinks } from '#/constants/links';

export default function PhysicalDetailsBanner() {
  return (
    <div className="mb-4 rounded bg-white p-4">
      <h4 className="text-xl text-gray-900">Progress 💪</h4>
      <p className="mb-3 font-light text-gray-900 md:text-lg lg:mx-0">
        Pentru a avea un parcurs mai bun trebuie sa-ti poti urmari progresul.
      </p>

      <Link replace href={PagesLinks.physicalDetails.link}>
        <Button
          description={PagesLinks.physicalDetails.name}
          type={ButtonType.primary}
        />
      </Link>
    </div>
  );
}
