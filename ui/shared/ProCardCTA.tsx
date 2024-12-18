export function ProCardCTA() {
  return (
    <div className="mt-auto rounded-2xl bg-gray-800 p-3">
      <div className="flex items-center justify-between">
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
      </div>
    </div>
  );
}
