const product_set = (product) => {
    console.log('product_set action called');
    return{
        type:'PRODUCT_SET',
        payload:product
    }
}

export default product_set