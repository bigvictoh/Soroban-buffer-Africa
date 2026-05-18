import { Cause } from "./CausesExplorer";

interface CauseCardProps {
  cause: Cause;
  onDonate: () => void;
}

export default function CauseCard({ cause, onDonate }: CauseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{cause.name}</h3>
        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {cause.country}
        </span>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
        {cause.description}
      </p>
      
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span className="text-gray-600">Goal</span>
          <span className="font-semibold">{cause.goal_amount.toLocaleString()} XLM</span>
        </div>
      </div>
      
      <button
        onClick={onDonate}
        className="w-full bg-stellar-blue text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
      >
        Donate Now
      </button>
    </div>
  );
}
