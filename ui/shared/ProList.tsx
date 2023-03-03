import ProItem from '#/ui/shared/ProItem';
import clsx from 'clsx';
import {
  TypedGymDetails,
  TypedNutritionistDetails,
  TypedTrainerDetails,
} from '#/types';
import { UserType } from '#/constants/user';

export default function ProList({
  proList,
  isHome,
}: {
  proList:
    | TypedTrainerDetails[]
    | TypedNutritionistDetails[]
    | TypedGymDetails[];
  isHome: boolean;
}) {
  return (
    <ul className="mt-5 md:flex md:flex-wrap">
      {proList.map((proCard, key: number) => {
        const {
          username,
          pro_type,
          profile_picture_url,
          certificate,
          city,
          type,
          gym_name,
          first_name,
          last_name,
        } = proCard;
        const name =
          type === UserType.Gym && gym_name
            ? gym_name
            : first_name + ' ' + last_name;
        const link =
          type === UserType.Gym
            ? 'sali-de-antrenament'
            : type === UserType.Trainer
            ? 'antrenori'
            : 'nutritionisti';
        return (
          <li
            className={clsx('mt-4 md:w-1/2 md:pr-3', {
              ' lg:w-4/12': !isHome,
            })}
            key={key}
          >
            <ProItem
              link={link + '/' + username!}
              key={key}
              name={name}
              type={type!}
              proType={pro_type!}
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
