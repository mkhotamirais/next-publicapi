import { PiSpinner } from "react-icons/pi";

export default function Pending() {
  return (
    <div className="flex items-center justify-center mt-24">
      <PiSpinner size={48} className="animate-spin" />
    </div>
  );
}
