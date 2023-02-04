import ProItem from '#/ui/shared/ProItem';
import clsx from 'clsx';
import TrainerProfileModel from '#/model/trainer/trainerProfile.model';

export default function ProList({
  proList,
  isHome,
}: {
  proList: TrainerProfileModel[];
  isHome: boolean;
}) {
  return (
    <ul className="mt-5 md:flex md:flex-wrap">
      {proList.map((proCard: TrainerProfileModel, key: number) => (
        <li
          className={clsx('mt-4 md:w-1/2 md:pr-3', {
            ' lg:w-4/12': !isHome,
          })}
          key={key}
        >
          <ProItem
            link={proCard.username}
            key={key}
            name={proCard.firstName + ' ' + proCard.lastName}
            type={proCard.type}
            photoSrc={proCard.profilePicture}
            reviews={proCard.reviews}
            certificate={proCard.certificate}
          />
        </li>
      ))}
    </ul>
  );
}
