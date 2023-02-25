import Image from 'next/image';
import { ArrowRightIcon, UserCircleIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import ReviewModel from '#/model/review/review.model';

export default function ProItem({
  link,
  photoSrc,
  name,
  type,
  reviews,
  certificate,
}: {
  link: string;
  certificate: boolean;
  name: string;
  type: string;
  photoSrc?: string;
  reviews?: ReviewModel[];
}) {
  let rate = undefined;
  let rateMedia = undefined;

  let reviewCounter = 0;
  if (reviews) {
    reviews.map((review) => {
      if (review.stars) {
        ++reviewCounter;
        rate = review.stars;
        rateMedia = rate / reviewCounter;
      }
    });
  }

  return (
    <Link replace href={`/antrenori/${link}`}>
      <div className="flex items-center justify-between rounded-xl bg-gray-800 p-4">
        <div className="flex items-center">
          <div className="mr-3 flex h-[64px] w-[64px] items-center justify-center overflow-hidden rounded-full bg-teal-500 md:h-[100px] md:w-[100px]">
            {photoSrc ? (
              <Image
                src={photoSrc}
                alt={name + ' ' + type}
                className="h-full w-full object-cover"
                width="100"
                height="100"
              />
            ) : (
              <UserCircleIcon />
            )}
          </div>
          <div>
            <h4 className="mb-1 text-lg font-medium leading-none text-white md:text-xl">
              {name}
            </h4>
            <h6 className="mb-1 text-sm text-gray-300">{type}</h6>
            {rateMedia ? (
              <span className="mr-2 inline-block rounded-md bg-teal-500 px-2 py-1 text-xs font-bold leading-none text-white">
                {rateMedia}
              </span>
            ) : null}
            {certificate ? (
              <span className="mr-2 inline-block rounded-md bg-amber-500 px-2 py-1 text-xs font-bold leading-none text-white">
                CERTIFICAT
              </span>
            ) : null}
          </div>
        </div>

        <ArrowRightIcon className="h-[16px] text-teal-500" />
      </div>
    </Link>
  );
}
