'use client';
import { Button, Timeline } from 'flowbite-react';
import { useSupabase } from '#/ui/auth/SupabaseProvider';
import { useEffect, useState } from 'react';
import { TypedPhysicalDetails } from '#/types/types';
import { navigationAuth } from '#/constants/navigation';
import { useRouter } from 'next/navigation';
import { getClientPhysicalDetails } from '#/utils/client-hooks';
import Image from 'next/image';

export default function PhysicalDetails() {
  const router = useRouter();
  const moment = require('moment');
  moment.locale('ro');
  moment.updateLocale('ro', {
    months: [
      'Ianuarie',
      'Februarie',
      'Martie',
      'Aprilie',
      'Mai',
      'Iunie',
      'Iulie',
      'August',
      'Septembrie',
      'Octombrie',
      'Noiembrie',
      'Decembrie',
    ],
  });
  const { supabase, session } = useSupabase();
  const [loading, setLoading] = useState(true);
  const [currentPhysicalDetails, setCurrentPhysicalDetails] = useState<
    TypedPhysicalDetails[] | null
  >(null);
  const [historyPhysicalDetails, setHistoryPhysicalDetails] = useState<
    TypedPhysicalDetails[] | null
  >(null);
  const [viewHistoryPhysicalDetails, setViewHistoryPhysicalDetails] =
    useState<boolean>(false);

  useEffect(() => {
    if (!session) {
      router.push(navigationAuth.slug);
    }
    const fetchPhysicalDetails = async () => {
      try {
        if (!session?.user.id) throw new Error('No user');
        const data = await getClientPhysicalDetails(session.user.id, supabase);
        if (data) {
          setCurrentPhysicalDetails([data[0]]);
          setHistoryPhysicalDetails(data);
        }
      } catch (error) {
        alert('A intervenit o erroare!');
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (session) {
      fetchPhysicalDetails();
    }
  }, [session]);

  return (
    <div className="my-5 md:my-6">
      <h3 className="mb-2 text-2xl font-semibold tracking-wide">Masuratori</h3>
      <p className="lg:text-l text-gray-300">
        Masuratorile se fac o data pe luna.
      </p>

      <div></div>

      <Timeline className="mt-4">
        {(viewHistoryPhysicalDetails
          ? historyPhysicalDetails
          : currentPhysicalDetails
        )?.map((physicalDetails) => {
          const {
            date_created,
            body_height,
            body_weight,
            neck,
            chest,
            shoulders,
            arm_left,
            arm_right,
            waist,
            hip,
            ass,
            thigh,
            front_photo,
            side_photo,
            back_photo,
          } = physicalDetails;

          return (
            <Timeline.Item key={date_created}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>
                  <span className="text-white">
                    {moment(date_created).format('MMMM Do YYYY')}
                  </span>
                </Timeline.Time>
                <div className="mt-4 md:flex md:flex-wrap">
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Inaltime:
                    </span>{' '}
                    <span className="text-white">{body_height} cm</span>
                  </p>
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Greutate:
                    </span>{' '}
                    <span className="text-white">{body_weight} kg</span>
                  </p>
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Gat:
                    </span>{' '}
                    <span className="text-white">{neck} cm</span>
                  </p>
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Piept:
                    </span>{' '}
                    <span className="text-white">{chest} cm</span>
                  </p>
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Umeri:
                    </span>{' '}
                    <span className="text-white">{shoulders} cm</span>
                  </p>
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Brat stang:
                    </span>{' '}
                    <span className="text-white">{arm_left} cm</span>
                  </p>
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Brat drept:
                    </span>{' '}
                    <span className="text-white">{arm_right} cm</span>
                  </p>
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Talie:
                    </span>{' '}
                    <span className="text-white">{waist} cm</span>
                  </p>

                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Sold:
                    </span>{' '}
                    <span className="text-white">{hip} cm</span>
                  </p>
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Fund:
                    </span>{' '}
                    <span className="text-white">{ass} cm</span>
                  </p>
                  <p className="mb-4 text-base font-normal text-white md:w-6/12 lg:w-4/12">
                    <span className="border-l border-teal-500 pl-2 text-gray-400">
                      Coapse:
                    </span>{' '}
                    <span className="text-white">{thigh} cm</span>
                  </p>
                </div>
                {front_photo && side_photo && back_photo ? (
                  <div className="md:flex md:flex-wrap">
                    <div className="mt-4 md:w-4/12 lg:w-4/12">
                      <div className="relative mx-auto h-[370px] max-w-[210px] overflow-hidden rounded-lg">
                        <div className="absolute top-0 left-0 z-50 flex h-full w-full items-end justify-center bg-gradient-to-b from-transparent to-gray-900 ">
                          <h6 className="mb-2 text-xl">Fata</h6>
                        </div>
                        <Image
                          src={front_photo}
                          alt={'poza frontala'}
                          width={210}
                          height={372}
                        />
                      </div>
                    </div>
                    <div className="mt-4 md:w-4/12 lg:w-4/12">
                      <div className="relative mx-auto h-[370px] max-w-[210px] overflow-hidden rounded-lg">
                        <div className="absolute top-0 left-0 z-50 flex h-full w-full items-end justify-center bg-gradient-to-b from-transparent to-gray-900 ">
                          <h6 className="mb-2 text-xl">Fata</h6>
                        </div>
                        <Image
                          src={side_photo}
                          alt={'poza laterala'}
                          width={210}
                          height={372}
                        />
                      </div>
                    </div>
                    <div className="mt-4 md:w-4/12 lg:w-4/12">
                      <div className="relative mx-auto h-[370px] max-w-[210px] overflow-hidden rounded-lg">
                        <div className="absolute top-0 left-0 z-50 flex h-full w-full items-end justify-center bg-gradient-to-b from-transparent to-gray-900 ">
                          <h6 className="mb-2 text-xl">Fata</h6>
                        </div>
                        <Image
                          src={back_photo}
                          alt={'poza din spate'}
                          width={210}
                          height={372}
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </Timeline.Content>
            </Timeline.Item>
          );
        })}
      </Timeline>
      <Button
        color="gray"
        onClick={() =>
          setViewHistoryPhysicalDetails(!viewHistoryPhysicalDetails)
        }
      >
        {viewHistoryPhysicalDetails
          ? 'Ascunde istoricul'
          : 'Arata tot istoricul'}
      </Button>
    </div>
  );
}
