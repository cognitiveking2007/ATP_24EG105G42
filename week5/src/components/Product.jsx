function Product(props){
    const{ productObj } = props;
    //state
    //return product element
    return(
        <div className="flex flex-col border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
        <h1 className="text-2xl">{productObj.title}</h1>
        <div className="h-52 w-full flex items-center justify-center bg-gray-50 p-4">
        <img src={productObj.image} alt={productObj.title} className="max-h-full object-contain" />
      </div>
        <p className="font-bold">{productObj.price}</p>
        <p className="font-bold">{productObj.description}</p>
        <p className="font-bold">{productObj.category}</p>
        </div>
    )
}
export default Product