import React from 'react';

import UnorderedList from './UnorderedList';
import OrderedList from './OrderedList';
import DefinitionList from './DefinitionList';

const ListData = [
  { text: 'Lorem ipsum dolor sit amet' },
  {
    text: 'Interdum adipiscing gravida odio',
  },
  { text: 'Porttitor sem non integer' },
  { text: 'Non faucibus ornare mi ut ante' },
  { text: 'Sagittis adipiscing eleifend' },
  { text: 'Felis amet dolore viverra' },
];

const List = () => {
  return (
    <div>
      <UnorderedList ListData={ListData} />
      <OrderedList ListData={ListData} />
      <DefinitionList />
    </div>
  );
};
export default List;
