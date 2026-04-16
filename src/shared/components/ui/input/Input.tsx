import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className = '', ...props }: InputProps) => {
  return (
    <input 
      className={`flex-1 bg-transparent border-none outline-none px-4 py-2 text-gray-700 placeholder-gray-400 ${className}`}
      {...props}
    />
  );
};
