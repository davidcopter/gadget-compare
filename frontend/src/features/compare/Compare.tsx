import React from 'react';
import { CompareCard } from '../../components/Compare';

export function Compare() {
  return (
    <>
      <header className="flex justify-center items-center p-14">
        <div className="title text-center">
          <h1 className="font-sans text-5xl font-bold text-gray-900 mb-4">
            Gadget Compare
          </h1>
          <p className="font-medium">Help you choose the best items.</p>
        </div>
      </header>
      <div className="compare flex">
        {[1, 2, 3].map((i) => (
          <CompareCard className="flex-1" key={i} />
        ))}
      </div>
    </>
  );
}
