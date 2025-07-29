import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Loader from "./Loader";

const InfiniteScrollComponent = () => {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        setLoading(true);
        
        try {
            const response = await fetch(`https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.5401865&lng=73.7976819&str=Pune&trackingId=1b269d6b-b301-53f4-16c9-6b4e92de93e0&submitAction=ENTER&queryUniqueId=c9436ad4-e043-c6e6-6ac9-39f75dd3110f?page=${page}`);
            const json = await response.json();
            const restaurant = json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards;
        
            setItems(prev => [...prev, ...restaurant]);
            setPage(prev => prev + 1);

        } catch (error) {
            console.log("Error Fetching Data:", error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
       const handleScroll = () => {
        const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

        if(scrolledToBottom && !loading) {
            fetchData();
        }
       }

       window.addEventListener("scroll", handleScroll);

       return () => {
        window.removeEventListener("scroll", handleScroll);
       }
    }, [loading])

    return (
        <>
        <div className="restaurant-container">
            {items.map((restaurant, index) => {
                const restaurantDetails = restaurant?.card?.card?.info;
                return (
                    <RestaurantCard
                    key={index}
                    resData={restaurantDetails}
                    />
                );
            })}
        </div>
        {loading && <Loader />}
        </>
    )
};

export default InfiniteScrollComponent;
