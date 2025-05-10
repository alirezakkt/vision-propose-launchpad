
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative">
        <svg
          width="40"
          height="40"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10"
        >
          {/* Dragonfly body */}
          <circle cx="150" cy="125" r="25" fill="#45E3E3" />
          
          {/* Head and antennas */}
          <circle cx="150" cy="95" r="15" fill="#45E3E3" />
          <line x1="145" y1="85" x2="135" y2="70" stroke="#45E3E3" strokeWidth="4" />
          <circle cx="135" cy="70" r="5" fill="#45E3E3" />
          <line x1="155" y1="85" x2="165" y2="70" stroke="#45E3E3" strokeWidth="4" />
          <circle cx="165" cy="70" r="5" fill="#45E3E3" />
          
          {/* Wings */}
          <path d="M150,125 C200,80 250,100 220,140 C250,170 200,190 150,145 Z" fill="#F87060" fillOpacity="0.7" />
          <path d="M150,125 C100,80 50,100 80,140 C50,170 100,190 150,145 Z" fill="#45E3E3" fillOpacity="0.7" />
          
          {/* Tail */}
          <line x1="150" y1="150" x2="150" y2="200" stroke="#45E3E3" strokeWidth="4" />
          <circle cx="150" cy="180" r="5" fill="#45E3E3" />
          <circle cx="150" cy="210" r="5" fill="#45E3E3" />
          <circle cx="150" cy="240" r="5" fill="#45E3E3" />
        </svg>
      </div>
      <span className="text-xl font-semibold text-primary">Sanjaghak</span>
    </div>
  );
};

export default Logo;
