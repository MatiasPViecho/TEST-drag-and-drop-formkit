import React from 'react';

interface Props {
  children: React.ReactNode;
}
export const Item = (props: Props) => {
  return (
    <div className="w-24 h-24 rounded-md bg-red-300 cursor-grab active:cursor-grabbing">
      {props.children}
    </div>
  );
};
