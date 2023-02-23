import PhysicalDetailsBanner from '#/ui/profile/PhysicalDetails/PhysicalDetailsBanner';
import PhysicalDetails from '#/ui/profile/PhysicalDetails/PhysicalDetails';

export default function ProfilePhysicalDetails() {
  return (
    <div className="my-5 px-4 md:my-6">
      <PhysicalDetailsBanner />
      <PhysicalDetails />
    </div>
  );
}
