import React from 'react'
import Category from './Category';

const ListCategory = ({categories}) => {
  return (
      <div>
          {categories.map((category) => (
              <Category key={category} category={category} />
          ))}
      </div>
  );
}

export default ListCategory
// oRwwTnYsjNfKhxPTJ6XnMQ3jAqvZqEu3