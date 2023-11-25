import OnboardSteps, {
  OnboardStepsType,
} from '#/ui/user-onboarding/OnboardSteps';
import React from 'react';
import Paragraph from '../shared/Paragraph';

export default function UserOnboardWrap({
  children,
  currentStep,
  heading,
  paragraph,
}: {
  children: React.ReactNode;
  currentStep: OnboardStepsType;
  heading: string;
  paragraph: string;
}) {
  return (
    <section className="rounded-xl border bg-card text-card-foreground shadow flex flex-col space-y-1.5 p-4 md:p-8">
      <div className="md:flex md:min-h-[42rem]">
        <div className="mx-auto flex md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <OnboardSteps currentStep={currentStep} />
            <h1 className="mb-4 font-heading text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
              {heading}
            </h1>
            <Paragraph customClass="mb-3">{paragraph}</Paragraph>
            <>{children}</>
          </div>
        </div>
      </div>
    </section>
  );
}
