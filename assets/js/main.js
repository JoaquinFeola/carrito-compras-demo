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


const myModule = (() => {
    // Variables HTML

    const shoppingCartBtn      = document.querySelector( '#shopping_cart_opn_btn' );
    const divContainerProducts = document.querySelector( '#div_contenedor_de_productos' );
    const productsAmountText   = document.querySelector( '#products_amount_text' );
    const divProducts          = document.querySelector( '#div_products' );
          
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
        },
        {
            id: 2,
            name: 'Banana',
            price: 500,
            amount: 1,
            stock: 100, 
        },
        {
            id: 3,
            name: 'Maracuyá',
            price: 2400,
            amount: 1,
            stock: 100, 
        },
        {
            id: 4,
            name: 'Uva',
            price: 1400,
            amount: 1,
            stock: 100, 
        },
    ];

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
                    <p class="price-text" >$${ product.price }</p>
                    <div class="actions-btns-container">
                        <button class="btn btn-success" data-id="${product.id}" >+</button>
                        <button class="btn btn-danger" >-</button>
                    </div>
                </div>
            </div>    
            `
        }

        divProducts.innerHTML += innerProducts
    };


    const opnProductsCartFrame = () => {
        
    };

    // listeners
    document.addEventListener( 'click', ( e ) => {
        
        if ( e.target.dataset.id )
        {
            let findProduct = products.find( p => p.id == e.target.dataset.id );
            console.log( findProduct );
            let findIndexProduct = productsCart.findIndex( p => p.id == findProduct.id );

            if ( findIndexProduct == -1  )
            {
                productsCart.push( findProduct );
                console.log( productsCart );
            }
            else {
                productsCart[findIndexProduct].amount ++;
            }

        }
    } );
    




    // calls
    loadProducts()
})();




































