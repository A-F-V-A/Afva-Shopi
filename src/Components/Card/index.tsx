
import { Product } from "../../Model";
import { useShopi } from "../../hooks";



interface Props extends Omit<Product, 'rating' > {}




export const Card = ( { id, title,price,description,category,image }:Props ) =>{
    const { addProduct } = useShopi()

    const onAddProduct = () => addProduct(id)


    return (
        <div className="bg-white first-letter w-56 h-60 rounded">
            <figure className="relative mb-2 w-full h-4/8 ">
                <div 
                    onClick={onAddProduct}
                    className="text-xs cursor-pointer absolute top-0 right-0 flex justify-center items-center bg-green-500 w-4 h-4 m-1 rounded-full">
                    +
                </div>
                <img className="w-full h-full object-cover rounded-t" src={image} alt={category} />
            </figure>
            <div className="relative">
                <h3 className="text-xs font-bold">{title}</h3>
                <p className="text-xs">{description}</p>
                <p className="flex justify-end"><span>${price}</span></p>
            </div>
        </div>
    )
}