//Variables
let products = 
[
    {
        id: "id" + Math.random().toString(16).slice(2),
        name: 'Manzana',
        description: 'Lorem ipsum dolor sit.',
        amount: 1,
        price: 150,
        img: '',
    },
    {
        id: "id" + Math.random().toString(16).slice(2),
        name: 'Banana',
        description: 'Lorem ipsum dolor sit.',
        amount: 1,
        price: 300,
        img: '',
    },
    {
        id: "id" + Math.random().toString(16).slice(2),
        name: 'Ananá',
        description: 'Lorem ipsum dolor sit.',
        amount: 1,
        price: 600,
        img: '',
    },
    {
        id: "id" + Math.random().toString(16).slice(2),
        name: 'Pera',
        description: 'Lorem ipsum dolor sit.',
        amount: 1,
        price: 400,
        img: '',
    }
]

let productsCart = [];
let divProducts = document.querySelector('#products');
let bodyProducts = document.querySelector('#body-products');
const KEY = 'PRODUCT_CAR_KEY';

//Functions
const loadProducts = () =>
{
    let html = '';

    for(let product of products)
    {
        html += `
            <div class="col-12 col-md-4 mt-2 text-center">
                <div class="card">
                    <img src="#" class="card-img-top" alt="${ product.name }">
                    <div class="card-body">
                        <h5 class="card-title">${ product.name }</h5>
                        <p class="card-text">
                            ${ product.description }
                            <br>
                            ${ product.price }
                        </p>
                        <button onclick="addProduct('${product.id}')" class="btn btn-success">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    divProducts.innerHTML = html;
}

const loadTable = () =>
{
    let html = '';
    const proudctStorage = [getLocalStorage(KEY)];


    if(productsCart.length > 0)
    {
        for(let product of productsCart)
        {
            html += `
            <tr>
                <td>${ product.name }</td>
                <td>${ product.amount }</td>
                <td>${ product.price }</td>
                <td>
                    <button onclick=sumar('${ product.id }') class="btn btn-primary btn-sm">
                        <i class="bi bi-plus-lg"></i>
                    </button>
                    <button onclick=restar('${ product.id }') class="btn btn-danger btn-sm">
                        <i class="bi bi-dash"></i>
                    </button>
                </td>
            </tr>
            `;
            console.log(setLocalStorage( KEY, product ));
        }

        bodyProducts.innerHTML = html;
        
    }
}

const addProduct = (idProduct) =>
{
    let productInCartIndex = productsCart.findIndex(p => p.id == idProduct);

    if(productInCartIndex === -1)
    {
        let productFinded =  products.find(p => p.id == idProduct);

        if(productFinded !== null && productFinded != '')
        {
            productsCart.push(productFinded);
            loadTable();

        }
    }
    else
    {
        productsCart[productInCartIndex].amount ++;
        loadTable();
    }

}

const sumar = (idProduct) =>
{
    console.log(idProduct);
}

const restar = (idProduct) =>
{
    console.log(idProduct);
}

const setLocalStorage = (key, object) =>
{
    localStorage.setItem(key, JSON.stringify(object));
}

const getLocalStorage = (key) =>
{
    return localStorage.getItem(key);
}

const removeLocalStorage = (key) =>
{
    localStorage.removeItem(key);
}

//Calls
loadProducts();
loadTable();