import ContactModel from '#/model/user/contact.model';
import Link from 'next/link';
import EnvelopeIcon from '#/ui/shared/icons/EnvelopeIcon';
import { GlobeAltIcon, PhoneIcon } from '@heroicons/react/solid';
import { FacebookIcon } from '#/ui/shared/icons/FacebookIcon';
import InstagramIcon from '#/ui/shared/InstagramIcon';
import TwitterIcon from '#/ui/shared/icons/TwitterIcon';

export default function TrainerProfileContact({
  contact,
}: {
  contact: ContactModel;
}) {
  const { email, phone, website, twitter, facebook, instagram } = contact;
  return (
    <div className="my-5 px-4 text-justify md:my-6">
      <h3 className="mb-2 text-xl">Contact</h3>

      <div className="flex">
        {email ? (
          <div className="border-1 border-r border-gray-50 pr-3">
            <Link href={'mailto:' + email} target="_blank">
              <div className="h-7 space-x-2.5 fill-teal-500 transition-all ease-in-out hover:fill-teal-800  md:h-8">
                <EnvelopeIcon />
              </div>
            </Link>
          </div>
        ) : null}

        {phone ? (
          <div className="border-1 border-r border-gray-50 px-3">
            <Link href={'tel:' + phone} target="_blank">
              <PhoneIcon className="h-7 space-x-2.5 fill-teal-500 transition-all ease-in-out hover:fill-teal-800 md:h-8 " />
            </Link>
          </div>
        ) : null}

        {website ? (
          <div className="border-1 border-r border-gray-50 px-3">
            <Link href={website} target="_blank">
              <GlobeAltIcon className="h-7 space-x-2.5 fill-teal-500 transition-all ease-in-out hover:fill-teal-800 md:h-8 " />
            </Link>
          </div>
        ) : null}

        {facebook ? (
          <div className="border-1 d-flex w-fit border-r border-gray-50 px-3">
            <Link href={facebook} target="_blank">
              <div className="h-7 space-x-2.5 fill-teal-500 transition-all ease-in-out hover:fill-teal-800 md:h-8">
                <FacebookIcon />
              </div>
            </Link>
          </div>
        ) : null}

        {instagram ? (
          <div className="border-1 d-flex w-fit border-r border-gray-50 px-3">
            <Link href={instagram} target="_blank">
              <div className="h-7 space-x-2.5 fill-teal-500 transition-all ease-in-out hover:fill-teal-800  md:h-8">
                <InstagramIcon />
              </div>
            </Link>
          </div>
        ) : null}

        {twitter ? (
          <div className=" d-flex w-fit px-3">
            <Link href={twitter} target="_blank">
              <div className="h-7 space-x-2.5 fill-teal-500 transition-all  ease-in-out hover:fill-teal-800 md:h-8">
                <TwitterIcon />
              </div>
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
