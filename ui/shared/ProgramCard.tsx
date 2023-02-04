import ProgramsModel from '#/model/programs/programs.model';
import clsx from 'clsx';
import Link from 'next/link';

export default function TrainerCard({ program }: { program: ProgramsModel }) {
  return (
    <Link href={`/programe/${program.id}`}>
      <div className="relative z-0 mt-3 flex min-h-[200px] w-full overflow-hidden rounded-xl rounded bg-gray-700">
        {program.workout?.photo ? (
          <div className="-z-1 absolute top-0 right-0 left-0 bottom-0 bg-gray-900">
            <img
              src={program.workout?.photo}
              alt={program.name}
              className="block h-auto w-full object-cover opacity-75 bg-blend-multiply"
            />
          </div>
        ) : null}
        <div className="z-0 flex h-full w-full flex-col self-end bg-gradient-to-b from-transparent to-gray-900 p-3 ">
          <h3 className="text-l mt-6 mb-2 font-medium text-white md:text-xl">
            {program.name}
          </h3>
          <div className="flex justify-between">
            <p className="flex items-center border-l-2 border-primary-600 pl-2 text-sm text-white">
              {program.category}
            </p>
            {program.type ? (
              <p
                className={clsx(
                  'flex items-center justify-center rounded rounded-l p-1 text-sm font-semibold text-white ',
                  {
                    'bg-amber-500': program.type === 'PRO',
                    'bg-teal-500': program.type === 'FREE',
                  },
                )}
              >
                {program.type}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Link>
  );
}
