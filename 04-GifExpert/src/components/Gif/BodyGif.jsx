import React from 'react'
import ImageGif from './ImageGif';
import ListTitleGif from './ListTitleGif';
import TitleGif from './TitleGif';

const BodyGif = ({id, title, url}) => {
  return (
      <div className='card'>
          
          <ImageGif image={url} />
          <TitleGif title={title} />
      </div>
  );
}

export default BodyGif