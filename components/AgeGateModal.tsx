'use client';

import { useEffect, useState } from 'react';

export default function AgeGateModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasAccepted = localStorage.getItem('ageGateAccepted');
    if (!hasAccepted) {
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ageGateAccepted', 'true');
    setIsOpen(false);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-dark-bg rounded-lg p-8 max-w-md mx-4 text-center border border-gray-700">
        <h2 className="text-2xl font-bold text-white mb-4">
          This website contains Adult and NSFW content.
        </h2>
        <p className="text-gray-300 mb-8">
          You must be 18 or older to enter.
        </p>

        <div className="flex flex-col gap-3">
          <button
            onClick={handleAccept}
            className="bg-primary hover:bg-pink-600 text-white font-bold py-3 px-6 rounded transition w-full"
          >
            I am 18 or older — Enter
          </button>
          <button
            onClick={handleReject}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded transition w-full"
          >
            I am under 18 — Leave
          </button>
        </div>
      </div>
    </div>
  );
}
