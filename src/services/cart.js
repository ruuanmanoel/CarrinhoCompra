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
    
}

// -> remover um item
async function removeItem(userCart, index) {

}

export { 
    addItem,
    calculateTotal,
    deleteItem,
    removeItem
}