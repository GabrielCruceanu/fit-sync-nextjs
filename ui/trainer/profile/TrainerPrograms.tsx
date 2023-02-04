'use client';
import ProgramsModel from '#/model/programs/programs.model';
import type { TabItem, TabsInterface, TabsOptions } from 'flowbite';
import { Tabs } from 'flowbite';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { ProgramsExperience } from '#/constants/programs';

export default function TrainerPrograms({
  programs,
}: {
  programs: ProgramsModel[];
}) {
  console.log('programs', programs);

  useEffect(function mount() {
    let pricingTabEls: TabItem[] = [
      {
        id: ProgramsExperience.Incepator,
        triggerEl: document.querySelector('#Incepator-tab'),
        targetEl: document.querySelector('#Incepator-content'),
      },
      {
        id: ProgramsExperience.Intermediar,
        triggerEl: document.querySelector('#Intermediar-tab'),
        targetEl: document.querySelector('#Intermediar-content'),
      },
      {
        id: ProgramsExperience.Experimentat,
        triggerEl: document.querySelector('#Experimentat-tab'),
        targetEl: document.querySelector('#Experimentat-content'),
      },
    ];

    const options: TabsOptions = {
      defaultTabId: ProgramsExperience.Incepator,
      activeClasses: 'bg-teal-600 text-white border-teal-600',
      inactiveClasses: 'hover:text-white bg-gray-700 hover:bg-gray-500',
      onShow: () => {
        console.log('tab is shown');
      },
    };
    const pricingTabs: TabsInterface = new Tabs(pricingTabEls, options);
    pricingTabs.show('Incepator');
  });

  return (
    <section className=" my-5 w-full bg-gray-900  px-4 px-4 text-justify md:my-6">
      <h3 className="mb-2 text-2xl font-semibold tracking-wide">Programe</h3>

      <div className="w-full bg-gray-900 md:flex md:flex-wrap">
        <div className="mx-auto max-w-screen-xl">
          {/*Pricing Card */}
          <div className="divide-y divide-gray-700 rounded-lg bg-gray-800 shadow lg:grid lg:grid-cols-3 lg:divide-y-0 lg:divide-x">
            <div className="col-span-2 p-6 lg:p-8">
              {/* Tabs */}
              <ul
                className="grid grid-cols-2 divide-gray-600 text-center text-sm font-medium text-gray-400 shadow md:grid-cols-4 md:rounded-lg"
                role="tablist"
              >
                {/*{programs.find(*/}
                {/*  (program) => program.experience === 'Incepator',*/}
                {/*) ? (*/}
                <li className="w-full" role="presentation">
                  <button
                    id={ProgramsExperience.Incepator + '-tab'}
                    type="button"
                    className="inline-block w-full border border-gray-500 p-4 first:md:rounded-l-lg last:md:rounded-r-lg"
                  >
                    {ProgramsExperience.Incepator}
                  </button>
                </li>
                {/*// ) : null}*/}
                {/*{programs.find(*/}
                {/*  (program) => program.experience === 'Intermediar',*/}
                {/*) ? (*/}
                <li className="w-full" role="presentation">
                  <button
                    id={ProgramsExperience.Intermediar + '-tab'}
                    type="button"
                    className="inline-block w-full border border-gray-500 p-4 first:md:rounded-l-lg last:md:rounded-r-lg"
                  >
                    {ProgramsExperience.Intermediar}
                  </button>
                </li>
                {/*) : null}*/}
                {/*{programs.find(*/}
                {/*  (program) => program.experience === 'Experimentat',*/}
                {/*) ? (*/}
                <li className="w-full" role="presentation">
                  <button
                    id={ProgramsExperience.Experimentat + '-tab'}
                    type="button"
                    className="inline-block w-full border border-gray-500 p-4 first:md:rounded-l-lg last:md:rounded-r-lg"
                  >
                    {ProgramsExperience.Experimentat}
                  </button>
                </li>
                {/*) : null}*/}
              </ul>
              {/*Tabs content*/}
              <div
                id={ProgramsExperience.Incepator + '-content'}
                className="my-6 hidden lg:my-8"
              >
                {programs.map((program, key) => {
                  if (program.experience === ProgramsExperience.Incepator) {
                    return (
                      <div
                        className="relative z-0 mt-3 flex min-h-[200px] w-full overflow-hidden rounded-xl rounded bg-gray-700"
                        key={key + '-' + program.experience}
                      >
                        {program.workout?.photo ? (
                          <div className="-z-1 absolute top-0 right-0 left-0 bottom-0 bg-gray-900">
                            <img
                              src={program.workout?.photo}
                              alt={program.name}
                              className="block h-auto w-full object-cover opacity-75 bg-blend-multiply"
                            />
                          </div>
                        ) : null}
                        <div className="z-0 flex h-full w-full flex-col self-end bg-gradient-to-b from-transparent to-gray-900 p-3 ">
                          <h3 className="text-l mt-6 mb-2 font-medium text-white">
                            {program.name}
                          </h3>
                          <div className="flex justify-between">
                            <p className="flex items-center border-l-2 border-primary-600 pl-2 text-sm font-light text-gray-300">
                              {program.category}
                            </p>
                            {program.type ? (
                              <p
                                className={clsx(
                                  'flex items-center justify-center rounded rounded-l p-1 text-sm font-semibold text-white ',
                                  {
                                    'bg-amber-500': program.type === 'PRO',
                                    'bg-teal-500': program.type === 'FREE',
                                  },
                                )}
                              >
                                {program.type}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div
                id={ProgramsExperience.Intermediar + '-content'}
                className="my-6 hidden lg:my-8"
              >
                {programs.map((program, key) => {
                  if (program.experience === ProgramsExperience.Intermediar) {
                    return (
                      <div
                        className="relative z-0 mt-3 flex min-h-[200px] w-full overflow-hidden rounded-xl rounded bg-gray-700"
                        key={key + '-' + program.experience}
                      >
                        {program.workout?.photo ? (
                          <div className="-z-1 absolute top-0 right-0 left-0 bottom-0 bg-gray-900">
                            <img
                              src={program.workout?.photo}
                              alt={program.name}
                              className="block h-auto w-full object-cover opacity-75 bg-blend-multiply"
                            />
                          </div>
                        ) : null}
                        <div className="z-0 flex h-full w-full flex-col self-end bg-gradient-to-b from-transparent to-gray-900 p-3 ">
                          <h3 className="text-l mt-6 mb-2 font-medium text-white">
                            {program.name}
                          </h3>
                          <div className="flex justify-between">
                            <p className="flex items-center border-l-2 border-primary-600 pl-2 text-sm font-light text-gray-300">
                              {program.category}
                            </p>
                            {program.type ? (
                              <p
                                className={clsx(
                                  'flex items-center justify-center rounded rounded-l p-1 text-sm font-semibold text-white ',
                                  {
                                    'bg-amber-500': program.type === 'PRO',
                                    'bg-teal-500': program.type === 'FREE',
                                  },
                                )}
                              >
                                {program.type}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
              <div
                id={ProgramsExperience.Experimentat + '-content'}
                className="my-6 hidden lg:my-8"
              >
                {programs.map((program, key) => {
                  if (program.experience === ProgramsExperience.Experimentat) {
                    return (
                      <div
                        className="relative z-0 mt-3 flex min-h-[200px] w-full overflow-hidden rounded-xl rounded bg-gray-700"
                        key={key + '-' + program.experience}
                      >
                        {program.workout?.photo ? (
                          <div className="-z-1 absolute top-0 right-0 left-0 bottom-0 bg-gray-900">
                            <img
                              src={program.workout?.photo}
                              alt={program.name}
                              className="block h-auto w-full object-cover opacity-75 bg-blend-multiply"
                            />
                          </div>
                        ) : null}
                        <div className="z-0 flex h-full w-full flex-col self-end bg-gradient-to-b from-transparent to-gray-900 p-3 ">
                          <h3 className="text-l mt-6 mb-2 font-medium text-white">
                            {program.name}
                          </h3>
                          <div className="flex justify-between">
                            <p className="flex items-center border-l-2 border-primary-600 pl-2 text-sm font-light text-gray-300">
                              {program.category}
                            </p>
                            {program.type ? (
                              <p
                                className={clsx(
                                  'flex items-center justify-center rounded rounded-l p-1 text-sm font-semibold text-white ',
                                  {
                                    'bg-amber-500': program.type === 'PRO',
                                    'bg-teal-500': program.type === 'FREE',
                                  },
                                )}
                              >
                                {program.type}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
