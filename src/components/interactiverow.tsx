import React from 'react';

type Props = {
    name: string;
  };
  

const intRow: React.FC<Props> = ({ name }) => {
    return (

        <div className="h-7 bg-bkg-med">
            hello
        </div>

    );
}

export default intRow;