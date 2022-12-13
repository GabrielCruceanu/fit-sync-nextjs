import Link from 'next/link';

export function ProCardCTA({ close }: { close?: () => false | void }) {
  return (
    <div className="mt-auto max-w-xs rounded-2xl bg-gray-800 p-3">
      <Link
        href="/antrenor"
        className="flex items-center justify-between"
        onClick={close}
      >
        <div>
          <div className="min-w-min">
            <p className="inline-block rounded-xl bg-amber-500 px-2 text-xs font-medium">
              PRO
            </p>
          </div>
          <h4 className="text-md font-semibold">Sunteți un profesionist?</h4>
          <p className="text-xs text-gray-300">Manageriati clienții mai ușor</p>
        </div>
        <span className="text-xl ">{'>'}</span>
      </Link>
    </div>
  );
}
