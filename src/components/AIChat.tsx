'use client';
import { useState } from 'react';

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-20 z-50 w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl" style={{maxWidth:'calc(100vw - 3rem)'}}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center">
            <span className="text-white font-semibold">AI Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-white">X</button>
          </div>
          <div className="p-4 h-64 overflow-y-auto bg-gray-50 dark:bg-gray-900">
            <p className="text-sm text-gray-800 dark:text-gray-200">Hi! How can I help you today?</p>
          </div>
        </div>
      )}
      <div className="fixed bottom-6 right-20 z-40" style={{ width: '48px', height: '48px' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-lg flex items-center justify-center"
          style={{ width: '48px', height: '48px', minWidth: '48px', minHeight: '48px' }}
          aria-label="Toggle AI chat"
        >
          <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      </div>
    </>
  );
}
