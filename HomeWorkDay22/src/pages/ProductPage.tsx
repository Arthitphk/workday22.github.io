import images from "../images/1.png"



const ProductPage = () => {

  return (

    <body>
        <nav className='navbar'>
            <div className="nav-bg">
                <div className="nav-item">
                    <h2>Your Brand</h2>
                    <h4>item</h4>
                    <h4>item</h4>
                    <h4>item</h4>
                </div>
            </div>
        </nav>


        <div className="product-warpper">
            <div className="product-warpper-item">
                <div className="img-product">
                    <img src={images} alt=""></img>
                </div>


                <div className="boxtex">
                    <div className="boxtext-con">
                        <h2>Product Name</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, deserunt culpa ad distinctio enim vitae et cupiditate laborum totam magnam nam saepe nemo dolorum esse neque possimus consequuntur in velit.</p>
                        <div className="buttons-container">
                            <button className="button-arounder"><a href="/Checkout">Checkout</a></button>
                        </div>
                    </div>
                </div>

                <div className="Progressbar">
                    <h3>Progress</h3>
                    <div className="progress-bar"></div>
                </div>

                <div className="boxtex">
                    <div className="boxtext-con">
                        <h2>Product Name</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, deserunt culpa ad distinctio enim vitae et cupiditate laborum totam magnam nam saepe nemo dolorum esse neque possimus consequuntur in velit.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="boxtex-2">
                    <div className="boxtext-con">
                        <h1>Checkboxes</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam dolorum ipsum, dolores incidunt dolore, excepturi a eaque libero aliquid omnis nihil assumenda minus? Possimus est nihil laudantium sint! Deleniti!</p>
                    </div>
        </div>

        <div className="boxtex-2">
                    <div className="boxtext-con">
                        <h1>Feature</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, deserunt culpa ad distinctio enim vitae et cupiditate laborum totam magnam nam saepe nemo dolorum esse neque possimus consequuntur in velit.</p>
                    </div>
        </div>
    </body>
   
  )
}

export default ProductPage