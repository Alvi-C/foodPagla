const TopRestaurant = ({ restaurants, setRestaurants }) => {
    const filterList = restaurants.filter((res) => (res.data.avgRating >= 4.3))

    return (
        <div className="container px-5 pb-10 mx-auto">
            <div className="flex justify-between items-center">
                <h2 className="font-bold text-xl">{restaurants.length} Restaurants</h2>
                <div >
                    <button
                        className=" text-white bg-green-500 border rounded-lg lg:py-2.5 lg:px-8 md:py-2.5 md:px-3 sm:text-xs focus:outline-none hover:bg-green-600 text-sm sm:mt-0" onClick={() => setRestaurants(filterList)}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopRestaurant;

