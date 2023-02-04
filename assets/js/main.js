// // listado de productos 
// let products = 
// [
//     {
//         id: "id" + Math.random().toString(16).slice(2),
//         name: 'Manzana',
//         description: 'Lorem ipsum dolor sit.',
//         amount: 1,
//         price: 150,
//         img: '',
//     },
//     {
//         id: "id" + Math.random().toString(16).slice(2),
//         name: 'Banana',
//         description: 'Lorem ipsum dolor sit.',
//         amount: 1,
//         price: 300,
//         img: '',
//     },
//     {
//         id: "id" + Math.random().toString(16).slice(2),
//         name: 'Ananá',
//         description: 'Lorem ipsum dolor sit.',
//         amount: 1,
//         price: 600,
//         img: '',
//     },
//     {
//         id: "id" + Math.random().toString(16).slice(2),
//         name: 'Pera',
//         description: 'Lorem ipsum dolor sit.',
//         amount: 1,
//         price: 400,
//         img: '',
//     }   
// ]

// // variables carrito 

// const KEY = 'PRODUCT_CART_KEY';
// let   productsCart    = [],
//       productsStorage = [];

// // llamados html
// const divProducts  = document.querySelector('#products'),
//       bodyProducts = document.querySelector('#body-products');

     
// //Functions

// // Carga los productos al html
// const loadProducts = () =>
// {
//     let html = '';

//     for(let product of products)
//     {
//         html += `
//             <div class="col-12 col-md-4 mt-2 text-center">
//                 <div class="card">
//                     <img src="#" class="card-img-top" alt="${ product.name }">
//                     <div class="card-body">
//                         <h5 class="card-title">${ product.name }</h5>
//                         <p class="card-text">
//                             ${ product.description }
//                             <br>
//                             ${ product.price }
//                         </p>
//                         <button onclick="addProduct('${product.id}')" class="btn btn-success">
//                             Agregar al carrito
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         `;
//     }

//     divProducts.innerHTML = html;
// }

// // Carga los productos comprados a la tabla
// const loadTable = () =>
// {
//     let getProductStorage = getLocalStorage( KEY );
//     let html = '';
//     let GPS = getLocalStorage( PRODUCT_STORAGE_ARR_KEY );
//     if(productsCart.length > 0)
//     {
//         for(let product of productsCart)
//         {
//             html += `
//             <tr>
//                 <td>${ product.name }</td>
//                 <td>${ product.amount }</td>
//                 <td>${ product.price }</td>
//                 <td>
//                     <button onclick=sumar('${ product.id }') class="btn btn-primary btn-sm">
//                         <i class="bi bi-plus-lg"></i>
//                     </button>
//                     <button onclick=restar('${ product.id }') class="btn btn-danger btn-sm">
//                         <i class="bi bi-dash"></i>
//                     </button>
//                 </td>
//             </tr>
//             `;
//             productsStorage.push( setLocalStorage(KEY, productsCart) );
//         }
        
//         bodyProducts.innerHTML = html;
        
//     }
// }

// // Agega los productos al productsCart 
// const addProduct = (idProduct) =>
// {
//     let productInCartIndex = productsCart.findIndex(p => p.id == idProduct);
//     let productFinded =  products.find(p => p.id == idProduct);

//     if(productInCartIndex === -1)
//     {

//         if(productFinded !== null && productFinded != '')
//         {
//             productsCart.push(productFinded);
//             loadTable();
//         }
//     }
//     else
//     {
//         productsCart[productInCartIndex].amount ++;
//         loadTable();
//     }

// }
// console.log('');
// const sumar = (idProduct) =>
// {
//     console.log(idProduct);
// }

// const restar = (idProduct) =>
// {
//     console.log(idProduct);
// }

// // Local storage

// const setLocalStorage = (key, object) =>
// {
//     localStorage.setItem(key, JSON.stringify(object));
// }

// const getLocalStorage = (key) =>
// {
//     return localStorage.getItem(key);
// }

// const removeLocalStorage = (key) =>
// {
//     localStorage.removeItem(key);
// }

// //Calls
// loadProducts();
// loadTable();

//  -------------------------------
//           LOCAL STORAGE
// --------------------------------
        // lo guarda en el local storage
        const setLocalStorage = ( key, object )  => {
            localStorage.setItem( key, JSON.stringify( object ) );
        };
    
        // salva en el local storage
        const getLocalStorage = ( key ) => {
            localStorage.getItem( key )
        };
    
        // saca del local storage
        const removeLocalStorage = ( key ) => {
            localStorage.removeItem( key )
        };


//  .-.-.-.-.-.-.-.-.-.-.-.-.-.-.-

