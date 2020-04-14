import React from 'react';
// write your CatList component here
const CatList = props => {
  return (
    <div>
      {props.catPics.map(catPic => <img src={catPic.url} key={catPic.id} />)}
    </div>
  )
}

export default CatList;
