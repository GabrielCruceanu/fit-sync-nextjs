import { FacebookIcon } from '#/ui/shared/icons/FacebookIcon';
import Link from 'next/link';
import { TermsLinks, SocialLinks } from '#/constants/links';
import EnvelopeIcon from '#/ui/shared/icons/EnvelopeIcon';
import TwitterIcon from '#/ui/shared/icons/TwitterIcon';
import InstagramIcon from '#/ui/shared/InstagramIcon';

export function Footer() {
  return (
    <footer className="border-1 mt-1 w-full border-t border-teal-500 py-11 px-4 antialiased">
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
              <div className="h-8 space-x-2.5 fill-teal-500 hover:fill-teal-800">
                <Link href={SocialLinks.facebook.link} target="_blank">
                  <FacebookIcon />
                </Link>
              </div>
            </div>
            <div className="border-1 d-flex w-fit border-r border-gray-50 px-3">
              <div className="h-8 space-x-2.5 fill-teal-500 hover:fill-teal-800">
                <Link href={SocialLinks.instagram.link} target="_blank">
                  <InstagramIcon />
                </Link>
              </div>
            </div>
            <div className="border-1 d-flex w-fit border-r border-gray-50 px-3">
              <div className="h-8 space-x-2.5 fill-teal-500 hover:fill-teal-800">
                <Link href={SocialLinks.twitter.link} target="_blank">
                  <TwitterIcon />
                </Link>
              </div>
            </div>
            <div className="px-3">
              <div className="h-8 space-x-2.5 fill-teal-500 hover:fill-teal-800">
                <Link href={SocialLinks.mail.link} target="_blank">
                  <EnvelopeIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-5 w-full lg:mb-0">
          <h3 className="mb-2 text-2xl font-semibold text-white lg:text-right">
            Altele
          </h3>
          <div className="flex flex-col text-sm md:flex-row lg:justify-end">
            <Link
              replace
              href={TermsLinks.termeniSiConditii.link}
              target="_blank"
              className="text-teal-500 hover:text-teal-700"
            >
              {TermsLinks.termeniSiConditii.name}
            </Link>
            <Link
              replace
              href={TermsLinks.gdpr.link}
              target="_blank"
              className="text-teal-500 hover:text-teal-700 md:px-3"
            >
              {TermsLinks.gdpr.name}
            </Link>
            <Link
              replace
              href={TermsLinks.cookies.link}
              target="_blank"
              className="text-teal-500 hover:text-teal-700"
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
