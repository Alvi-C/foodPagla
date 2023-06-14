
import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import ShimmerUi from "./ShimmerUi";
import { RES_URL } from "../utils/constants";
import { useEffect, useState } from 'react';
import TopRestaurant from "./TopRestaurant";


const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_URL)
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    }

    return listOfRestaurants?.length === 0 ? (
        <ShimmerUi />
    ) : (
        <div className="section-container">
            <div className="section-flex">

                <SearchBar searchText={searchText} setSearchText={setSearchText} listOfRestaurants={listOfRestaurants} setFilteredRestaurant={setFilteredRestaurant} />

                <TopRestaurant restaurants={filteredRestaurant} setRestaurants={setFilteredRestaurant} />


                {
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard resData={restaurant} key={restaurant.data.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;