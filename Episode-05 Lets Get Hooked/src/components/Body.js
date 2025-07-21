import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

// CONFIG DRIVEN UI
const Body = () => {

  // State Variables - Super Powerful, Variable
  // Hook is Normal JS function which is utility function given to us from React
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);
  const [searchInput, setSearchInput] = useState("");

   useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput.trim() === "") {
        setListOfRestaurants(listOfRestaurants);
        return;
      }

      const filteredList = listOfRestaurants.filter((res) => {
        const restaurantDetails = res?.card?.card?.info;
        return restaurantDetails?.name?.toLowerCase().includes(searchInput.toLowerCase());
      });

      setListOfRestaurants(filteredList);
    }, 500); 

    return () => clearTimeout(timer);
  }, [searchInput, listOfRestaurants]);

  // Normal JS Variabes
  // let listOfRestaurantsJS = [{
  //         id: "720365",
  //         name: "Wendy's Burgers",
  //         cloudinaryImageId:
  //           "FOOD_CATALOG/IMAGES/CMS/2025/4/14/2b559eb1-7c66-453e-8e74-686c8efc2fda_e4c9935b-b751-4549-9059-0dfa3492c8b3.jpeg",
  //         costForTwo: "20000",
  //         costForTwoMessage: "₹200 FOR TWO",
  //         cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
  //         avgRating: 4.4,
  //         avgRatingString: "4.4",
  //         totalRatingsString: "2.0K+",
  //         sla: {
  //           deliveryTime: 25
  //         },
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: 3.8,
  //             ratingCount: "2.7K+",
  //           }
  //         },
  //       }, 
  //       {
  //         id: "720366",
  //         name: "Dominos",
  //         cloudinaryImageId:
  //           "FOOD_CATALOG/IMAGES/CMS/2024/10/9/5572a994-f748-4907-8740-f19039525675_9b65bdf5-56f4-451a-a389-e03e210b1a35.jpg",
  //         costForTwo: "20000",
  //         costForTwoMessage: "₹200 FOR TWO",
  //         cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
  //         avgRating: 4.4,
  //         avgRatingString: "4.4",
  //         totalRatingsString: "2.0K+",
  //         sla: {
  //           deliveryTime: 25
  //         },
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: 4.5,
  //             ratingCount: "2.7K+",
  //           }
  //         },
  //       },
  //       {
  //         id: "720367",
  //         name: "MCDonalds",
  //         cloudinaryImageId:
  //          "b13811eeee71e578bc6ca89eca0ec87f",
  //         costForTwo: "20000",
  //         costForTwoMessage: "₹200 FOR TWO",
  //         cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
  //         avgRating: 4.4,
  //         avgRatingString: "4.4",
  //         totalRatingsString: "2.0K+",
  //         sla: {
  //           deliveryTime: 25
  //         },
  //         externalRatings: {
  //           aggregatedRating: {
  //             rating: 4.1,
  //             ratingCount: "2.7K+",
  //           }
  //         },
  //       }];

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        /> 
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={() => { 
          // Filter Logic Here
          const filteredList = listOfRestaurants.filter((res) => {
            const restaurantDetails = res?.card.card.info;
            return Number(restaurantDetails.externalRatings.aggregatedRating.rating) > 4 && restaurantDetails.avgRatingString !== "--";
          })
          setListOfRestaurants(filteredList)      
         }}>Top Rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {
          listOfRestaurants.map((restaurant) => { 
            const restaurantDetails = restaurant?.card.card.info;
            return (
              <RestaurantCard key={restaurantDetails.id} resData={restaurantDetails} />
            )
          })
        } 
      </div>
    </div>
  )
}

export default Body;