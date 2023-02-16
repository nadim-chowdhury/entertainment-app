import React from 'react'

const Video = () => {
  const { id, title, price, description, category, image } = props.data;

  return (
    <div className="video">
    <div>
      <img className="w-36 h-36" src={image} />
      <h4 className="text-2xl">{title}</h4>
    </div>
    <div>
      <h2 className="font-bold">{category}</h2>
      <h3 className="text-xl font-bold">$ {price}</h3>
      <button className="w-full" id="add-cart">
        Subscribe
      </button>
    </div>
  </div>
  )
}

export default Video