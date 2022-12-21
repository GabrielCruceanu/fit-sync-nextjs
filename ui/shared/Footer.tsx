import { FacebookIcon } from '#/ui/shared/icons/FacebookIcon';
import Link from 'next/link';
import { TermsLinks, SocialLinks } from '#/constants/links';
import EnvelopeIcon from '#/ui/shared/icons/EnvelopeIcon';
import TwitterIcon from '#/ui/shared/icons/TwitterIcon';
import InstagramIcon from '#/ui/shared/InstagramIcon';

export function Footer() {
  return (
    <footer className="border-1 w-full border-t border-teal-500 py-11 px-4 antialiased">
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold text-white">Despre noi</h3>
          <p className="text-sm text-gray-200">
            Kaapo.Fit este o platformă care dorește să îmbunătățească experiența
            clienților cu antrenorii și să facă munca antrenorilor mai ușoară
            oferindu-le mai multe unelte prin care își pot gestiona clienții mai
            ușor.
          </p>
        </div>
        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold text-white lg:text-center">
            Contact
          </h3>
          <div className="flex lg:justify-center">
            <div className="border-1 d-flex w-fit border-r border-gray-50 px-3">
              <Link
                href={SocialLinks.facebook.link}
                className=" space-x-2.5"
                target="_blank"
              >
                <div className="h-8 fill-teal-500 hover:fill-teal-800">
                  <FacebookIcon />
                </div>
              </Link>
            </div>
            <div className="border-1 d-flex w-fit border-r border-gray-50 px-3">
              <Link
                href={SocialLinks.instagram.link}
                className="space-x-2.5 fill-teal-500 hover:fill-teal-800"
                target="_blank"
              >
                <div className="h-8">
                  <InstagramIcon />
                </div>
              </Link>
            </div>
            <div className="border-1 d-flex w-fit border-r border-gray-50 px-3">
              <Link
                href={SocialLinks.twitter.link}
                className=" space-x-2.5"
                target="_blank"
              >
                <div className="h-8 fill-teal-500 hover:fill-teal-800">
                  <TwitterIcon />
                </div>
              </Link>
            </div>
            <div className="px-3">
              <Link
                href={SocialLinks.mail.link}
                className="space-x-2.5"
                target="_blank"
              >
                <div className="h-8 fill-teal-500 hover:fill-teal-800">
                  <EnvelopeIcon />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold text-white lg:text-right">
            Altele
          </h3>
          <div className="flex flex-col text-sm md:flex-row lg:justify-end">
            <Link
              href={TermsLinks.termeniSiConditii.link}
              className="text-teal-500 hover:text-teal-700"
              target="_blank"
            >
              {TermsLinks.termeniSiConditii.name}
            </Link>
            <Link
              href={TermsLinks.gdpr.link}
              className="text-teal-500 hover:text-teal-700 md:px-3"
              target="_blank"
            >
              {TermsLinks.gdpr.name}
            </Link>
            <Link
              href={TermsLinks.cookies.link}
              className="text-teal-500 hover:text-teal-700"
              target="_blank"
            >
              {TermsLinks.cookies.name}
            </Link>
          </div>

          <p className="mt-2 text-sm text-gray-200 lg:text-right">
            © 2022 Kaapo.Fit. <br /> Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
}
