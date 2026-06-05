'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is Erogram?',
    answer: 'Erogram is the #1 curated directory for NSFW Telegram groups, bots, AI tools, and 1.8M+ OnlyFans creators. All communities are verified and updated daily.',
  },
  {
    question: 'How do I join a Telegram group?',
    answer: 'Click any group card and tap "Join". You will be redirected to Telegram instantly. The Telegram app must be installed on your device.',
  },
  {
    question: 'Is this site free?',
    answer: 'Yes. Erogram is 100% free to browse. No account or payment required.',
  },
  {
    question: 'How are groups verified?',
    answer: 'Our team manually reviews each submission for authenticity and content quality before publishing. Groups are re-checked regularly.',
  },
  {
    question: 'What is the OnlyFans Search feature?',
    answer: 'The OnlyFans Search gives you access to over 1.8 million OnlyFans creator profiles. Search by name, username, or category.',
  },
  {
    question: 'Can I submit my Telegram group?',
    answer: 'Yes. Click "+Add" in the navbar. Your submission is reviewed and published within 24–48 hours if it meets our guidelines.',
  },
  {
    question: 'What AI NSFW tools are listed?',
    answer: 'Erogram indexes AI companions, NSFW image generators, AI chatbots, and other adult AI tools.',
  },
  {
    question: 'Is it safe to use this directory?',
    answer: 'Erogram only lists publicly available Telegram groups. We do not collect personal data. All redirects use official Telegram links. Adults 18+ only.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="bg-dark-bg border border-gray-700 rounded-lg overflow-hidden cursor-pointer hover:border-primary transition"
            open={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <summary className="px-6 py-4 font-semibold text-white hover:text-primary transition flex items-center justify-between">
              <span>{faq.question}</span>
              <span className="text-primary">{openIndex === index ? '−' : '+'}</span>
            </summary>
            <div className="px-6 pb-4 text-gray-300 border-t border-gray-700">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
