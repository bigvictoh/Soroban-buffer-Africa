"use client";

import { useEffect, useState } from "react";
import CauseCard from "./CauseCard";
import DonateModal from "./DonateModal";

export interface Cause {
  id: string;
  name: string;
  description: string;
  country: string;
  stellar_address: string;
  goal_amount: number;
  created_at: string;
}

export default function CausesExplorer() {
  const [causes, setCauses] = useState<Cause[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCause, setSelectedCause] = useState<Cause | null>(null);

  useEffect(() => {
    fetchCauses();
  }, []);

  const fetchCauses = async () => {
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
      const response = await fetch(`${apiUrl}/api/causes`);
      const data = await response.json();
      setCauses(data);
    } catch (error) {
      console.error("Failed to fetch causes:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <p className="text-center text-gray-600">Loading causes...</p>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Explore Causes</h2>
        
        {causes.length === 0 ? (
          <p className="text-gray-600">No causes available yet. Check back soon!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {causes.map((cause) => (
              <CauseCard
                key={cause.id}
                cause={cause}
                onDonate={() => setSelectedCause(cause)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedCause && (
        <DonateModal
          cause={selectedCause}
          onClose={() => setSelectedCause(null)}
        />
      )}
    </>
  );
}
