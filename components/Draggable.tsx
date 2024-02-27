'use client';
import { animations } from '@formkit/drag-and-drop';

import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { Item } from './Item';
export const Draggable = () => {
  const [parent, texts] = useDragAndDrop<HTMLUListElement, string>(
    [
      'Text NUMBER 1',
      'Text NUMBER 2',
      'Text NUMBER 3',
      'Text NUMBER 4',
      'Text NUMBER 5',
    ],
    { plugins: [animations()] }
  );
  return (
    <ul
      ref={parent}
      className="flex flex-row gap-3 p-24"
    >
      {texts.map((text) => (
        <li
          key={text}
          className={`p-4 bg-blue-700 active:bg-opacity-20`}
        >
          <Item>{text}</Item>
        </li>
      ))}
    </ul>
  );
};
