// -> adicionar itens
async function addItem(userCart, item){
    userCart.push(item)
}

// -> calcular total
async function calculateTotal(userCart) {
    console.log(userCart.reduce((total, item) => total + item.subtotal(), 0));
}

// -> deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name === name);
    if(index !== -1) {
        userCart.splice(index, 1)
    } 
}

// -> remover um item pelo index
async function removeItemByIndex(userCart, index) {
    const deleteIndex = index - 1; 
    if(index >= 0 && index < userCart.length) {
        userCart.splice(deleteIndex, 1)
    }
}

async function removeItem(userCart, index) {
    const indexFound = userCart.findIndex((p) => p.name === item.name)
    if(indexFound === -1) {
        console.log("item não encontrado")
        return;
    }

    if(userCart[indexFound].quantity > 1) {
        userCart[indexFound] -= 1;
        return
    }

    if(userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
        return;
    }
}

async function displayCart(userCart) {
    console.log("Shopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1 }. ${item.name} - R$ ${item.price} | ${item.quantity} | Subtotal: ${item.subtotal()}`)
    });
}

export { 
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}