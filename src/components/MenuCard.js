import { CDN_URL, defaultImage } from "../utils/constants";
import { useState } from "react";

const MenuCard = ({ item }) => {
    console.log(item.card.info);
    const { imageId, category, itemAttribute, name, description, price, defaultPrice } = item?.card?.info

    const imageUrl = `${CDN_URL}${imageId}`;
    const noDescription = "no description is available right now. It will be updated soon";


    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => {
        setQuantity(quantity + 1)
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    };

    return (
        <div className="my-7">
            <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-sm p-3 max-w-xs md:max-w-3xl mx-auto border border-slate-100 bg-white">
                <div className="w-full md:w-1/3 bg-white grid place-items-center">
                    <img src={imageId ? imageUrl : defaultImage} alt="" className="rounded-xl" />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                    <div className="flex justify-between item-center">
                        <p className="text-energyGreen font-normal hidden md:block">
                            {category}
                        </p>

                        <div className="bg-schoolBusYellow px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                            {itemAttribute?.vegClassifier}
                        </div>
                    </div>
                    <h3 className="font-extrabold text-gray-800 md:text-xl">
                        {name}
                    </h3>
                    <p className="md:text-sm text-gray-500">
                        {description ? description : noDescription}
                    </p>
                    <div className="flex justify-between pt-4">
                        <p className="md:text-2xl font-black text-barbiePink">
                            {price / 100 || defaultPrice / 100}
                            <span className="font-medium text-gray-600 text-sm m-1">
                                RS
                            </span>
                        </p>
                        <div class="flex items-center border-gray-100">
                            <span onClick={decreaseQuantity} class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-green-500 hover:text-blue-50"> - </span>
                            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={quantity} />
                            <span onClick={increaseQuantity} class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-green-500 hover:text-blue-50"> + </span>
                        </div>
                        <button className="card-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCard;