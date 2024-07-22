// src/components/Grid.tsx

import React from 'react';
import Box from '@/components/box';
import '../app/grid.css'; 

type GridProps = {
  rows: number;
  cols: number;
};

const Grid: React.FC<GridProps> = ({ rows, cols }) => {
  const boxes = Array.from({ length: rows * cols });

  return (
    <div
      className="grid"
      style={{
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
      }}
    >
      {boxes.map((_, index) => {
        const isLastColumn = (index + 1) % cols === 0;
        const isLastRow = index >= (rows - 1) * cols;
        return (
          <div
            key={index}
            className={`box-border ${
              !isLastColumn ? 'border-r' : ''
            } ${!isLastRow ? 'border-b' : ''} ${
              index % cols === 0 ? 'border-l' : ''
            } ${index < cols ? 'border-t' : ''} ${
              isLastRow ? 'border-b' : ''
            } ${isLastColumn ? 'border-r' : ''}`}
          >
            <Box />
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
