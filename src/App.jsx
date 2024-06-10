import { useEffect, useState } from 'react'

import './cart.css'

function App() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {
    fetch("https://www.course-api.com/react-useReducer-cart-project")
      .then(response => response.json())
      .then((result) => {
        // console.log(result)
        setProducts(result)
      })
  }, [])
  console.log(products)

  function clearCart(){
    setProducts([]);
  }

  function handleRemove(productToRemove){
    // console.log("inside")
    const newProducts = products.filter((product)=>{
      return productToRemove !== product
    })

    setProducts(newProducts);
  }

  return (
    <>
      <header>
        <h1>UseReducer</h1>
        <p>cart({products.length})</p>
      </header>
      <div className="products">
        { products.length>0 ?
        products.map((product,index) => {
          return (<>

            <div className="bag" key={index}>

              <img src={product.img}></img>

              <div className='description'>
                <h5>{product.title}</h5>
                <p>{product.price}</p>
                <p  className='remove' onClick={()=>{handleRemove(product)}}>remove</p>
              </div>
              <div>
                counter(1)
              </div>

            </div>
          </>)
      })
    :
    <div className='option'>
      no products to display
      </div>
    }
     
    </div>
  <footer>
      <div className='first'>
      <h3>Total</h3>
      <p>amt</p>
      </div>
      <div className='second'>
      <button onClick={clearCart}>Clear Cart</button>
      </div>
    </footer>
    </>
  )
}

export default App
