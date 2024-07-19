import React from 'react';
import { Button } from "@/components/ui/button"
import icons from '@/components/icons';

type Props = {
  number: number;
  color: string;
  text: string;
};

const SegRow: React.FC<Props> = ({ number, color, text }) => {
  return (
    <div className="flex items-center space-x-2 h-7 pt-0.5 rounded bg-bkg-low hover:bg-primary/20 relative group">
      <span className="text-infosecondary text-base ml-2 w-4 text-right">{number}</span>
      <span className="w-2 h-2 text-base rounded-full" style={{ backgroundColor: color }}></span>
      <span className="text-primary-foreground flex-1">{text}</span>
      <div className="absolute right-0.5 space-x-1 flex opacity-0 group-hover:opacity-100 pt-1">
        <div><Button variant="ghost" size="icon"><icons.hide /></Button></div>
        <div><Button variant="ghost" size="icon"><icons.more /></Button></div>
      </div>
    </div>
  );
};

export default SegRow;
