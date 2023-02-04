'use client';
import ProgramsModel from '#/model/programs/programs.model';
import type { TabItem, TabsInterface, TabsOptions } from 'flowbite';
import { Tabs } from 'flowbite';
import { ProgramsExperience } from '#/constants/programs';
import TrainerCard from '#/ui/shared/ProgramCard';
import NoProgramCard from '#/ui/shared/NoProgramCard';
import { useEffect } from 'react';

export default function TrainerPrograms({
  programs,
}: {
  programs: ProgramsModel[];
}) {
  console.log('programs', programs);

  const programsForIncepatori = programs.filter(
    (program) => program.experience == ProgramsExperience.Incepator,
  );

  const programsForIntermediari = programs.filter(
    (program) => program.experience == ProgramsExperience.Intermediar,
  );

  const programsForExperimentati = programs.filter(
    (program) => program.experience == ProgramsExperience.Experimentat,
  );

  useEffect(function mount() {
    const pricingTabEls: TabItem[] = [
      {
        id: ProgramsExperience.Incepator,
        triggerEl: document.querySelector('#Incepator-tab')!,
        targetEl: document.querySelector('#Incepator-content')!,
      },
      {
        id: ProgramsExperience.Intermediar,
        triggerEl: document.querySelector('#Intermediar-tab')!,
        targetEl: document.querySelector('#Intermediar-content')!,
      },
      {
        id: ProgramsExperience.Experimentat,
        triggerEl: document.querySelector('#Experimentat-tab')!,
        targetEl: document.querySelector('#Experimentat-content')!,
      },
    ];

    const options: TabsOptions = {
      defaultTabId: ProgramsExperience.Incepator,
      activeClasses:
        'bg-teal-500 hover:bg-teal-800 hover:border-teal-800 border-teal-500 transition ease-out duration-100',
      inactiveClasses:
        'bg-gray-600 hover:bg-gray-800 hover:border-gray-800 border-gray-600 transition ease-in duration-75',
      // onShow(context) {
      //   const activeTab = context.getActiveTab();
      //   pricingTabEls.map(function (el) {
      //     el.targetEl.classList.add('hidden');
      //   });
      //   activeTab.targetEl.classList.remove('hidden');
      // },
    };
    const pricingTabs: TabsInterface = new Tabs(pricingTabEls, options);
    pricingTabs.show('Incepator');
  });

  return (
    <section className="my-5 w-full bg-gray-900 px-4 px-4 text-justify md:my-6">
      <h3 className="mb-4 text-2xl font-semibold tracking-wide">Programe</h3>

      <div className="flex w-full justify-center">
        <div className="w-full">
          {/* Tabs */}
          <ul
            className="mx-auto flex w-full max-w-[400px] text-center text-sm font-medium text-white shadow"
            role="tablist"
          >
            <li className="w-full" role="presentation">
              <button
                id={ProgramsExperience.Incepator + '-tab'}
                type="button"
                className="tra inline-block w-full rounded-l border px-4 py-3"
              >
                {ProgramsExperience.Incepator}
              </button>
            </li>
            <li className="w-full" role="presentation">
              <button
                id={ProgramsExperience.Intermediar + '-tab'}
                type="button"
                className="inline-block w-full border border-x-gray-900 px-4 py-3"
              >
                {ProgramsExperience.Intermediar}
              </button>
            </li>
            <li className="w-full" role="presentation">
              <button
                id={ProgramsExperience.Experimentat + '-tab'}
                type="button"
                className="inline-block w-full rounded-r border px-4 py-3"
              >
                {ProgramsExperience.Experimentat}
              </button>
            </li>
          </ul>
          {/*Tabs content*/}
          <div
            id={ProgramsExperience.Incepator + '-content'}
            className="hidden"
          >
            <div className="my-6 md:flex">
              {programsForIncepatori?.length ? (
                programsForIncepatori.map((program, key) => (
                  <div
                    className="w-full md:w-6/12 md:px-3"
                    key={key + '-' + program.experience}
                  >
                    <TrainerCard program={program} />
                  </div>
                ))
              ) : (
                <NoProgramCard />
              )}
            </div>
          </div>
          <div
            id={ProgramsExperience.Intermediar + '-content'}
            className="hidden"
          >
            <div className="my-6 md:flex">
              {programsForIntermediari?.length ? (
                programsForIntermediari.map((program, key) => (
                  <TrainerCard
                    program={program}
                    key={key + '-' + program.experience}
                  />
                ))
              ) : (
                <NoProgramCard />
              )}
            </div>
          </div>
          <div
            id={ProgramsExperience.Experimentat + '-content'}
            className="hidden"
          >
            <div className="my-6 md:flex">
              {programsForExperimentati?.length ? (
                programsForExperimentati.map((program, key) => (
                  <TrainerCard
                    program={program}
                    key={key + '-' + program.experience}
                  />
                ))
              ) : (
                <NoProgramCard />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
