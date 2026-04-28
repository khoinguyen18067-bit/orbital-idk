/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header.tsx";
import Sidebar from "./components/Sidebar.tsx";
import HUDContainer from "./components/HUDContainer.tsx";
import TacticalFeed from "./components/TacticalFeed.tsx";
import Arena from "./components/Arena.tsx";
import StatsFooter from "./components/StatsFooter.tsx";
import { motion } from "motion/react";

export default function App() {
  return (
    <div className="min-h-screen bg-surface flex flex-col overflow-hidden text-white">
      <Header />
      <Sidebar />

      <main className="pt-24 pb-8 px-6 lg:ml-64 flex-grow flex flex-col relative overflow-y-auto lg:overflow-hidden">
        {/* Ambient Glow Background */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_-20%,rgba(95,242,255,0.08),transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-12 gap-6 h-full flex-grow items-stretch pb-12 lg:pb-0">
          {/* Player 1 Panel */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            <HUDContainer title="PLAYER 1" id="ID: 0042-X" badge="Active Link" accent="primary">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-sm border border-primary/40 p-1 group-hover:scale-105 transition-transform duration-500">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtYP1dmPGsv5eAz4dNOrov_HiudYKG0lpOy8ogK0ExUAdHZmrGLCViyZYVI6baU8wr8iJUtwe0XFcNhUuyhFlvfOu5LKs8wxZg8tl-ESvJrNYEmA5r5aCkkEBIQVdir4rFvysUMLW6jhK6FRe4Z38Yu23OvNcVTKOAcFcBQ-BrfpFXFsuxu1Q-tqj0Y1dDk7YUQ0k0olAqkl9BA3U3lVCxcJ9RWsalkqNtT2XKdc_j7OV8O4scalcRI9CauK1LacYSeaf5JnwMBw"
                    alt="Player 1"
                  />
                </div>
                <div>
                  <h3 className="font-headline font-black text-xl leading-none uppercase glow-blue">CYBER_STRIKE</h3>
                  <div className="flex gap-1 mt-2">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`h-1 w-5 ${i < 4 ? "bg-primary" : "bg-primary/20"}`} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] text-white/40 font-headline uppercase tracking-[0.2em]">Synch Level</span>
                  <span className="text-primary font-headline font-black text-2xl glow-blue">78%</span>
                </div>
                <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "78%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary" 
                  />
                </div>
              </div>
            </HUDContainer>

            <HUDContainer className="flex-grow bg-surface-container/30">
              <TacticalFeed
                title="Tactical Feed"
                side="left"
                items={[
                  { text: "Uplink established", type: "info" },
                  { text: "Scanners bypass active", type: "info" },
                  { text: "Alchemy anomaly detected in Sector 7", type: "alert" },
                ]}
              />
            </HUDContainer>
          </div>

          {/* Central Arena Viewport */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
            <Arena />
          </div>

          {/* Player 2 Panel */}
          <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
            <HUDContainer title="PLAYER 2" id="ID: 9901-M" badge="Rival Detected" accent="secondary">
              <div className="flex items-center flex-row-reverse gap-4 mb-6">
                <div className="w-14 h-14 rounded-sm border border-secondary/40 p-1 group-hover:scale-105 transition-transform duration-500">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuChE__2hkuPAlQQWm18pFy9qn6AjrDJLCu-neu8gd5pIAsWTiDTA_UdRBxT7pH8IHv2CEK16F-PB-33vxHtDKBNgacq-ka68sOV2F2foiyh8hR1qmB50K74m4eubUbgwmEUnCEpSVmX5pTK92gyBDl_L_XMHcMPwy7O3f3QS5L_R99paCl8O37UCXjSDv7orv0fEH_gqb8bLf7Z3WHUO06uzl-hDnhB3HSAaOdMxQofTE5dJ6mmX4y2IM9nI6-4cP8FVktP2PxVLw"
                    alt="Player 2"
                  />
                </div>
                <div className="text-right">
                  <h3 className="font-headline font-black text-xl leading-none uppercase glow-red">VOID_WALKER</h3>
                  <div className="flex gap-1 mt-2 justify-end">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className={`h-1 w-5 ${i <= 3 ? "bg-secondary" : "bg-secondary/20"}`} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] text-white/40 font-headline uppercase tracking-[0.2em]">Threat Rating</span>
                  <span className="text-secondary font-headline font-black text-2xl glow-red">S-CLASS</span>
                </div>
                <div className="w-full h-1 bg-surface-container-high rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "92%" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-secondary" 
                  />
                </div>
              </div>
            </HUDContainer>

            <HUDContainer className="flex-grow bg-surface-container/30">
              <TacticalFeed
                title="Opponent Status"
                side="right"
                items={[
                  { text: "Analyzing combat patterns...", type: "alert" },
                  { text: "Transmutation sequence armed.", type: "warning" },
                  { text: "Awaiting collision.", type: "alert" },
                ]}
              />
            </HUDContainer>
          </div>
        </div>

        <StatsFooter />
      </main>

      {/* Grid Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 opacity-30 pointer-events-none" />
    </div>
  );
}
