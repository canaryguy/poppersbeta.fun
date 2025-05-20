'use client';

import React, { useState } from 'react';

const DURATION_OPTIONS = [
  { label: '1hr', value: 1 },
  { label: '2hr', value: 2 },
  { label: '4hr', value: 4 },
  { label: '6hr', value: 6 },
  { label: '8hr', value: 8 },
];

export default function CreateTokenPage() {
  const [form, setForm] = useState({
    name: '',
    symbol: '',
    ticketPrice: 0.035,
    duration: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'ticketPrice' ? parseFloat(value) : name === 'duration' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    alert('Form values logged to console!');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-purple-900 text-white flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md bg-black bg-opacity-60 rounded-xl shadow-lg p-8 border border-purple-700">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          🎯 Launch a Meme Token
        </h1>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">📝 Token Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="e.g. Poppers Inu"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="symbol">🔤 Symbol</label>
            <input
              id="symbol"
              name="symbol"
              type="text"
              value={form.symbol}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="e.g. POPPER"
              maxLength={8}
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="ticketPrice">💸 Ticket Price (SOL)</label>
            <input
              id="ticketPrice"
              name="ticketPrice"
              type="number"
              step="0.001"
              min="0.001"
              value={form.ticketPrice}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="duration">⏳ Raffle Duration</label>
            <select
              id="duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-purple-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {DURATION_OPTIONS.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 rounded-lg font-bold text-lg bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-500 shadow-lg hover:shadow-pink-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-pink-500 animate-pulse"
          >
            🚀 Launch Token
          </button>
        </form>
        <div className="mt-8 text-center text-sm text-purple-300">
          <p>🪙 <span className="font-bold">888,888,888</span> total supply</p>
          <p>💱 <span className="font-bold">3.5% trading tax</span> on all trades</p>
        </div>
      </div>
    </main>
  );
} 