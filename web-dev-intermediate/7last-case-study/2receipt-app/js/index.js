/*
note: cartName & nameValue not in step 1, but in step 4
Step 1: btnSubmit, carts, submitHandler()
Step 2: getCarts()
Step 3: btnPrint, printHandler
Step 4: cartName & nameValue
*/

const btnSubmit = document.querySelector('#btnSubmit');

let carts = [];

function submitHandler() {
    let id;
    if(carts.length === 0) {
        id = 1;
    } else {
        id = carts[carts.length - 1].id + 1;
    }
    let itemName = document.querySelector('#itemName').value;
    let price = document.querySelector('#price').value;
    let nameValue = document.querySelector('#name').value;

    let tempObj = {
        id,
        itemName,
        price : +price
    }
    carts.push(tempObj);
    // console.log(carts);

    let cartName = document.querySelector('#cartName');
    cartName.innerHTML = nameValue;

    getCarts();

    document.querySelector('#itemName').value = '';
    document.querySelector('#price').value = '';

}

function getCarts() {
    let tBody = document.querySelector('#tBody');
    tBody.innerHTML = '';

    carts.forEach(cart => {
        tBody.innerHTML += `<tr>
            <td>${cart.id}</td>
            <td>${cart.itemName}</td>
            <td>${cart.price}</td>
        </tr>`
    })
}

btnSubmit.addEventListener('click', submitHandler);


const btnPrint = document.querySelector('#btnPrint');

function printHandler() {
    const formBox = document.querySelector('.form-box');
    formBox.style.display = 'none';
    btnPrint.style.display = 'none';

    window.print();
}

btnPrint.addEventListener('click', printHandler)