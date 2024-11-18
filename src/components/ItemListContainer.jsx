import React, { useEffect, useState } from 'react'

export const ItemListContainer = () => {
    const [items, setItems] = usestate ([])

    useEffect(() => {
      getProducts()
      .then(res => setItems(res))
    }, [])
    
    const getProducts = () => new promise ((res,rej) => {
      if (products.length === 0) {
        rej(" el array esta vacio")
      }

      setTimeout (() => {
        res(products)
      }, 3000)
    })
  
  return (
    <div>
      <h1>Catálogo de Productos</h1>
        {item.map(item => <p key={item.id}>{item.nombre}</p>) }
    </div>
  )
}
