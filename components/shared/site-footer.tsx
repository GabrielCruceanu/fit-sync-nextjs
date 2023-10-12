import * as React from 'react';
import { cn } from '#/lib/utils';
import Link from 'next/link';
import { SocialLinks, TermsLinks } from '#/constants/links';
import { FacebookIcon } from '#/ui/shared/icons/FacebookIcon';
import InstagramIcon from '#/ui/shared/InstagramIcon';
import TwitterIcon from '#/ui/shared/icons/TwitterIcon';
import EnvelopeIcon from '#/ui/shared/icons/EnvelopeIcon';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  const date = new Date();
  return (
    <>
      <footer
        className={cn(
          className,
          'mt-1 w-full border-t border-primary px-4 py-11 antialiased',
        )}
      >
        <div className="container mx-auto flex flex-col lg:flex-row">
          <div className="mb-5 w-full lg:mb-0">
            <h3 className="mb-2 text-2xl font-semibold">Despre noi</h3>
            <p className="text-sm">
              FitSync este o platformă care dorește să îmbunătățească experiența
              clienților cu antrenorii și să facă munca antrenorilor mai ușoară
              oferindu-le mai multe unelte prin care își pot gestiona clienții
              mai ușor.
            </p>
          </div>
          <div className="mb-5 w-full lg:mb-0">
            <h3 className="mb-2 text-2xl font-semibold lg:text-center">
              Contact
            </h3>
            <div className="flex lg:justify-center">
              <div className="border-1 d-flex w-fit border-r px-3">
                <div className="h-8 space-x-2.5 fill-primary hover:fill-primary/90 transition-all">
                  <Link href={SocialLinks.facebook.link} target="_blank">
                    <FacebookIcon />
                  </Link>
                </div>
              </div>
              <div className="border-1 d-flex w-fit border-r px-3">
                <div className="h-8 space-x-2.5 fill-primary hover:fill-primary/90 transition-all">
                  <Link href={SocialLinks.instagram.link} target="_blank">
                    <InstagramIcon />
                  </Link>
                </div>
              </div>
              <div className="border-1 d-flex w-fit border-r px-3">
                <div className="h-8 space-x-2.5 fill-primary hover:fill-primary/90 transition-all">
                  <Link href={SocialLinks.twitter.link} target="_blank">
                    <TwitterIcon />
                  </Link>
                </div>
              </div>
              <div className="px-3">
                <div className="h-8 space-x-2.5 fill-primary hover:fill-primary/90 transition-all">
                  <Link href={SocialLinks.mail.link} target="_blank">
                    <EnvelopeIcon />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5 w-full lg:mb-0">
            <h3 className="mb-2 text-2xl font-semibold  lg:text-right">
              Altele
            </h3>
            <div className="flex flex-col text-sm md:flex-row lg:justify-end">
              <Link
                replace
                href={TermsLinks.termeniSiConditii.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {TermsLinks.termeniSiConditii.name}
              </Link>
              <Link
                replace
                href={TermsLinks.gdpr.link}
                className="underline underline-offset-4 hover:text-primary transition-all md:px-3"
              >
                {TermsLinks.gdpr.name}
              </Link>
              <Link
                replace
                href={TermsLinks.cookies.link}
                className="underline underline-offset-4 hover:text-primary transition-all"
              >
                {TermsLinks.cookies.name}
              </Link>
            </div>

            <p className="mt-2 text-sm lg:text-right">
              © {date.getFullYear()} FitSync. <br /> Toate drepturile
              rezervate.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
