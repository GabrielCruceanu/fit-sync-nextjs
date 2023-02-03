import Image from 'next/image';
import ContactModel from '#/model/user/contact.model';
import {
  BadgeCheckIcon,
  BriefcaseIcon,
  ChatIcon,
  LocationMarkerIcon,
} from '@heroicons/react/solid';
import { TrainerType } from '#/constants/trainer';
import ClientProfileModel from '#/model/client/clientProfile.model';
import { Button, Tooltip } from 'flowbite-react';

export default function TrainerProfileHeader({
  firstName,
  lastName,
  profilePicture,
  type,
  experience,
  certificate,
  city,
  completedClients,
  activeClients,
  contact,
}: {
  firstName: string;
  lastName: string;
  profilePicture?: string;
  type: TrainerType;
  experience: string;
  certificate: boolean;
  city: string;
  completedClients?: ClientProfileModel[];
  activeClients?: ClientProfileModel[];
  contact: ContactModel;
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
                  {firstName[0] + lastName[0]}
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
                      <BadgeCheckIcon className="h-6 w-6 fill-amber-500" />
                    </Button>
                  </Tooltip>
                ) : null}
              </div>

              <div className="md:flex">
                <div className="flex items-center md:mr-4">
                  <BriefcaseIcon className="mr-2 h-5 w-5 fill-teal-500" />
                  <h3 className="text-sm tracking-wide">{type}</h3>
                </div>

                <div className="flex  items-center">
                  <LocationMarkerIcon className="mr-2 h-5 w-5 fill-teal-500" />
                  <h3 className="text-sm tracking-wide">{city}</h3>
                </div>
              </div>
            </div>

            {/*Contact Action*/}
            <div className="mt-2">
              <a
                href={'https://wa.me/' + contact.phone}
                target="_blank"
                rel="noreferrer"
                className="block flex h-[54px] w-[54px] items-center justify-center overflow-hidden rounded-full bg-teal-500"
              >
                <ChatIcon className="h-9 w-9 fill-gray-900 transition-all ease-in-out hover:fill-teal-900" />
              </a>
            </div>
          </div>

          {/* Profile Experience */}
          <ul className="mx-auto my-4 flex max-w-[288px] items-center rounded-xl bg-gray-800 text-center text-white">
            <li className="w-4/12 p-3">
              <h3 className="text-xl font-bold">{experience}</h3>
              <p className="text-xs text-gray-300">Ani de Experienta</p>
            </li>
            <li className="w-4/12 border-x border-gray-700 p-3">
              <h3 className="text-xl font-bold">
                {completedClients ? completedClients.length : '0'}
              </h3>
              <p className="text-xs text-gray-300">Clienti Completi</p>
            </li>
            <li className="w-4/12 p-3">
              <h3 className="text-xl font-bold">
                {activeClients ? activeClients.length : '0'}
              </h3>
              <p className="text-xs text-gray-300">
                Clienti <br /> Activi
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
