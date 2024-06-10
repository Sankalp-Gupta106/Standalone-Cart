import { useEffect, useState } from 'react'
import data from './Data';
import './cart.css'

function App() {
  const [products, setProducts] = useState([])
  const [cartCount, setCartCount] = useState(null);
  // const [amt , setamt] = useState(0)
  // const [productQuantity , setProductQuantity ] = useState(1)

  let total = 0
  products.map(product => {
    total += product.amount * product.price;
  })


  useEffect(() => {
    setProducts(data);

  }, [])
  // useEffect(() => {
  //   fetch("https://www.course-api.com/react-useReducer-cart-project")
  //     .then(response => response.json())
  //     .then((result) => {
  //       // console.log(result)
  //       setProducts(result)
  //     })
  // }, [])
  console.log(products)


  function clearCart() {
    setProducts([]);
  }

  function handleRemove(productToRemove) {
    // console.log("inside")
    const newProducts = products.filter((product) => {
      return productToRemove !== product
    })

    setProducts(newProducts);
  }

  useEffect(() => {
    let quantity = 0;
    products.forEach(product => {
      quantity += product.amount;
    })
    setCartCount(quantity)

  }, [products])



  function handleDecrement(decrementProduct) {
    if (decrementProduct.amount != 1) {
      let obj = products.find(product => {
        return decrementProduct == product
      })
      obj.amount -= 1
      let quantity = 0;
      products.forEach(product => {
        quantity += product.amount;
      })
      setCartCount(quantity)
    }
  }

  function handleIncrement(IncrementProduct) {
    console.log("heloo")
    let obj = products.find(product => {
      return IncrementProduct == product
    })
    obj.amount += 1;
    let quantity = 0;
    products.forEach(product => {
      quantity += product.amount;
    })
    setCartCount(quantity)
  }

  return (
    <>
      <header>
        <h1>UseReducer</h1>
        <p>cart({cartCount})</p>
      </header>
      {
        products.length == 0 ? 
        <div className='empty'>
          <h1>Cart is Empty</h1>
        </div>
        :
        <>
        <div className="products">
        {products.map((product, index) => {
          return (<>

            <div className="bag" key={index}>

              <img src={product.img}></img>

              <div className='description'>
                <h5>{product.title}</h5>
                <p>{product.price}</p>
                <p className='remove' onClick={() => { handleRemove(product) }}>remove</p>
              </div>
              <div>
                <span onClick={() => { handleDecrement(product) }}>&lt;</span>&nbsp;
                ({product.amount})
                &nbsp;<span onClick={() => { handleIncrement(product) }}>&gt;</span>
              </div>

            </div>
          </>)
        })
        }
      </div>
      <footer>
        <div className='first'>
          <h3>Total</h3>
          <p>
            {Math.round(total)}
          </p>
        </div>
        <div className='second'>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      </footer>
      </>

      }
      
    </>
  )
}

export default App
