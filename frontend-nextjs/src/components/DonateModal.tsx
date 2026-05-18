"use client";

import { useState } from "react";
import { Cause } from "./CausesExplorer";
import { useStellarWallet } from "@/hooks/useStellarWallet";

interface DonateModalProps {
  cause: Cause;
  onClose: () => void;
}

export default function DonateModal({ cause, onClose }: DonateModalProps) {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const { connected, publicKey, connect, sendPayment } = useStellarWallet();

  const handleDonate = async () => {
    if (!amount || parseFloat(amount) <= 0) {
      alert("Please enter a valid amount");
      return;
    }

    setLoading(true);
    try {
      const memo = `CAUSE:${cause.id}`;
      await sendPayment(cause.stellar_address, amount, memo);
      alert("Donation successful! Thank you for your support.");
      onClose();
    } catch (error) {
      console.error("Donation failed:", error);
      alert("Donation failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900">Donate to {cause.name}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>

        <p className="text-gray-600 mb-6">{cause.description}</p>

        {!connected ? (
          <button
            onClick={connect}
            className="w-full bg-stellar-blue text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-2">Connected: {publicKey?.slice(0, 8)}...</p>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount (XLM)
              </label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="10"
                min="0.01"
                step="0.01"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-stellar-blue focus:border-transparent"
              />
            </div>

            <button
              onClick={handleDonate}
              disabled={loading}
              className="w-full bg-stellar-blue text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Send Donation"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
