import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_API, CDN_URL } from "../utils/constants";
import MenuCard from "./MenuCard";
const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {

        const data = await fetch(MENU_API + resId)
        const json = await data.json();
        setResInfo(json.data)
    }

    if (resInfo === null) return <ShimmerUi />;


    const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card.itemCards;
    console.log(itemCards);
    return (
        <div className="section-container">
            <div className="flex flex-col items-center">
                <h1 className="mb-10 font-tackyShoes text-7xl">{name}</h1>
                <h2 className="font-medium">Cuisines: <span className="text-barbiePink">{cuisines.join(", ")}</span></h2>
                <h3 className="font-medium">Cost for two: <span className="text-barbiePink">{costForTwoMessage}</span></h3>
                <h2 className="mt-10 mb-5 font-bold text-2xl underline decoration-wavy decoration-cyan-400">Pick your favorite food</h2>
            </div>

            {
                itemCards.map((item) => (
                    <MenuCard item={item} key={item.card.info.id} />

                ))
            }

        </div>
    )
}


export default RestaurantMenu;