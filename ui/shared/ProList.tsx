import ProItem from '#/ui/shared/ProItem';
import clsx from 'clsx';
import { TypedTrainerDetails } from '#/types';

export default function ProList({
  proList,
  isHome,
}: {
  proList: TypedTrainerDetails[];
  isHome: boolean;
}) {
  return (
    <ul className="mt-5 md:flex md:flex-wrap">
      {proList.map((proCard: TypedTrainerDetails, key: number) => {
        const {
          username,
          first_name,
          last_name,
          pro_type,
          profile_picture_url,
          certificate,
          city,
        } = proCard;
        return (
          <li
            className={clsx('mt-4 md:w-1/2 md:pr-3', {
              ' lg:w-4/12': !isHome,
            })}
            key={key}
          >
            <ProItem
              link={username!}
              key={key}
              name={first_name + ' ' + last_name}
              type={pro_type!}
              city={city}
              photoSrc={profile_picture_url!}
              certificate={!!certificate}
            />
          </li>
        );
      })}
    </ul>
  );
}
