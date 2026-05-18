import CausesExplorer from "@/components/CausesExplorer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="bg-stellar-blue text-white py-6 px-4 shadow-lg">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold">StellarReach Africa</h1>
          <p className="mt-2 text-blue-100">Transparent micro-donations for African causes</p>
        </div>
      </header>
      
      <CausesExplorer />
    </main>
  );
}
