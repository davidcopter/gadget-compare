import React from 'react';

type Props = {
  author: string;
};

export function Footer({ author }: Props) {
  return (
    <footer className="flex justify-center items-center py-10">
      <div className="footer_icon m-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
        </svg>
      </div>
      <a href="https://github.com/davidcopter">
        <p className="hover:text-blue-600">{author}</p>
      </a>
    </footer>
  );
}
