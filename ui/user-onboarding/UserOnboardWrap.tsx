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
    <section className="bg-gray-900 py-8">
      <div className="md:flex md:min-h-[42rem]">
        <div className="mx-auto flex px-4 md:w-[42rem] md:px-8 xl:px-0">
          <div className="w-full">
            <OnboardSteps currentStep={currentStep} />
            <h1 className="mb-4 text-2xl font-extrabold leading-tight tracking-tight text-white">
              {heading}
            </h1>
            <Paragraph customClass="">{paragraph}</Paragraph>
            <>{children}</>
          </div>
        </div>
      </div>
    </section>
  );
}
