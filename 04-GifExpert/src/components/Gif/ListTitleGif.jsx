import React from 'react'
import BodyGif from './BodyGif';


const ListTitleGif = ({listado}) => {
  return (
      <div className='card-grid'>
          {listado.map((element) => (
              <BodyGif
                  key={element.id}
                  id={element.id}
                  title={element.title}
                  url={element.url}
              />
          ))}
      </div>
  );
}

export default ListTitleGif