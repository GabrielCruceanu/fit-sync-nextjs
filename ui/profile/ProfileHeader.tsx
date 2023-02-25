import Image from 'next/image';
import {
  CheckBadgeIcon,
  BriefcaseIcon,
  ChatBubbleBottomCenterIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid';
import { Button, Tooltip } from 'flowbite-react';

export default function ProfileHeader({
  name,
  firstName,
  lastName,
  profilePicture,
  type,
  proType,
  experience,
  certificate,
  state,
  city,
  completedClients,
  activeClients,
  phone,
}: {
  name?: string | null;
  firstName: string | null;
  lastName: string | null;
  profilePicture?: string | null;
  type?: string | null;
  proType?: string | null;
  experience?: string | null;
  certificate?: boolean | null;
  state: string | null;
  city: string | null;
  completedClients?: string | null;
  activeClients?: string | null;
  phone?: string | null;
}) {
  return (
    <div className="md:mx-auto md:px-4 md:pt-4">
      <div className="items-center md:flex">
        {/*Profile image*/}
        <div className="md:w-6/12 lg:w-4/12">
          <div className="relative h-[300px] w-full overflow-hidden text-center md:w-[300px] md:rounded-xl lg:w-full">
            {profilePicture ? (
              <Image
                src={profilePicture}
                alt={firstName + ' ' + lastName + 'profile'}
                fill={true}
                quality={80}
                placeholder="blur"
                style={{ objectFit: 'cover' }}
                sizes="(min-width: 768px) 100%, 700px , (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                blurDataURL="data:image/jpeg..."
              />
            ) : (
              <div className="relative inline-flex h-full w-full items-center justify-center overflow-hidden bg-gray-600">
                <span className="text-4xl text-gray-300 dark:text-gray-300">
                  {firstName && lastName ? firstName[0] + lastName[0] : null}
                  {name ? name[0] : null}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="md:w-6/12 lg:w-8/12">
          {/*Profile Name and Contact Action*/}
          <div className="mt-4 flex items-start justify-between px-4 md:mx-auto md:max-w-[400px] md:px-0">
            {/*Profile Name*/}
            <div>
              <div className="flex">
                <h1 className="mb-2 w-full overflow-ellipsis text-xl text-2xl font-semibold tracking-wide">
                  {firstName + ' ' + lastName}
                </h1>
                {certificate ? (
                  <Tooltip
                    content="Certificat"
                    placement="top"
                    className="bg-amber-500 text-gray-900"
                  >
                    <Button
                      className="bg-transparent p-0 ring-0 focus:!ring-0"
                      size={'xs'}
                      pill={true}
                    >
                      <CheckBadgeIcon className="h-6 w-6 fill-amber-500" />
                    </Button>
                  </Tooltip>
                ) : null}
              </div>

              <div className="md:flex">
                <div className="mb-1 flex items-center md:mr-4 lg:mb-0">
                  <BriefcaseIcon className="mr-2 h-5 w-5 fill-teal-500" />
                  <h3 className="text-sm capitalize tracking-wide">
                    {proType ? type + ' / ' + proType : type}
                  </h3>
                </div>

                <div className="flex  items-center">
                  <MapPinIcon className="mr-2 h-5 w-5 fill-teal-500" />
                  <h3 className="text-sm tracking-wide">
                    {state + ' / ' + city}
                  </h3>
                </div>
              </div>
            </div>

            {/*Contact Action*/}
            {phone ? (
              <div className="mt-2">
                <a
                  href={'https://wa.me/' + phone}
                  target="_blank"
                  rel="noreferrer"
                  className="block flex h-[54px] w-[54px] items-center justify-center overflow-hidden rounded-full bg-teal-500"
                >
                  <ChatBubbleBottomCenterIcon className="h-9 w-9 fill-gray-900 transition-all ease-in-out hover:fill-teal-900" />
                </a>
              </div>
            ) : null}
          </div>

          {/* Profile Experience */}
          {completedClients || experience || activeClients ? (
            <ul className="mx-auto my-4 flex max-w-[288px] items-center rounded-xl bg-gray-800 text-center text-white">
              <li className="w-4/12 p-3">
                <h3 className="text-xl font-bold">
                  {experience ? experience : '0'}{' '}
                  <span className="text-xs">Ani</span>
                </h3>
                <p className="text-xs text-gray-300">Experienta</p>
              </li>
              <li className="w-4/12 border-x border-gray-700 p-3">
                <h3 className="text-xl font-bold">
                  {certificate ? 'Da' : 'Nu'}
                </h3>
                <p className="text-xs text-gray-300">Certificat</p>
              </li>
              <li className="w-4/12 p-3">
                <h3 className="text-xl font-bold">
                  {certificate ? 'Da' : 'Nu'}
                </h3>
                <p className="text-xs text-gray-300">Verificat</p>
              </li>
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
