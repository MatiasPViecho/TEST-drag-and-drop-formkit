'use client';
import { useDragAndDrop } from '@formkit/drag-and-drop/react';
import { Fragment } from 'react';
import { Item } from './Item';
export const Draggable = () => {
  const [parent, texts] = useDragAndDrop<HTMLUListElement, string>([
    'Text NUMBER 1',
    'Text NUMBER 2',
    'Text NUMBER 3',
    'Text NUMBER 4',
    'Text NUMBER 5',
  ]);
  return (
    <ul
      ref={parent}
      className="flex flex-row gap-3 p-24"
    >
      {texts.map((text) => (
        <Fragment key={text}>
          <li className="peer peer-active:bg-blue-800 p-4 bg-blue-700">
            <Item>{text}</Item>
          </li>
        </Fragment>
      ))}
    </ul>
  );
};
