import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import InfiniteScrollComponent from "./InfiniteScrollComponent";

// CONFIG DRIVEN UI
const Body = () => {

  // State Variables - Super Powerful, Variable
  // Hook is Normal JS function which is utility function given to us from React
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestuarant] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.5401865&lng=73.7976819&str=Pune&trackingId=1b269d6b-b301-53f4-16c9-6b4e92de93e0&submitAction=ENTER&queryUniqueId=c9436ad4-e043-c6e6-6ac9-39f75dd3110f")
    const json = await data.json();

    // Optional Chaining
    setListOfRestaurants(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
    setFilteredRestuarant(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards);
  }

  useEffect(() => {
    fetchData();
  }, []);

  // // Conditional Rendering
  // if(listOfRestaurants.length === 0) {
  //   return <Shimmer />
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => { setSearchInput(e.target.value) }}
          />
          <button
            onClick={() => {
              // Filter the restaurant cards and update the UI
              // search Text
              const filteredRestaurant = listOfRestaurants.filter((restaurant) => {
                return restaurant?.card?.card?.info?.name.toLowerCase().includes(searchInput.toLowerCase())
              })
              setFilteredRestuarant(filteredRestaurant);
            }}
            className="search-btn"
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic Here
            const filteredList = listOfRestaurants.filter((res) => {
              const restaurantDetails = res?.card.card.info;
              return (
                Number(
                  restaurantDetails.externalRatings.aggregatedRating.rating
                ) > 4 && restaurantDetails.avgRatingString !== "--"
              );
            });
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {filteredRestaurant.map((restaurant) => {
          const restaurantDetails = restaurant?.card.card.info;
          return (
            <RestaurantCard
              key={restaurantDetails.id}
              resData={restaurantDetails}
            />
          );
        })}
      </div>
      <InfiniteScrollComponent />
    </div>
  );
}

export default Body;