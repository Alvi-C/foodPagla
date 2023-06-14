
const SearchBar = ({ searchText, setSearchText, listOfRestaurants, setFilteredRestaurant }) => {

    return (
        <div className="container px-5 pb-10 mx-auto">
            <div className="md:flex justify-center">
                <div>
                    <input value={searchText} onChange={(e) => setSearchText(e.target.value)}
                        className="h-10 md:w-[400px] rounded-l-lg bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/10 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text" placeholder="Search Restaurants..." />
                    <button
                        className="flex-shrink-0 text-white bg-green-500 border rounded-r-lg py-2.5 px-8 focus:outline-none hover:bg-green-600 rounded text-sm mt-10 sm:mt-0" onClick={() => {
                            console.log(searchText);

                            const restaurantFilter = listOfRestaurants.filter(res => res.data.name.toLowerCase().includes(searchText.toLowerCase()));

                            setFilteredRestaurant(restaurantFilter);
                        }}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;