'use client'
import React, { useState } from "react";
import SectionHeader from "../ui/SectionHeader";
import { faqs } from "@/data/data";

export default function Faq() {

    const [openIndex, setOpenIndex] = useState<number>(0);
  return (
    <div className="container-site">
      <div className="section">
        <SectionHeader
          title="Frequently Asked Questions"
          description="Common questions and answers about SaasRock."
        />
        <div className="bg-white divide-y divide-neutral-200 rounded-sm max-w-2xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;

            return (
              <div key={i}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left
                             hover:bg-neutral-50 transition-colors duration-150"
                >
                  <span className="font-display text-xl text-neutral-950 pr-8">
                    {faq.question}
                  </span>
                  <span
                    className="text-primary text-2xl font-light shrink-0 leading-none
                               transition-transform duration-300"
                    style={{
                      transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Answer — animated height via grid trick */}
                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-sm text-neutral-500 leading-relaxed px-6 pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
