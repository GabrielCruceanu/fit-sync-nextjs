// import HeaderSearchATrainer from '../../ui/search-a-trainer/HeaderSearchATrainer';
//
// async function getTrainersData() {
//   const res = await fetch('https://kaapo.fit/api/trainers');
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
//
//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch trainers data');
//   }
//
//   return res.json();
// }
//
// export default async function SearchTrainerPage() {
//   const trainersData = await getTrainersData();
//   return (
//     <>
//       <HeaderSearchATrainer trainers={trainersData} />
//     </>
//   );
// }
