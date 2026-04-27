import { AGENTS } from "@/data/data";
import React from "react";

export default function Team() {
  return (
    <section className="section-cream" id="team">
      <div className="container-site">
        <div className="text-center mb-16">
          <span className="eyebrow block mb-3">The People Behind It All</span>
          <h2 className="heading-1">Meet Our Team</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {AGENTS.map((agent) => (
            <div
              key={agent._id}
              className="bg-white overflow-hidden"
            >
              <div
                className="relative overflow-hidden"
                style={{ paddingBottom: "100%" }}
              >
                <img
                  src={typeof agent.photo === "string" ? agent.photo : ""}
                  alt={agent.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-1">
                  {agent.name}
                </h3>
                <p className="eyebrow mb-4">{agent.title}</p>
                {agent.bio && (
                  <p className="text-sm text-neutral-700 leading-relaxed mb-5">
                    {agent.bio}
                  </p>
                )}
                <div className="flex gap-6">
                  {agent.listings && (
                    <div>
                      <div className="font-display text-xl font-bold text-primary">
                        {agent.listings}
                      </div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">
                        Active
                      </div>
                    </div>
                  )}
                  {agent.soldProperties && (
                    <div>
                      <div className="font-display text-xl font-bold text-primary">
                        {agent.soldProperties}
                      </div>
                      <div className="text-xs text-neutral-400 uppercase tracking-wider">
                        Sold
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
