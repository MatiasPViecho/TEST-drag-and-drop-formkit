'use client';
import { animations, multiDrag, selections } from '@formkit/drag-and-drop';

import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { Item } from './Item';
import { generateUUID } from '@/helpers/uuid';
import { Key } from 'react';
interface IContent {
  content: String;
  id: Key;
}
export const Draggable = () => {
  const [parent, texts] = useDragAndDrop<HTMLUListElement, IContent>(
    [
      { content: 'Text NUMBER 1', id: generateUUID() },
      { content: 'Text NUMBER 2', id: generateUUID() },
      { content: 'Text NUMBER 3', id: generateUUID() },
      { content: 'Text NUMBER 4', id: generateUUID() },
      { content: 'Text NUMBER 5', id: generateUUID() },
      { content: '', id: generateUUID() },
      { content: '', id: generateUUID() },
      { content: '', id: generateUUID() },
      { content: '', id: generateUUID() },
      { content: '', id: generateUUID() },
      { content: '', id: generateUUID() },
      { content: '', id: generateUUID() },
    ]
    //{ plugins: [animations()] }
    // {
    //   plugins: [
    //     multiDrag({
    //       plugins: [
    //         selections({
    //           selectedClass: 'bg-blue-800 border-red-400 border-2',
    //         }),
    //       ],
    //     }),
    //   ],
    // }
  );
  return (
    <div className="gap-8 px-8 py-2 bg-slate-600 w-full justify-center">
      <ul
        ref={parent}
        className="grid grid-cols-4 grid-rows-4 gap-3 bg-red-500"
      >
        {texts.map((text) => {
          const uuid: String = generateUUID();
          return (
            <li
              key={text.id}
              className={`mx-auto my-0 bg-blue-200 active:bg-opacity-20`}
            >
              <Item>{text.content}</Item>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
