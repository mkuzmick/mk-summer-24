import React, { ReactNode } from "react";

type BigTextProps = {
  children: ReactNode; // This type allows anything that React can render
};

const BigText: React.FC<BigTextProps> = ({ children }: BigTextProps) => {
  return (
    <h1 className="text-7xl text-white sans-serif font-emilys-candy">
      {children}
    </h1>
  );
};

export default BigText;

// tesr comment from iphone