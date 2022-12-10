import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="text-xl font-medium text-gray-300">Examples</h1>

      <div className="min-h-screen space-y-10 text-white">
        <Link href="/">Home</Link>
      </div>
      <div className="min-h-screen space-y-10 text-white">
        <Link href="/">Home</Link>
      </div>
      <div className="min-h-screen space-y-10 text-white">
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}
