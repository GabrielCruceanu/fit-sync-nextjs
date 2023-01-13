'use client';
import ProgramsModel from '#/model/programs/programs.model';
import { Tabs } from 'flowbite';
import type { TabsOptions, TabsInterface, TabItem } from 'flowbite';
import { useEffect } from 'react';

export default function TrainerPrograms({
  programs,
}: {
  programs: ProgramsModel[];
}) {
  console.log('programs', programs);
  const programsType = [];
  let pricingTabEls: TabItem[] = [];
  programs.map((program) =>
    pricingTabEls.push({
      id: program.category,
      triggerEl: document.querySelector(`#${program.category}-tab`),
      targetEl: document.querySelector(`#${program.category}-content`),
      pricingEl: document.querySelector(`#${program.category}-plan`),
    }),
  );
  useEffect(function mount() {
    const options: TabsOptions = {
      defaultTabId: 'standard',
      activeClasses: 'bg-teal-600 text-white border-teal-600',
      inactiveClasses: 'hover:text-white bg-gray-700 hover:bg-gray-500',
      onShow(context: { getActiveTab: () => any }) {
        const activeTab = context.getActiveTab();
        pricingTabEls.map(function (el) {
          // @ts-ignore
          el.pricingEl.classList.add('hidden');

          console.log('tab is shown');
        });
        activeTab.pricingEl.classList.remove('hidden');
      },
    };

    const pricingTabs = new Tabs(pricingTabEls, options);
  });

  return (
    <section className="my-5 w-full bg-gray-900 px-4 text-justify md:flex md:flex-wrap">
      <h3 className="mb-4 text-xl text-white">Programe</h3>
      {/*<Tabs.Group*/}
      {/*  aria-label="Programe"*/}
      {/*  style="underline"*/}
      {/*  className="flex w-full justify-center border-gray-800 text-gray-200"*/}
      {/*>*/}
      {/*  {programs.map((program, key) => (*/}
      {/*    <Tabs.Item*/}
      {/*      title={program.experience}*/}
      {/*      className="text-red-600"*/}
      {/*      key={key}*/}
      {/*    >*/}
      {/*      {program.id}*/}
      {/*    </Tabs.Item>*/}
      {/*  ))}*/}
      {/*</Tabs.Group>*/}
      <div className="bg-gray-900">
        <div className="mx-auto max-w-screen-xl">
          {/*Pricing Card */}
          <div className="divide-y divide-gray-700 rounded-lg bg-gray-800 shadow lg:grid lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
            <div className="col-span-2 p-6 lg:p-8">
              <ul
                className="grid grid-cols-2 divide-gray-600 text-center text-sm font-medium text-gray-400 shadow md:grid-cols-4 md:rounded-lg"
                role="tablist"
              >
                {programs.map((program, key) => (
                  <li className="w-full" role="presentation" key={key + '-tab'}>
                    <button
                      id={program.experience + '-tab'}
                      type="button"
                      className="inline-block w-full border border-gray-500 p-4 first:md:rounded-l-lg last:md:rounded-r-lg"
                    >
                      {program.experience}
                    </button>
                  </li>
                ))}
              </ul>
              {programs.map((program, key) => (
                <div
                  id={program.experience + '-content'}
                  key={key + '-content'}
                  className="hidden"
                >
                  <div className="mt-6 mb-2 font-medium text-white">
                    Starter details:
                  </div>
                  <p className="text-lg font-light text-gray-500 dark:text-gray-400">
                    Plan pricing starts at 250 contacts. Select your audience
                    size to calculate your price. The monthly email send limit
                    for Standard plans is 12 times your maximum contact count.*.
                  </p>
                </div>
              ))}
            </div>
            <div className="flex p-6 lg:p-8">
              {programs.map((program, key) => (
                <div
                  id={program.experience + '-plan'}
                  key={key + '-plan'}
                  className="hidden w-full self-center"
                >
                  <div className="mb-4 text-2xl font-semibold text-white">
                    {program.experience} plan
                  </div>
                  <div className="font-light text-gray-400">Starts at</div>
                  <div className="mb-4 text-5xl font-extrabold text-white">
                    ${program.id}
                  </div>
                  <a
                    href="#"
                    className="mb-4 flex justify-center rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-900"
                  >
                    Buy now
                  </a>
                  <p className="text-sm text-gray-400">
                    *To see the monthly email send limit included with your
                    specific plan, click Calculate my price. If your contact or
                    email send limit is exceeded, you will be charged for
                    overages.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
