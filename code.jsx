// File: app/page.tsx (Next.js 13+)
'use client';

import { useEffect, useState } from 'react';

const foundingDate = new Date('1886-10-01T00:00:00Z');

const getElapsedTime = () => {
  const now = new Date();
  const diff = now.getTime() - foundingDate.getTime();

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export default function Home() {
  const [elapsed, setElapsed] = useState(getElapsedTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(getElapsedTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-[#121212] text-white">
      <div className="text-center p-4">
        <h1 className="text-2xl md:text-4xl font-semibold mb-6 transition-opacity duration-300">Arsenal's European Trophy Drought</h1>
        <div className="text-5xl md:text-7xl font-bold tracking-wide">
          <p className="mb-2">{elapsed.days} days</p>
          <p className="text-lg md:text-2xl font-medium text-gray-400">
            {elapsed.hours}h {elapsed.minutes}m {elapsed.seconds}s
          </p>
        </div>
      </div>
    </main>
  );
}
