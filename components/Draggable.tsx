'use client';
import { animations, multiDrag, selections } from '@formkit/drag-and-drop';

import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { Item } from './Item';
export const Draggable = () => {
  const texts = [
    'Text NUMBER 1',
    'Text NUMBER 2',
    'Text NUMBER 3',
    'Text NUMBER 4',
    'Text NUMBER 5',
  ];
  const [parent1, texts1] = useDragAndDrop<HTMLUListElement, string>(texts, {
    group: 'A',
    // plugins: [
    //   multiDrag({
    //     plugins: [
    //       selections({
    //         selectedClass: 'bg-blue-800 border-red-400 border-2',
    //       }),
    //     ],
    //   }),
    // ],
  });
  const [parent2, texts2] = useDragAndDrop<HTMLUListElement, string>([], {
    group: 'A',
    // plugins: [
    //   multiDrag({
    //     plugins: [
    //       selections({
    //         selectedClass: 'bg-blue-800 border-red-400 border-2',
    //       }),
    //     ],
    //   }),
    // ],
  });
  return (
    <div className="flex flex-row gap-8 px-8 py-2 bg-slate-600 w-full justify-center">
      <ul
        ref={parent1}
        className="flex flex-row gap-3 flex-1 bg-violet-700 p-2"
      >
        {texts1.map((text) => (
          <li
            key={text}
            className={`p-4 bg-pink-700 active:bg-opacity-20`}
          >
            <Item>{text}</Item>
          </li>
        ))}
      </ul>
      <ul
        ref={parent2}
        className="flex flex-row gap-3 bg-red-500 flex-1 p-2"
      >
        {texts2.map((text) => (
          <li
            key={text}
            className={`p-4 bg-blue-700 active:bg-opacity-20`}
          >
            <Item>{text}</Item>
          </li>
        ))}
      </ul>
    </div>
  );
};
