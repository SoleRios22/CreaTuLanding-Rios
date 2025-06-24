import React from 'react'

const ItemListContainer = ({saludo}) => {
  return (
    <div>
        <h1>{saludo}</h1>
        <p>En esta tienda encontrarás una variedad de productos para elegir.</p>
        <p>¡Explora y disfruta de tu experiencia de compra!</p>     
    </div>
    
  )
}

export default ItemListContainer