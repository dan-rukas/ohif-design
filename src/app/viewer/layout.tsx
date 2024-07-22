import React from 'react';

export default function CustomPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Custom Page Layout</h1>
      {children}
    </div>
  );
}