// Variables HTML

    const shoppingCartBtn      = document.querySelector( '#shopping_cart_opn_btn' );
    const divContainerProducts = document.querySelector( '#div_contenedor_de_productos' );
    const productsAmountText   = document.querySelector( '#products_amount_text' );
    const divProducts          = document.querySelector( '#div_products' );
    const inputNumberValue     = document.querySelector( '.input-number-value' );

    // variables
        let productsCart = [];


    // listado de productos
    let products = [
        {
            id: 1,
            name: 'Frutilla',
            price: 600,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 2,
            name: 'Banana',
            price: 500,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 3,
            name: 'Maracuyá',
            price: 2400,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 4,
            name: 'Uva',
            price: 1223,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 5,
            name: 'Cereza',
            price: 400,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 6,
            name: 'Ciruela',
            price: 1400,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 7,
            name: 'Higo',
            price: 2400,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 8,
            name: 'Manzana',
            price: 1000,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 9,
            name: 'Melocotón',
            price: 1452,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 10,
            name: 'Nectarina',
            price: 122,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 11,
            name: 'Pera',
            price: 1400,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 12,
            name: 'Piña',
            price: 1900,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
        {
            id: 13,
            name: 'Sandía',
            price: 830,
            amount: 1,
            stock: 100,
            textoBtn: 'Agregar', 
        },
    ];
    let KEY_PRODUCT_STORAGE = 'KEY_PRODUCTS_STORAGE'
    // funciones

    // Carga los productos al HTML
    const loadProducts = () => {
        let innerProducts = ''

        for ( let product of products )
        {
            innerProducts += `
            <div class="card">
                <h3 class="card-title text-center mt-2">${ product.name }</h3>
                <div class="card-body">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <p class="price-text" >$${ product.price}</p>
                    <div class="actions-btns-container">
                        <button class="btn btn-success" onclick="addProduct(${ product.id })" ><i class="bi bi-cart2"></i> ${ product.textoBtn }</button>
                    </div>
                </div>
            </div>    
            `
        };
        divProducts.innerHTML = innerProducts
    };
    // Texto de la cantidad de productos en carrito
    const cartProductsTextAmount = () => {
        
        productsAmountText.textContent = productsCart.length

        if ( document.querySelector( '.bi-cart4' ))
        {
            const cart4 = document.querySelector( '.bi-cart4' );

            cart4.classList.remove( 'bi' );
            cart4.classList.remove( 'bi-cart4' );
            cart4.classList.add( 'bi-cart-fill' )
        };
    }
    // agrega el producto a productsCart
    const addProduct = (idProduct) => {
        let findProduct = products.find( p => p.id == idProduct );
        let findIndexProduct = productsCart.findIndex( p => p.id == findProduct.id );
        

        if ( findIndexProduct === -1 ) 
        {
            productsCart.push( findProduct )
            findProduct.textoBtn = 'Agregado'
            loadProducts()
        }
        
        loadProductsToCart();
        cartProductsTextAmount();
    };
    

    // carga los productos al carrito
    const loadProductsToCart = () => {
        let innerProductsCart = '';
        if ( productsCart.length > 0 )
        {
            for ( let product of productsCart )
            {
                innerProductsCart += `
                <div class="card">
                    <h3 class="card-title text-center mt-2">${ product.name }</h3>
                    <div class="card-body">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                        <div class="cantidad-input-number-container" >
                            <p>Cantidad</p>
                            <input type="number" value="${ product.amount }" class="input-number-value text-center" readonly >
                        </div>
                        <p class="price-text" >$${ product.price * product.amount }</p>
                        <div class="actions-btns-container">
                            <button class="btn btn-success" onclick="btnSuma(${ product.id })" >+</button>
                            <button class="btn btn-danger " onclick="btnResta(${ product.id })" >-</button>
                        </div>
                    </div>
                </div>   
            `
            };
        };
        divContainerProducts.innerHTML = innerProductsCart
    }; 

    const opnProductsCartFrame = () => {
        if ( productsCart.length > 0 )
        {
            divContainerProducts.classList.toggle( 'show' )
        }
        else 
        {
            Swal.fire('¡No hay productos en su carrito!')
        };
    };

    // Suma el amount del producto haciendo que tenga mas produtos
    const btnSuma = ( idProduct ) => {
        let findProduct = products.find( p => p.id == idProduct );
        let findIndexProduct = productsCart.findIndex( p => p.id == findProduct.id );
        if ( findIndexProduct !== -1 )
        {
            productsCart[ findIndexProduct ].amount++
         
        };

        if ( productsCart[findIndexProduct].amount >= products[ findIndexProduct ].stock )
        {
            productsCart[findIndexProduct].amount = products[findIndexProduct].stock
        }
        loadProductsToCart();
    };

    // saca y resta el amount de los productos hasta sacarlos del productsCart
    const btnResta = ( idProduct ) => {
        let findProduct = products.find( p => p.id == idProduct );
        let findIndexProduct = productsCart.findIndex( p => p.id == findProduct.id );

        if ( productsCart[ findIndexProduct ].amount > 1 )
        {
            productsCart[ findIndexProduct ].amount--
        }
        else if ( productsCart[ findIndexProduct ].amount == 1 ) 
        {
            productsCart.splice( findIndexProduct, 1 );
        }

        if ( productsCart.includes( findProduct ) )
        {
            findProduct.textoBtn = 'Agregado';
            console.log( productsCart );
        }
        else 
        {
            findProduct.textoBtn = 'Agregar';
            console.log( productsCart );
        }


        loadProductsToCart();
        cartProductsTextAmount();
        loadProducts();
    };

    // listeners
    shoppingCartBtn.addEventListener( 'click', opnProductsCartFrame );




    // calls
    loadProducts()





































