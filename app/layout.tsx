import './globals.css';
import React from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Sticky Announcement Bar */}
        <div className="w-full bg-black text-white text-sm px-4 py-2 flex justify-between items-center sticky top-0 z-50 shadow-lg">
          <span>📖 Poppers Playbook now live — learn how to earn $POPPER tokens soon</span>
          <div className="flex space-x-2">
            <a href="/playbook" className="px-3 py-1 rounded border border-white hover:bg-white hover:text-black transition">Read Playbook</a>
            <a href="/presale" className="px-3 py-1 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition">Apply for Presale</a>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600" />
        {/* Top Nav Bar */}
        <div className="w-full bg-black text-white py-3 px-6 flex items-center justify-between sticky top-[40px] z-40 shadow-lg">
          <div className="flex items-center space-x-4">
            <img src="/logo.png" alt="Poppers Logo" className="h-8 animate-pulse" />
            <a href="/rewards" className="hover:text-yellow-400">🪄 Rewards</a>
            <a href="/staking" className="hover:text-pink-400">🥩 Staking</a>
            <a href="/leaderboard" className="hover:text-orange-400">🏆 Leaderboard</a>
            <a href="/airdrop" className="hover:text-red-400">🎈 Airdrop</a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="/create/token" className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full font-bold shadow hover:scale-105 transition">🔥 Light the Fuse</a>
            <button className="bg-gradient-to-r from-green-400 to-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow hover:scale-105 transition">🔌 Plug In</button>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gradient-to-r from-pink-500 via-yellow-400 to-purple-600" />
        {/* Main Content */}
        <div className="pt-[112px]">{children}</div>
      </body>
    </html>
  );
} 