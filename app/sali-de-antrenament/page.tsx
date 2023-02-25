import HeaderSearchAGym from '#/ui/search-a-pro/HeaderSearchAGym';

async function getGymsData() {
  const res = await fetch('https://kaapo.fit/api/trainers');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch gyms data');
  }

  return res.json();
}

export default async function Page() {
  const gymsData = await getGymsData();
  return (
    <>
      <HeaderSearchAGym gyms={gymsData} />
    </>
  );
}
