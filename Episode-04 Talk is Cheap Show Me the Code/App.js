import React from "react";
import ReactDOM from "react-dom/client";

/*
  Header
    Logo
    Nav Items
  Body
    Search
    RestaurantContainer
      RestaurantCard
        Img
        Name 
        Start Rating
        Cuisine
        delivery time
  Footer
    Copyright
    Links
    Address
    Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?size=2&industry=COMPANY+NAME" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


// const RestaurantCard = (props) => {
//   // Object destructuring
//   const { resData } = props;

//   return resData.map((res, index) => {

//     const {
//       cloudinaryImageId,
//       name,
//       cuisines,
//       externalRatings,
//       sla,
//       costForTwo,
//     } = res?.card.card.info;

//     return (
//       <div
//         key={index}
//         className="restaurant-card"
//         style={{ backgroundColor: "#f0f0f0" }}
//       >
//         <img
//           className="restaurant-logo"
//           src={
//             "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
//             cloudinaryImageId
//           }
//           alt="restaurant-logo"
//         />
//         <h3>{name}</h3>
//         <h4>{cuisines.join(", ")}</h4>
//         <h4>{externalRatings.aggregatedRating.rating}</h4>
//         <h4>{sla.minDeliveryTime + " Mins"}</h4>
//         <h4>₹{costForTwo / 100} FOR TWO </h4>
//       </div>
//     );
//   });
// };


// const Body = () => {
//   return (
//     <div className="body">
//       <div className="search-container">Search</div>
//       <div className="restaurant-container">
//         <RestaurantCard 
//           resData={resList}
//         />
//       </div>
//     </div>
//   )
// }



const RestaurantCard = (props) => {
  // Object destructuring
  const { resData } = props;
  const {
      cloudinaryImageId,
      name,
      cuisines,
      externalRatings,
      sla,
      costForTwo,
    } = resData;

    return (
      <div
        className="restaurant-card"
        style={{ backgroundColor: "#f0f0f0" }}
      >
        <img
          className="restaurant-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
            cloudinaryImageId
          }
          alt="restaurant-logo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{externalRatings.aggregatedRating.rating}</h4>
        <h4>{sla.minDeliveryTime + " Mins"}</h4>
        <h4>₹{costForTwo / 100} FOR TWO </h4>
      </div>
    )
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "720365",
          name: "Wendy's Burgers",
          city: "6",
          slugs: {
            restaurant: "wendys-burgers-near-jaihind-hospital-bavdhan",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/14/2b559eb1-7c66-453e-8e74-686c8efc2fda_e4c9935b-b751-4549-9059-0dfa3492c8b3.jpeg",
          address:
            "Navkar Avenue, Shop No 19 & 20, A2 Building,Near DSK Ranwara, Bavdhan, Pune",
          locality: "Near Jaihind Hospital",
          areaName: "Bavdhan",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "2.0K+",
          promoted: true,
          adTrackingId:
            "cid=30906667~p=0~adgrpid=30906667#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=720365~plpr=SEARCH#RESTAURANT~st=burger~eid=66fb6300-9cf4-4966-8614-7de9400e63a8~srvts=1752556079888",
          sla: {
            deliveryTime: 25,
            minDeliveryTime: 20,
            maxDeliveryTime: 25,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "20-25 MINS",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "30906667",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger","adTrackingId":"cid=30906667~p=0~adgrpid=30906667#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=720365~plpr=SEARCH#RESTAURANT~st=burger~eid=66fb6300-9cf4-4966-8614-7de9400e63a8~srvts=1752556079888"}',
          objectValue: "720365",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "720365",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "14015",
          name: "Burger King",
          city: "6",
          slugs: {
            restaurant: "burger-king-aundh-aundh",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/19/d4387d28-73ab-45b7-b424-61588863d158_9477217d-7c7a-4834-919a-b9ae7d7cf950.jpg",
          address:
            "Unit No Sf 03, 2Nd Floor , Westend Mall, Sanghavi Kesari Marg , Near Parihar Chowk, Aundh Pune 411007",
          locality: "Aundh",
          areaName: "Aundh",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Burgers", "American"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "38K+",
          sla: {
            deliveryTime: 36,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 4.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "35-40 MINS",
            lastMileTravelString: "4.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹100 OFF",
            subHeader: "ABOVE ₹199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "2.7K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "14015",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "14015",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "935435",
          name: "Burger Singh(Big Punjabi Burgers)",
          city: "6",
          slugs: {
            restaurant: "burger-singh-(big-punjabi-burgers)-baner-baner",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/9/5572a994-f748-4907-8740-f19039525675_9b65bdf5-56f4-451a-a389-e03e210b1a35.jpg",
          address:
            "Shop No : 0 , Floor :  , Shop No.05, Ground Floor, Survey No.173/4, Ad , ",
          locality: "Baner",
          areaName: "Baner",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Burgers"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "1.0K+",
          promoted: true,
          adTrackingId:
            "cid=31061247~p=1~adgrpid=31061247#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=935435~plpr=SEARCH#RESTAURANT~st=burger~eid=9f2859d7-317f-4839-a7a5-373d8251275f~srvts=1752556079888",
          sla: {
            deliveryTime: 35,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 4.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "30-35 MINS",
            lastMileTravelString: "4.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹47",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "31061247",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger","adTrackingId":"cid=31061247~p=1~adgrpid=31061247#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=935435~plpr=SEARCH#RESTAURANT~st=burger~eid=9f2859d7-317f-4839-a7a5-373d8251275f~srvts=1752556079888"}',
          objectValue: "935435",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "935435",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "23704",
          name: "McDonald's",
          city: "6",
          slugs: {
            restaurant: "mc-donalds-aundh-aundh",
            city: "pune",
          },
          cloudinaryImageId: "b13811eeee71e578bc6ca89eca0ec87f",
          address:
            "Shop # 8-14, Stellar Enclave, D.P. Road, Aundh, Pune- 411007",
          locality: "Aundh",
          areaName: "Aundh",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "34K+",
          sla: {
            deliveryTime: 28,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 4.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "25-30 MINS",
            lastMileTravelString: "4.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Burger.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹119",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "7.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "23704",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "23704",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "2053",
          name: "RushHrs",
          city: "6",
          slugs: {
            restaurant: "rushhrs-baner",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/2/6bad8208-5129-4b8a-93f8-ba389fcce391_9ccde8fb-dead-47ae-9b50-d79eb319c58a.png",
          address:
            "Shop No. 3-4, Kalamkar Paradise, Survey No. : 78/3/4/7, Baner Road, Baner, Pune, Aundh, Pune",
          locality: "Baner",
          areaName: "Baner",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Burgers", "American", "Salads", "Fast Food", "Desserts"],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "26K+",
          promoted: true,
          adTrackingId:
            "cid=31083306~p=2~adgrpid=31083306#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=2053~plpr=SEARCH#RESTAURANT~st=burger~eid=39d40e4a-2273-4344-85e9-98c14c591628~srvts=1752556079888",
          sla: {
            deliveryTime: 34,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 5.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "30-35 MINS",
            lastMileTravelString: "5.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹89",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.9",
              ratingCount: "345",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "31083306",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger","adTrackingId":"cid=31083306~p=2~adgrpid=31083306#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=2053~plpr=SEARCH#RESTAURANT~st=burger~eid=39d40e4a-2273-4344-85e9-98c14c591628~srvts=1752556079888"}',
          objectValue: "2053",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "2053",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "948388",
          name: "Krazy Kebab Co.-Fried Chicken, Burgers & Meals",
          city: "6",
          slugs: {
            restaurant: "krazy-kebab-co-regent-plaza-baner",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/6/7bc9f621-8cbe-4e77-bc82-82b4932b631f_4302522b-b056-45aa-b8d1-9b8e8f22faff.jpg",
          address:
            "Unit No.105, Regent Plaza, SR.NO.5/1A/1, Baner, Pashan-Baner Link Road, Pune 411007, Aundh, Pune.",
          locality: "Regent Plaza",
          areaName: "Baner",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "North Indian",
            "Kebabs",
            "Rolls & Wraps",
            "Fast Food",
            "Grill",
          ],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "321",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 2.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "30-35 MINS",
            lastMileTravelString: "2.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "948388",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "948388",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "18801",
          name: "Faasos - Wraps, Rolls & Shawarma",
          city: "6",
          slugs: {
            restaurant: "fassos-waman-ganesh-complex-bavdhan",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/23/3911fa67-8679-46f1-965f-363d12d90891_ede50df8-c184-4c0e-bc6d-f9dc32684e0a.jpeg",
          address:
            "Navkar Avenue, Shop No 19 & 20, A2 Building,Near DSK Ranwara, Bavdhan, Pune",
          locality: "Near Jaihind Hospital",
          areaName: "Bavdhan",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: [
            "Kebabs",
            "Fast Food",
            "Snacks",
            "American",
            "Healthy Food",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "14K+",
          promoted: true,
          adTrackingId:
            "cid=30906696~p=4~adgrpid=30906696#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=18801~plpr=SEARCH#RESTAURANT~st=burger~eid=dc611a90-5110-49d8-b359-a00c8b9b7b03~srvts=1752556079888",
          sla: {
            deliveryTime: 26,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "25-30 MINS",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Rolls.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹89",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "3 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "30906696",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger","adTrackingId":"cid=30906696~p=4~adgrpid=30906696#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=18801~plpr=SEARCH#RESTAURANT~st=burger~eid=dc611a90-5110-49d8-b359-a00c8b9b7b03~srvts=1752556079888"}',
          objectValue: "18801",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "18801",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "484596",
          name: "KFC",
          city: "6",
          slugs: {
            restaurant: "kfc-bavdhan-bavdhan",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/13/d6b9be59-10a4-420d-9ff6-44f91b87c7c0_4f367b42-73b8-428c-a801-8f0cf51021b3.jpg",
          address:
            "SHOP NO. A-101, UPPER GROUND FLOOR, DHARAMSHI MILESTONE, CHANDNI CHOWK,BAVDHAN, PUNE - 411021",
          locality: "Bhugaon",
          areaName: "Bavdhan",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Burgers", "Rolls & Wraps", "Fast Food"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "4.4K+",
          sla: {
            deliveryTime: 28,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "25-30 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "484596",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "484596",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "982978",
          name: "Burger and More",
          city: "6",
          slugs: {
            restaurant: "burger-and-more-prabhat-road-prabhat-road",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/1/7/56f332a1-6b13-47ff-abcf-b3df6eb97bc6_440f0e55-b251-40ff-9975-68f0ef044dfc.JPG",
          address:
            "Shop No : 01 , Floor :  , SB ROAD, NEAR DURGA MATA MAND IR,GOKHALE NAGA , ",
          locality: "Prabhat Road",
          areaName: "Prabhat Road",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Fast Food", "Burgers"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "4",
          promoted: true,
          adTrackingId:
            "cid=30959556~p=6~adgrpid=30959556#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=982978~plpr=SEARCH#RESTAURANT~st=burger~eid=eeb02ab9-5d67-4cdd-921b-fab5850ff94b~srvts=1752556079888",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "35-40 MINS",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "30959556",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger","adTrackingId":"cid=30959556~p=6~adgrpid=30959556#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=982978~plpr=SEARCH#RESTAURANT~st=burger~eid=eeb02ab9-5d67-4cdd-921b-fab5850ff94b~srvts=1752556079888"}',
          objectValue: "982978",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "982978",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "621695",
          name: "Fried Chicken Destination",
          city: "6",
          slugs: {
            restaurant: "fried-chicken-destination-baner-baner-3",
            city: "pune",
          },
          cloudinaryImageId: "1ec91cffc8e3af53987b0d9be5beb645",
          address:
            "SR NO 163/3 A BANERGAON PUNE , Aundh, Pune PMC, Maharashtra - 411045",
          locality: "Baner Gaon",
          areaName: "Baner",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Burgers", "Snacks", "Fast Food"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "568",
          sla: {
            deliveryTime: 35,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 4.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "35-40 MINS",
            lastMileTravelString: "4.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "621695",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "621695",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "636810",
          name: "The Flour Works",
          city: "6",
          slugs: {
            restaurant: "the-flour-works-baner-baner-2",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/24/c11080f8-5160-43a2-b262-f3bda0c076f6_7485c68f-a524-429b-8620-c6aacb4aceb1.jpg",
          address:
            "Deron Hills, Sr. No. 6/1/1, Baner Rd, opposite Bata Showroom, Baner, Pune",
          locality: "Deron Hills",
          areaName: "Baner",
          costForTwo: "100000",
          costForTwoMessage: "₹1000 FOR TWO",
          cuisines: ["European", "American", "Bakery"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "673",
          promoted: true,
          adTrackingId:
            "cid=31007156~p=7~adgrpid=31007156#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=636810~plpr=SEARCH#RESTAURANT~st=burger~eid=e063d0a2-13df-4376-9e2b-653d8a71b49c~srvts=1752556079888",
          sla: {
            deliveryTime: 41,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 3.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "40-45 MINS",
            lastMileTravelString: "3.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
          campaignId: "31007156",
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger","adTrackingId":"cid=31007156~p=7~adgrpid=31007156#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=636810~plpr=SEARCH#RESTAURANT~st=burger~eid=e063d0a2-13df-4376-9e2b-653d8a71b49c~srvts=1752556079888"}',
          objectValue: "636810",
          impressionObjectName: "impression-restaurant-ad",
          clickObjectName: "click-restaurant-ad",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "636810",
            query: "Burger",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1043643",
          name: "Crazy Cheesy",
          city: "6",
          slugs: {
            restaurant: "crazy-cheesy-sangvi-sangvi",
            city: "pune",
          },
          cloudinaryImageId: "adcfca799c8706c83b22a0925cb704a6",
          address:
            "GROUND FLOOR,MALHAAR NIVAS,SR.NO.74/2,SANGVI,PUNE-411061 ,PUNE PCMC ward No-102,Pune,Maharashtra-411061\t",
          locality: "SHIVAJI PARK ROAD",
          areaName: "Sangvi",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Italian", "Fast Food"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "97",
          sla: {
            deliveryTime: 49,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 6.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "6.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "40% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "1043643",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "1043643",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "874540",
          name: "Nothing But Chicken",
          city: "6",
          slugs: {
            restaurant: "nothing-but-chicken-baner-baner",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/5/16/5a19b325-2f57-4834-9a7d-f5243e11eb87_fb1f9f8a-7ed8-49dc-bd13-d4346750e8a8.jpg",
          address: "Shop No : 8 , Floor :  , Rivansh Icon , ",
          locality: "Pan Card Club Road",
          areaName: "Baner",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Kebabs", "Salads", "Fast Food"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "743",
          sla: {
            deliveryTime: 30,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "30-35 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "874540",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "874540",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1137057",
          name: "The Burger Cartel",
          city: "6",
          slugs: {
            restaurant: "the-burger-cartel-baner-baner",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/7/3/8f4d08e9-2138-43dc-ae75-83837345255a_90a16952-6323-4630-83ca-6ae57ce07882.jpg",
          address:
            "Shop No : Phase 2 , Floor : 6th , Puraniks aldea phase 2 , Puraniks Aldea Espanola Road Mahalunge, Pune, Maharashtra, India 411045",
          locality: "Baner",
          areaName: "Baner",
          costForTwo: "24900",
          costForTwoMessage: "₹249 FOR TWO",
          cuisines: ["Desserts", "Italian", "Indian", "Beverages", "Grill"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 5.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "40-45 MINS",
            lastMileTravelString: "5.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "UPTO ₹100",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "1137057",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "1137057",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "321044",
          name: "Cafe Coffee Hutt",
          city: "6",
          slugs: {
            restaurant: "cafe-coffee-hutt-baner-baner",
            city: "pune",
          },
          cloudinaryImageId: "a9icsysppgpylqgadmgh",
          address:
            "The Capital B Wing, Shop no 1, Baner Pashan Link Road, Near Star Bazar, Baner.",
          locality: "Capital Building",
          areaName: "Baner",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Pizzas"],
          avgRating: 4.3,
          feeDetails: {},
          avgRatingString: "4.3",
          totalRatingsString: "461",
          sla: {
            deliveryTime: 36,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 2.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "35-40 MINS",
            lastMileTravelString: "2.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "321044",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "321044",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "103897",
          name: "KNS",
          city: "6",
          slugs: {
            restaurant: "kns-pimple-gurav-sangvi",
            city: "pune",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2024/10/15/4a5bd2e5-5492-4c5c-b32f-a33e7ff83869_103897.jpg",
          address:
            "Shop 1, Kiran Building, Near Nakshatra sarees, Krishna Chowk, Navi Sangvi, Pimple Gurav, Pune",
          locality: "Pimpale Gurav",
          areaName: "Pimple Gurav",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Italian", "Pizzas", "Beverages"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "1.3K+",
          sla: {
            deliveryTime: 58,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "208",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "103897",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "103897",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "683553",
          name: "Burgerino",
          city: "6",
          slugs: {
            restaurant: "burgeriano-baner-baner",
            city: "pune",
          },
          cloudinaryImageId: "b2f5bae287cb0b420f2bbc2cdfff6a6d",
          address:
            "SHOP.NO.5,GROUND FLOOR,THE MINT,SR.NO.203,BANER ROAD,BANER,PUNE-411045, Aundh, Pune, Maharashtra-411045",
          locality: "Aundh",
          areaName: "Baner",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Burgers", "Pastas", "Desserts", "Beverages"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "506",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "30-35 MINS",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹150",
            discountTag: "SAVE BIG",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "683553",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "683553",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "948937",
          name: "BURGER POINT",
          city: "6",
          slugs: {
            restaurant: "burger-point-kothrud-kothrud-2",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/5/3/79e3d491-9ea1-42e6-a595-c34a2a59e23b_a54807b2-06bd-4936-959c-9cb7d5efabe1.jpg",
          address:
            "Shop No : 0 , Floor :  , Uttam Co-Op Society, S No 84/165, P M C Colon , ",
          locality: "Kothrud",
          areaName: "Kothrud",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Pizzas", "Fast Food", "Burgers"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "62",
          sla: {
            deliveryTime: 54,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "8.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "948937",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "948937",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "437929",
          name: "Mad Momos",
          city: "6",
          slugs: {
            restaurant: "mad-momos-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/4/b81027a4-9a1b-47b7-8ead-417307594da9_2ffc457e-2593-4d57-85d7-331aeb2ee523.png_compressed",
          address:
            "Shop No. 6 S.No. 83/3 H. No 1078 Near Indra Kids School, Pune City Pune, Maharashtra, 411015",
          locality: "Near Indra Kids School",
          areaName: "Baner",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Chinese", "Tibetan", "Nepalese", "Pizzas", "Beverages"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "4.1K+",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 6.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "6.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "437929",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "437929",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "799976",
          name: "Quick Crave",
          city: "6",
          slugs: {
            restaurant: "vital-bowls-baner-baner",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/23/7acb4493-fee5-4665-80bb-c3f597d5ec20_4c043066-b15f-4253-b924-f8473f58db8b.jpeg",
          address:
            "UNIT NO.101,FIRST FLOOR, ONE WEST,S NO 118 HISSA NO 4 PART, 119 HISSA 1/13,AND 119 HISSA 1/14,BANER , PUNE, Aundh, Pune, Maharashtra-411045",
          locality: "BANER",
          areaName: "Balewadi",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Pizzas", "Fast Food"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "89",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "30-35 MINS",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                description: "OnlyOnSwiggy",
              },
            ],
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹149",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "799976",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "799976",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "652959",
          name: "BK Cafe",
          city: "6",
          slugs: {
            restaurant: "bk-cafe-westend-aundh",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/3/ebe8ebb9-f89e-4147-b793-31483bcdfd49_722cd124-ada4-4ce6-af0a-a5e32e4395b4.jpg",
          address:
            "Unit no Sf 03, 2nd floor , Westend mall, sanghavi kesari marg , near parihar chowk, aundh pune 411007",
          locality: "Westend Mall",
          areaName: "Aundh",
          costForTwo: "35000",
          costForTwoMessage: "₹350 FOR TWO",
          cuisines: ["Beverages", "Cafe", "Snacks"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 4.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "30-35 MINS",
            lastMileTravelString: "4.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "652959",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "652959",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "792255",
          name: "Wendy's Flavor Fresh Burgers",
          city: "6",
          slugs: {
            restaurant:
              "wendys-flavor-fresh-burgers-near-jaihind-hospital-bavdhan",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/4/23/a0203b95-d0da-492a-ada9-489a34db7292_8cf0d827-7814-4e49-86c5-16a2df7cfbc9.jpeg",
          address:
            "Navkar Avenue, Shop No 19 & 20, A2 Building,Near DSK Ranwara, Bavdhan, Pune",
          locality: "Near Jaihind Hospital",
          areaName: "Bavdhan",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "34",
          sla: {
            deliveryTime: 25,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "25-30 MINS",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹75",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "792255",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "792255",
            query: "Burger",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "395186",
          name: "McDonald's Gourmet Burger Collection",
          city: "6",
          slugs: {
            restaurant: "mcdonalds-gourmet-burger-collection-aundh-aundh",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/22/b1184d5f-0785-4393-98a8-a712d280a045_027d0e63-e5d9-43f3-9c9c-0dc68dd1ece1.png",
          address:
            "Shop # 8-14, Stellar Enclave, D.P. Road, Aundh, Pune- 411007",
          locality: "D P Road",
          areaName: "Aundh",
          costForTwo: "60000",
          costForTwoMessage: "₹600 FOR TWO",
          cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "330",
          sla: {
            deliveryTime: 30,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 4.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "25-30 MINS",
            lastMileTravelString: "4.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "395186",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "395186",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "133429",
          name: "Venky's Xprs",
          city: "6",
          slugs: {
            restaurant: "venkys-xprs-bavdhan-amchi-colony-bavdhan",
            city: "pune",
          },
          cloudinaryImageId: "slavmrrcoobazuy75glj",
          address:
            "S.No.10 to 16 Plot no 30.Amchi Colony ,Near Isha Apt. ,Bavdhan Pune-411021",
          locality: "Amchi Colony",
          areaName: "Bavdhan",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["North Indian", "Grill"],
          avgRating: 4.7,
          feeDetails: {},
          avgRatingString: "4.7",
          totalRatingsString: "1.9K+",
          sla: {
            deliveryTime: 26,
            minDeliveryTime: 25,
            maxDeliveryTime: 30,
            lastMileTravel: 4.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "25-30 MINS",
            lastMileTravelString: "4.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "133429",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "133429",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "34995",
          name: "UFO Fries & Corn",
          city: "6",
          slugs: {
            restaurant: "ufo-fries-corn-fc-road-shivaji-nagar",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/1/24/12bf58b6-5e01-4428-b089-55c29aae0c72_1a467819-9cd4-4c76-9116-9452419c6193.jpg",
          address:
            "Shop - 3,Gokul Nagar Building, Dhyaneshwar Paduka Chowk, FC Road, Pune",
          locality: "F.C. Road",
          areaName: "Shivaji Nagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Fast Food"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "3.1K+",
          sla: {
            deliveryTime: 48,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 6.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "6.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "2.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "34995",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "34995",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "675527",
          name: "Burger King Factory",
          city: "6",
          slugs: {
            restaurant: "burger-king-factory-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/7/3/136965f6-2d7f-47c7-a62c-d6f27e83a102_8d945e66-e56b-4647-8793-cf1f1a31df4d.JPG",
          address: "Lane 6, Karve Road, Pune, Maharashtra - 411052",
          locality: "Karve Road",
          areaName: "Kothrud",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Burgers", "Pizzas", "Fast Food", "Snacks", "Beverages"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "94",
          sla: {
            deliveryTime: 64,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 10.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "60-65 MINS",
            lastMileTravelString: "10.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "675527",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "true",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "675527",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "788915",
          name: "Fresh Bun Burger",
          city: "6",
          slugs: {
            restaurant: "fresh-bun-burger-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/28/97392733-800a-4713-b89e-f381f75ca200_ad5d36ee-848e-49e3-b68c-43d4d9ac88e8.png",
          address:
            "Asmita Associates, Shop No 11, Omkarpuram, Azadnagar, Kothrud pune, kothrud 411038., Karve Road, Pune, Maharashtra - 411038",
          locality: "Azadnagar",
          areaName: "Kothrud",
          costForTwo: "29900",
          costForTwoMessage: "₹299 FOR TWO",
          cuisines: ["Burgers", "Fast Food", "Snacks"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "17",
          sla: {
            deliveryTime: 49,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 8.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "8.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "788915",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "788915",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "87929",
          name: "Garamtawa Bistro & Herbal Cafe",
          city: "6",
          slugs: {
            restaurant: "garamtawa-bistro-llp-jm-road-shivaji-nagar",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/9/3bddd889-1a8f-47d7-a911-74c84a19037b_bedfa3d0-effa-4128-965c-ef09bb90e2b9.png",
          address:
            "Garamtawa Bistro Llp, 104, Survey No. 33, Balewadi - Hinjawadi Rd, Balewadi, Pune, Maharashtra 411045",
          locality: "Balewadi",
          areaName: "Balewadi",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Continental", "Fast Food"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "313",
          sla: {
            deliveryTime: 37,
            minDeliveryTime: 35,
            maxDeliveryTime: 40,
            lastMileTravel: 6.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "35-40 MINS",
            lastMileTravelString: "6.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "25% OFF",
            subHeader: "UPTO ₹125",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.5",
              ratingCount: "449",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "87929",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "87929",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "480642",
          name: "The Burger Cafe",
          city: "6",
          slugs: {
            restaurant: "the-burger-cafe-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "miaf2lnagifsljeeoewh",
          address:
            "SHOP NO.4,VANARAJI SHOPPING COMPLEX,MIT COLLEGE ROAD,RAMBAUG COLONY,KOTHRUD,PUNE-411038",
          locality: "Rambaug Colony",
          areaName: "Kothrud",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["American", "Snacks", "Fast Food"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "7",
          sla: {
            deliveryTime: 51,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 9.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "9.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "15% OFF",
            subHeader: "UPTO ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "480642",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "480642",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "491107",
          name: "Burger Kings House",
          city: "6",
          slugs: {
            restaurant: "burger-kings-house-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "232c7e1b2b74dfc2851556a255e148a2",
          address:
            "ground floor, mathwad building,near mutheshwar chowk, shastri nagar, kothrud",
          locality: "Near Mutheshwar Chowk",
          areaName: "Kothrud",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Pizzas", "Burgers", "Fast Food", "Beverages", "Pastas"],
          avgRating: 2.6,
          feeDetails: {},
          avgRatingString: "2.6",
          totalRatingsString: "58",
          sla: {
            deliveryTime: 70,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "65-70 MINS",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹700",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_3",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "491107",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "491107",
            query: "Burger",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "204330",
          name: "Burger It Up",
          city: "6",
          slugs: {
            restaurant: "burger-it-up-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "vio2ylz71strycgb0sdt",
          address:
            "3rd Floor, s.no 1/3+4 , Above kothrud Post Office borse blog NR Karve Road above Denta care near karve statue khothrud , Karve Road, Pune, Maharashtra 411038",
          locality: "Karve Road",
          areaName: "Kothrud",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Burgers", "Beverages", "Desserts", "American", "Cafe"],
          avgRating: 3.9,
          feeDetails: {},
          avgRatingString: "3.9",
          totalRatingsString: "2.3K+",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 9.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "9.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "204330",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "204330",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "21130",
          name: "Cafe Durga",
          city: "6",
          slugs: {
            restaurant: "cafe-durga-balewadi-baner",
            city: "pune",
          },
          cloudinaryImageId: "sa1tqkqrny4kaj2l8qcz",
          address:
            "Shop No. 1, Ground Floor, Speciality Business Centre, Opposite Skp Campus, Near Axis Bank, Balewadi 45",
          locality: "Balewadi",
          areaName: "BALEWADI",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: [
            "Chinese",
            "South Indian",
            "Beverages",
            "Maharashtrian",
            "Punjabi",
          ],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "15K+",
          sla: {
            deliveryTime: 45,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "809",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "21130",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "21130",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "620060",
          name: "Burger World",
          city: "6",
          slugs: {
            restaurant: "burger-world-pimple-saudagar-pimple-saudagar",
            city: "pune",
          },
          cloudinaryImageId: "we777bprkxivbeg2lm1s",
          address:
            "near royal majestic , behind super chicken shivraj nagar rahatani pune 411017",
          locality: "shivraj nagar",
          areaName: "Pimple Saudagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Burgers", "Beverages", "Snacks"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "297",
          sla: {
            deliveryTime: 59,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 11,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "11.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "ABOVE ₹2500",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "620060",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "620060",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "813412",
          name: "Chai Sutta Bar",
          city: "6",
          slugs: {
            restaurant: "chai-sutta-bar-bavdhan-bavdhan",
            city: "pune",
          },
          cloudinaryImageId: "f96644d45aaa5f65304512361ae91176",
          address:
            "SHOP NO.G/03, S.NO.06, H.NO.10/1, BRAHMA VANTAGE BUILDING, BAVDHAN, Karve Nagar, Pune, Maharashtra - 411021",
          locality: "Bavdhan",
          areaName: "Bavdhan",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Beverages", "Pizzas", "Burgers"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "192",
          sla: {
            deliveryTime: 32,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "30-35 MINS",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹39",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "110",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "813412",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "813412",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "104773",
          name: "The Cheesy Bond",
          city: "6",
          slugs: {
            restaurant: "the-cheesy-bond-sangvi-sangvi",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/24/b2eb7ce5-b98d-4cd5-87d9-891df1e0c349_4b0d93ee-4343-480f-9230-41d4458a6ae4.JPG",
          address: "Krishna Chowk, New Sangvi, Pimple Gurav, Pune",
          locality: "Pimpale Gurav",
          areaName: "Pimple Gurav",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Beverages"],
          avgRating: 4.4,
          feeDetails: {},
          avgRatingString: "4.4",
          totalRatingsString: "1.8K+",
          sla: {
            deliveryTime: 55,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹139",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "883",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "104773",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "104773",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "213655",
          name: "Indiana Burgers",
          city: "6",
          slugs: {
            restaurant: "indiana-burgers-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/10/591c9373-5179-48e6-97a4-de60902f3117_35178c03-a100-43b1-a0ce-2e0fccf9e173_compressed",
          address:
            "3rd Floor, S. No 1/3+4 , Above kothrud Post Office borse blog NR Karve Road above Denta care near karve statue khothrud , Karve Road, Pune, Maharashtra 411038",
          locality: "Karve Road",
          areaName: "Kothrud",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: [
            "Burgers",
            "American",
            "Fast Food",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "1.1K+",
          sla: {
            deliveryTime: 52,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 9.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "9.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "options available",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "213655",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "213655",
            query: "Burger",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "320631",
          name: "Burger 1",
          city: "6",
          slugs: {
            restaurant: "burger-1-pcmc-pcmc",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/1/08424a2c-504d-429b-87d1-b5fcacac2a04_75fcb0a1-6b74-4000-b96e-91f8c4f29337.jpg",
          address:
            "S/No - 252, Shivraj Nagar, Rahatani, Pune PCMC ward no- 28, Pune PCMC, Maharashtra- 411017",
          locality: "Shivraj Nagar",
          areaName: "Pimple Saudagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["American", "Continental", "Fast Food", "Beverages"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "1.1K+",
          sla: {
            deliveryTime: 58,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 11,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "11.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "320631",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "320631",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "788600",
          name: "Seoul Fried Chicken",
          city: "6",
          slugs: {
            restaurant: "seoul-fried-chicken-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "ea50fa13bd06aa3abdd0176addd90d93",
          address:
            "3rd Floor, s.no 1/3+4 , Above kothrud Post Office borse blog NR Karve Road above Denta care near karve statue khothrud , Karve Road, Pune, Maharashtra-411038",
          locality: "Karve Road",
          areaName: "Kothrud",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "American",
            "Fast Food",
            "Snacks",
            "Korean",
            "Burgers",
            "Beverages",
          ],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "108",
          sla: {
            deliveryTime: 51,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 9.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "9.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                description: "OnlyOnSwiggy",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "788600",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "788600",
            query: "Burger",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "615383",
          name: "Poetry By Love & Cheesecake",
          city: "6",
          slugs: {
            restaurant: "poetry-by-love-&-cheesecake-baner-baner",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/3/13/09e88e7f-cf25-4255-8947-b4af7a22f571_178d72a5-136d-43d0-96ac-8f2ad37537cb.png_compressed",
          address:
            'Unit No.21,Building High Street,Survey No.20 and 21,Balewadi,Haaveli, Aundh, Pune, Maharashtra-411045"" "',
          locality: "Balewadi",
          areaName: "Balewadi",
          costForTwo: "80000",
          costForTwoMessage: "₹800 FOR TWO",
          cuisines: [
            "Cakes & Pastries",
            "Desserts",
            "sandwich",
            "Cafe",
            "Continental",
            "Bakery",
            "Coffee",
            "Beverages",
          ],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "1.5K+",
          sla: {
            deliveryTime: 48,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "6.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹1199",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "548",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "615383",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "615383",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "267278",
          name: "Pokket Cafe",
          city: "6",
          slugs: {
            restaurant: "pokket-cafe-kothrud-kothrud-2",
            city: "pune",
          },
          cloudinaryImageId: "sutq81jpbnlcl9onle7w",
          address:
            "ICICI BANK ATM, Anand Colony, Suvarn Colony, Hingne Budrukh, Karve Nagar, Pune, Maharashtra, India",
          locality: "Kothrud",
          areaName: "Karve Nagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Snacks"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "3",
          sla: {
            deliveryTime: 57,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 11.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "11.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "267278",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "267278",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "721031",
          name: "Burger 24/7 Hrs",
          city: "6",
          slugs: {
            restaurant: "burger-24/7-hrs-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "d3f9bf6537358538c1b1222dca0b4223",
          address:
            "Near Dr Dhekne Clinic, Karve Road, Pune, \\\\\\\\r\\\\\\\\nMaharashtra - 411052",
          locality: "Karve Road",
          areaName: "Kothrud",
          costForTwo: "19900",
          costForTwoMessage: "₹199 FOR TWO",
          cuisines: ["Pizzas"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "28",
          sla: {
            deliveryTime: 66,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 10.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "65-70 MINS",
            lastMileTravelString: "10.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "721031",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "721031",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "25833",
          name: "Fish N Rolls",
          city: "6",
          slugs: {
            restaurant: "fish-n-rolls-aundh-aundh",
            city: "pune",
          },
          cloudinaryImageId: "58b337d651a1cca7eec29077d6e913dd",
          address: "Shop 11, Raviraj Heritage, Bahupatil Road, Khadki, Pune",
          locality: "Khadki",
          areaName: "AMBEDKAR CHOWK,AUNDH",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: [
            "Rolls & Wraps",
            "Seafood",
            "Fast Food",
            "Beverages",
            "Continental",
          ],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "1.1K+",
          sla: {
            deliveryTime: 46,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.8",
              ratingCount: "341",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "25833",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "25833",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "377679",
          name: "Platfoorm 9 3/4",
          city: "6",
          slugs: {
            restaurant: "platfoorm-9-3/4-aundh-aundh",
            city: "pune",
          },
          cloudinaryImageId: "u1bmpwltcaohufdlregr",
          address:
            "Platfoorm 934 cafe S. No. 133/4B, Tuljabhavani Krupa Mayur Colony Kothrud  Pune.",
          locality: "Kothrud",
          areaName: "Aundh",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Pizzas", "Pastas", "Italian", "Snacks", "Beverages"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "14",
          sla: {
            deliveryTime: 54,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 9.6,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "9.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "211",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "377679",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "377679",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "471893",
          name: "Pizza & Burger House",
          city: "6",
          slugs: {
            restaurant: "pizza-&-burger-house-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "f0bc9860fa0eb4c0a3d0e13dc6b2f382",
          address:
            "sr. no. 164/111, ground floor, mathawad building, near mutheshwar chowk,shashtri nagar, kothrud, Karve Road, Pune, Maharashtra - 411038",
          locality: "Shashtri Nagar",
          areaName: "Kothrud",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Pizzas", "Burgers", "Fast Food", "Beverages", "Pastas"],
          avgRating: 3.5,
          feeDetails: {},
          avgRatingString: "3.5",
          totalRatingsString: "49",
          sla: {
            deliveryTime: 52,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹700",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "471893",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "471893",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "13954",
          name: "Ganesh Bhel",
          city: "6",
          slugs: {
            restaurant: "Ganesh Bhel-Karve nagar-Kothrud",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/28/a2450d8d-d2be-495e-83b6-4d1c391eaec5_243287f3-674c-4594-bcec-d43f98ab6f71.JPG",
          address:
            "14, Ganga Vishnu Heights, Near Bombay Jwellers Circle, Karve Nagar, Pune",
          areaName: "Karve Nagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Fast Food"],
          avgRating: 4.7,
          feeDetails: {},
          avgRatingString: "4.7",
          totalRatingsString: "7.8K+",
          sla: {
            deliveryTime: 53,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 9.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "9.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseMessage: "Closes soon",
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Snacks.png",
                description: "Delivery!",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "13954",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "13954",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "820125",
          name: "24/7 Hrs Pizza And Burger",
          city: "6",
          slugs: {
            restaurant: "24/7-hrs-pizza-and-burger-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/8/af68f20b-c6aa-4451-952a-34b13e50a1ab_7b7fbb4a-7785-4c32-adcd-4cf9ba462f2d.jpg",
          address:
            "Sr No. 8 Lane No. 6 Opp Ganpati Mandir ,  Karve Nagar, Pune, Maharashtra - 411052",
          locality: "Kothrud",
          areaName: "Kothrud",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Pizzas", "Burgers", "Snacks", "Italian"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "68",
          sla: {
            deliveryTime: 61,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 10.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "60-65 MINS",
            lastMileTravelString: "10.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹139",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "820125",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "820125",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "2195",
          name: "Cafe Classic",
          city: "6",
          slugs: {
            restaurant: "cafe-classic-pimple-saudagar",
            city: "pune",
          },
          cloudinaryImageId: "ppitwhzddhtcvse0b9yz",
          address:
            "S/No - 252, Shivraj Nagar, Rahatani, Pune PCMC ward no- 28, Pune PCMC, Maharashtra- 411017",
          locality: "Pimple Saudagar",
          areaName: "Pimple Saudagar",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Fast Food", "American", "Beverages", "Desserts"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "13K+",
          sla: {
            deliveryTime: 58,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 11,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "11.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "3.4",
              ratingCount: "5",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "2195",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "2195",
            query: "Burger",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "27926",
          name: "Hotel Durga",
          city: "6",
          slugs: {
            restaurant: "cafe-durga-kothrud-kothrud-2",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/d5d34f1e-cca4-42f6-9fed-ddfaabef9e9f_904f45a7-3aaf-457a-b159-2bc4300e17fd.JPG",
          address: "Malati Complex, Ideal Colony, Paud Road, Kothrud, Pune",
          locality: "Kothrud",
          areaName: "Kothrud",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Fast Food",
            "South Indian",
            "Street Food",
            "Snacks",
            "Maharashtrian",
            "Beverages",
          ],
          avgRating: 4.5,
          feeDetails: {},
          avgRatingString: "4.5",
          totalRatingsString: "32K+",
          sla: {
            deliveryTime: 50,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 9.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "9.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹39",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "8.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "27926",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "27926",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "668282",
          name: "Firangi Burgers",
          city: "6",
          slugs: {
            restaurant: "firangi-burgers-swargate-swargate",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/1/23/98d9952b-ac74-45ec-a126-cf02e15f25dc_0889fe46-77df-45b7-a121-d9c004353ed5.jpg",
          address: "Pune, Maharashtra, India",
          locality: "Budhwar peth",
          areaName: "Swargate",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Burgers", "Pizzas", "Fast Food", "Beverages"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 55,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 8.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "8.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "668282",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "668282",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "950293",
          name: "Burgers Mafia",
          city: "6",
          slugs: {
            restaurant: "burgers-mafia-hinjewadi-hinjewadi",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/6/5/9345b7c8-8120-467a-8a30-28b8c4c32801_4457fa8c-1a61-41ed-ace2-bf587a7cd036.jpg",
          address:
            "Shop No : SURVEY NO. 48/4 , Floor : 0 , HIRAI SITAI ROAD, PARKHE WASTI, Hinjewadi, Pu , ",
          locality: "Hinjewadi",
          areaName: "Hinjewadi",
          costForTwo: "50000",
          costForTwoMessage: "₹500 FOR TWO",
          cuisines: ["Fast Food", "Burgers", "Cafe"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 56,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 11.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "11.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "950293",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "950293",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "true",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "38255",
          name: "Cafe Deja Vu",
          city: "6",
          slugs: {
            restaurant: "cafe-deja-vu-sb-road-shivaji-nagar",
            city: "pune",
          },
          cloudinaryImageId: "cwpi0x26femu6ylgzgjs",
          address:
            "Plot 16, Shivaji Co-operative Housing Society, Near Akshay Nandan School, Bhageerath, Gokhalenagar, Senapati Bapat Road, Pune",
          locality: "Senapati Bapat Road",
          areaName: "Prabhat Road",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Continental", "Pizzas"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "305",
          sla: {
            deliveryTime: 33,
            minDeliveryTime: 30,
            maxDeliveryTime: 35,
            lastMileTravel: 5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "30-35 MINS",
            lastMileTravelString: "5.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "2.4K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "38255",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "38255",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "320633",
          name: "Greens and Breads",
          city: "6",
          slugs: {
            restaurant: "greens-and-breads-pcmc-pcmc",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/1/31/974e8d08-459e-4694-9c15-da04da8668d2_f505a14c-a9d0-438f-81f1-5874ffee1694.jpg",
          address:
            "S/No - 252, Shivraj Nagar, Rahatani, Pune PCMC ward no- 28, Pune PCMC, Maharashtra- 411017",
          locality: "Shivraj Nagar",
          areaName: "Pimple Saudagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: [
            "Healthy Food",
            "American",
            "Snacks",
            "Salads",
            "Continental",
            "Grill",
          ],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "4.9K+",
          sla: {
            deliveryTime: 50,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 11,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "11.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            textExtendedBadges: [
              {
                iconId: "guiltfree/GF_Logo_android_3x",
                shortDescription: "brand",
                fontColor: "#7E808C",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹79",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "320633",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "320633",
            query: "Burger",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1138296",
          name: "Burger Peshwai",
          city: "6",
          slugs: {
            restaurant: "burger-peshwai-sangvi-sangvi",
            city: "pune",
          },
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/4/27dabffe-964b-40c1-a68e-225d6bc7879c_1138296.jpg",
          address:
            "S NO 72/1K, SAMARTH NAGAR, OPP DHANASHREE HOSPITAL, NEW SANGVI, PUNE",
          locality: "Sangvi",
          areaName: "Sangvi",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["Continental", "Fast Food", "Burgers"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 6.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "6.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "1138296",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "1138296",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "438867",
          name: "Happy Eats",
          city: "6",
          slugs: {
            restaurant: "happy-eats-lavale-lavale",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/3/21/2998d13f-2dd4-456e-af6d-66f44ff9c7ec_d2fe56ae-ef21-4ad7-b91f-4eeb9778cfec.jpg",
          address:
            "PATIL NAGAR, SUSROAD, ONELLA NEST, SUS, MULSHI & VELLA, PUNE PMC & RURAL, MAHARASHTRA",
          locality: "Onella Nest",
          areaName: "Baner",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["American", "Snacks"],
          avgRating: 3.5,
          feeDetails: {},
          avgRatingString: "3.5",
          totalRatingsString: "9",
          sla: {
            deliveryTime: 44,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 6.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "40-45 MINS",
            lastMileTravelString: "6.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.9",
              ratingCount: "15",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "438867",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "438867",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "582142",
          name: "N V Foods Caffe Xprs",
          city: "6",
          slugs: {
            restaurant: "n-v-foods-caffe-xprs-bavdhan-bavdhan",
            city: "pune",
          },
          cloudinaryImageId: "talfssuqcbdgehys2oxr",
          address:
            "S No 8/13, Shop On 1St Floor, Down Town Mall 1St To 4Th Floor Erandwane, Karve Road, Pune, Maharashtra-411004",
          locality: "Down Town Mall",
          areaName: "Karve Road",
          costForTwo: "27000",
          costForTwoMessage: "₹270 FOR TWO",
          cuisines: ["Beverages", "Desserts", "Ice Cream"],
          avgRating: 2.4,
          feeDetails: {},
          avgRatingString: "2.4",
          totalRatingsString: "29",
          sla: {
            deliveryTime: 69,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 8.5,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "65-70 MINS",
            lastMileTravelString: "8.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹700",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_3",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "582142",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "582142",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "471789",
          name: "Crazy Cheezy Burger",
          city: "6",
          slugs: {
            restaurant: "crazy-cheezy-burger-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "eb652b90804e05665b6abc294a8e942a",
          address:
            "ground floor, behind parihar mobile shop,  left side of gopal niwas, gujrat colony,  kothrud, Karve Road, Pune PMC,  Maharashtra - 411038",
          locality: "Gujrat Colony",
          areaName: "Kothrud",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Pizzas", "Burgers", "Fast Food", "Beverages", "Pastas"],
          avgRating: 3.2,
          feeDetails: {},
          avgRatingString: "3.2",
          totalRatingsString: "99",
          sla: {
            deliveryTime: 56,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "8.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹700",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "471789",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "471789",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "247042",
          name: "The Burger Project",
          city: "6",
          slugs: {
            restaurant: "the-burger-project-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "4abb39808497ef0652961f6e8e086f62",
          address:
            "13, Suryoday Colony, Near Arwana Tower, Sargam Society Road, Karve Nagar, Pune",
          locality: "Karve Nagar",
          areaName: "Kothrud",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["American", "Beverages", "Desserts", "Snacks"],
          avgRating: 3.5,
          feeDetails: {},
          avgRatingString: "3.5",
          totalRatingsString: "1.0K+",
          sla: {
            deliveryTime: 65,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 12.3,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "60-65 MINS",
            lastMileTravelString: "12.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹299",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "247042",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "247042",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "222474",
          name: "Cafe Weekend",
          city: "6",
          slugs: {
            restaurant: "cafe-weekend-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/4/e7c1b62e-f60d-4d5a-8371-9956f9c7f33c_a711361a-37bc-4f08-8937-602885dadacd.JPG",
          address:
            "shop no 11,12 continental chambers joshi railway museum lane near pragati industrial  estate kothrud",
          locality: "Kai Pu Bha Bhave Marge",
          areaName: "Kothrud",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Indian"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "57",
          sla: {
            deliveryTime: 48,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 9.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "9.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "222474",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "222474",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "752780",
          name: "Hot N'Heavy Burger",
          city: "6",
          slugs: {
            restaurant: "hot-n'heavy-burger-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "87b4c7e8a5e1f1fb072fdd6c166ada97",
          address:
            "Harshal Park, C-1 Flat No. 6-7, Lane No. 1, near Karve nagar, behind Siddhivinayak College, Bhagyoday Colony, Suvarn Colony, Hingne Budrukh, Karve Nagar, Pune, Maharashtra 411052, India",
          locality: "Harshal Park",
          areaName: "Kothrud",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Burgers", "Snacks"],
          avgRating: 4.6,
          feeDetails: {},
          avgRatingString: "4.6",
          totalRatingsString: "12",
          sla: {
            deliveryTime: 57,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 11.1,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "11.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "752780",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "752780",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "true",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "482953",
          name: "Burger Katta",
          city: "6",
          slugs: {
            restaurant: "burger-katta-pimple-saudagar-pimple-saudagar-2",
            city: "pune",
          },
          cloudinaryImageId: "5f397e79a51dd32f2c2b811d858df4da",
          address:
            "S. No-252, Shivraj Nagar, Rahatani, Pune PCMC Ward No-28, Pune",
          locality: "Pimple Saudagar",
          areaName: "Pimple Saudagar",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Fast Food", "Snacks", "Beverages"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "72",
          sla: {
            deliveryTime: 58,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 11,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "11.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹49",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "482953",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            qrEnabled: "false",
            restaurant_id: "482953",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "34679",
          name: "Night Cafe Restaurant",
          city: "6",
          slugs: {
            restaurant: "night-cafe-restaurant-pimple-saudagar-pimple-saudagar",
            city: "pune",
          },
          cloudinaryImageId: "r4y4ifovxlnppizkg8t0",
          address:
            "S/No - 252, Shivraj Nagar, Rahatani, Pune PCMC ward no- 28, Pune PCMC, Maharashtra- 411017",
          locality: "Shivraj Nagar",
          areaName: "Pimple Saudagar",
          costForTwo: "25000",
          costForTwoMessage: "₹250 FOR TWO",
          cuisines: ["Fast Food", "American", "Beverages", "Desserts"],
          avgRating: 3.8,
          feeDetails: {},
          avgRatingString: "3.8",
          totalRatingsString: "7.2K+",
          sla: {
            deliveryTime: 67,
            minDeliveryTime: 65,
            maxDeliveryTime: 70,
            lastMileTravel: 11,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "65-70 MINS",
            lastMileTravelString: "11.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "₹165 OFF",
            subHeader: "ABOVE ₹449",
            discountTag: "FLAT DEAL",
            headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "34679",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "34679",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "964833",
          name: "Big B Burgers",
          city: "6",
          slugs: {
            restaurant: "big-b-burgers-wakad-wakad",
            city: "pune",
          },
          cloudinaryImageId: "i2912xkxu1qv2bsyerxb",
          address:
            "Shop No : 1 , Floor : 0 , ANANTA NAGAR, LAXMI CHOWK, HINJWADI , ",
          locality: "Wakad",
          areaName: "Wakad",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Burgers"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 47,
            minDeliveryTime: 45,
            maxDeliveryTime: 50,
            lastMileTravel: 8.9,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "45-50 MINS",
            lastMileTravelString: "8.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "964833",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "964833",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "73861",
          name: "Cafe Dreamland",
          city: "6",
          slugs: {
            restaurant: "cafe-dreamland-kothrud-kondhwa",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/22/3db384ed-9b48-4ddd-9d21-4b861da2de10_3648324b-16e2-4620-98c6-2de1cd04d982.JPG",
          address:
            "shop no 11,12 continental chambers joshi railway museum lane near pragati industrial  estate kothrud",
          locality: "Kothrud",
          areaName: "Kothrud",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Desserts"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "1.7K+",
          sla: {
            deliveryTime: 55,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 9.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "9.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {
            imageBadges: [
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹89",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "311",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "73861",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "73861",
            query: "Burger",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1018147",
          name: "Pizza And Burger House",
          city: "6",
          slugs: {
            restaurant: "pizza-and-burger-house-kondhwa-kondhwa",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/15/9f34dc5e-fe46-4657-8d4c-1beffd073509_4bf726f3-d737-4760-a0b9-1ca48a0ec270.jpg",
          address:
            "01 ground floor, near mutheshawar chowk, behand shri garden center mathawad building, shastri nagar kothrud, Karve Road, Pune, Maharashtra - 411058",
          locality: "mutheshawar Chowk",
          areaName: "Shastri Nagar",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Street Food", "Pizzas", "Fast Food", "Burgers"],
          feeDetails: {},
          avgRatingString: "--",
          sla: {
            deliveryTime: 53,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "8.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "30% OFF",
            subHeader: "UPTO ₹150",
            discountTag: "SAVE BIG",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "1018147",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "1018147",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "583294",
          name: "Delish Burger",
          city: "6",
          slugs: {
            restaurant: "delish-burger-sangvi-sangvi",
            city: "pune",
          },
          cloudinaryImageId: "9219ebcac912b4e73a6ba7257c517630",
          address:
            "S.NO. 56, KAWADE NAGAR, NEAR M K HOTEL, PIMPLE GURAV PUNE ,,PUNE PCMC ward No-4,Pune,Maharashtra-411061\t",
          locality: "KAWADE NAGAR, NEAR M K HOTEL",
          areaName: "Sangvi",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Burgers", "Snacks"],
          avgRating: 4,
          feeDetails: {},
          avgRatingString: "4.0",
          totalRatingsString: "20",
          sla: {
            deliveryTime: 44,
            minDeliveryTime: 40,
            maxDeliveryTime: 45,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "40-45 MINS",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "583294",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "583294",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "727603",
          name: "CHEF'S KITCHEN",
          city: "6",
          slugs: {
            restaurant: "chef's-kitchen-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "d716128de48f01bdc46123335aae3c49",
          address:
            "groundfloormathawadbuildingnearmutheshwalchowkshashtrinagarkothrudKarveRoadPuneMaharashtra411038",
          locality: "shtrinagar",
          areaName: "Kothrud",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Pizzas", "Burgers", "Fast Food", "Beverages", "Pastas"],
          avgRating: 2.8,
          feeDetails: {},
          avgRatingString: "2.8",
          totalRatingsString: "30",
          sla: {
            deliveryTime: 52,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "8.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹700",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_3",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "727603",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "727603",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "614154",
          name: "The Burgers King",
          city: "6",
          slugs: {
            restaurant: "chinese-cravers-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "097bc34fa9627e3bc442c9a254887970",
          address:
            "ground floor, mathawad building, shashtri  nagar, kothrud, Karve Road, Pune,  Maharashtra - 411038",
          locality: "Karve Road",
          areaName: "Kothrud",
          costForTwo: "15000",
          costForTwoMessage: "₹150 FOR TWO",
          cuisines: ["Pizzas", "Burgers", "Fast Food", "Beverages", "Pastas"],
          avgRating: 2.9,
          feeDetails: {},
          avgRatingString: "2.9",
          totalRatingsString: "13",
          sla: {
            deliveryTime: 56,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹700",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_3",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "614154",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "614154",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "499237",
          name: "Sam And Sam Burger",
          city: "6",
          slugs: {
            restaurant: "sam-and-sam-burger-swargate-swargate",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/1/23/0f20b08e-418a-4a0a-8ab1-ae1841a9d81b_aac27411-0136-439f-b19c-f6109762e886.jpg",
          address:
            "SHOP NO.5,DATTATRAY SADAN,SR NO.408,NARAYAN MUNJABACHA BOL,PUNE- 411030",
          locality: "Narayan Peth",
          areaName: "Shaniwar Peth",
          costForTwo: "20000",
          costForTwoMessage: "₹200 FOR TWO",
          cuisines: ["American", "Fast Food", "Pizzas"],
          avgRating: 3.2,
          feeDetails: {},
          avgRatingString: "3.2",
          totalRatingsString: "5",
          sla: {
            deliveryTime: 58,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 8.4,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "8.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "499237",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            restaurant_id: "499237",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "424457",
          name: "Cafe Caffeine",
          city: "6",
          slugs: {
            restaurant: "cafe-caffeine-sangvi-sangvi",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/2/6/6708070a-7307-4ad9-9621-4b77afa9e8e5_02008541-5a37-4348-a01e-2fecafbc9ebf.jpeg",
          address:
            "60 feet road, krishnraj colony, kai aruna tai  sakharam devkar nagar, pimple gurav  pimpri chinchwad pune - 411061, PUNE  PCMC ward No-29, Pune PCMC,  Maharashtra - 411061",
          locality: "Krishnaraj Colony",
          areaName: "Pimple Gurav",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Indian"],
          avgRating: 4.1,
          feeDetails: {},
          avgRatingString: "4.1",
          totalRatingsString: "5",
          sla: {
            deliveryTime: 59,
            minDeliveryTime: 55,
            maxDeliveryTime: 60,
            lastMileTravel: 8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "55-60 MINS",
            lastMileTravelString: "8.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          aggregatedDiscountInfo: {
            visible: true,
          },
          badges: {},
          aggregatedDiscountInfoV2: {
            visible: true,
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "4.9",
              ratingCount: "69",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "424457",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "424457",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "474809",
          name: "Pizza Burger Company",
          city: "6",
          slugs: {
            restaurant: "pizza-burger-company-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId: "2d65957c28fa01240287e29010a829b7",
          address:
            "ground floor, behind tirupati bhel, gujrat colony, kothrud, Karve Nagar, Pune PMC, Maharashtra 411038",
          locality: "Gujrat Colony",
          areaName: "Kothrud",
          costForTwo: "30000",
          costForTwoMessage: "₹300 FOR TWO",
          cuisines: ["Pizzas", "Burgers", "Fast Food", "Beverages", "Pastas"],
          avgRating: 3.4,
          feeDetails: {},
          avgRatingString: "3.4",
          totalRatingsString: "104",
          sla: {
            deliveryTime: 54,
            minDeliveryTime: 50,
            maxDeliveryTime: 55,
            lastMileTravel: 8.2,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "50-55 MINS",
            lastMileTravelString: "8.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "ABOVE ₹700",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_4",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "474809",
          impressionObjectName: "impression-restaurant",
          clickObjectName: "click-restaurant",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
            isSld: "false",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "474809",
            query: "Burger",
          },
        },
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "677125",
          name: "Tasty Pizza Nd Burger Shop",
          city: "6",
          slugs: {
            restaurant: "tasty-pizza-nd-burger-shop-kothrud-kothrud",
            city: "pune",
          },
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/11/11/3a3590b3-5f81-401d-8119-7e38e25a62d7_f10690aa-ee1f-426a-8afb-6d79e3ec2ec7.JPG",
          address:
            "Infront Bank Of Baroda ATM, Karve Nagar, Pune, Maharashtra - 411052",
          locality: "Karve Nagar",
          areaName: "Kothrud",
          costForTwo: "40000",
          costForTwoMessage: "₹400 FOR TWO",
          cuisines: ["Pizzas", "Burgers", "Fast Food", "Beverages"],
          avgRating: 4.2,
          feeDetails: {},
          avgRatingString: "4.2",
          totalRatingsString: "10",
          sla: {
            deliveryTime: 62,
            minDeliveryTime: 60,
            maxDeliveryTime: 65,
            lastMileTravel: 10.8,
            serviceability: "SERVICEABLE",
            rainMode: "RAIN_MODE_LIGHT",
            slaString: "60-65 MINS",
            lastMileTravelString: "10.8 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            opened: true,
            restaurantClosedMeta: {},
          },
          badges: {},
          sld: true,
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          ratingSlab: "RATING_SLAB_5",
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          cartOrderabilityNudgeBanner: {
            parameters: {},
            presentation: {},
          },
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          featuredSectionInfo: {
            sectionTitle: "More",
          },
        },
        analytics: {
          screenName: "explore",
          context:
            '{"tid":"undefined","grid":"bfc9fa36-9b3b-454e-9982-cf9f44a15d32","queryUniqueId":"05e1440d-c134-1295-aca1-ec6822d8dc48","query":"Burger"}',
          objectValue: "677125",
          impressionObjectName: "impression-restaurant-sld",
          clickObjectName: "click-restaurant-sld",
        },
        ctaWithParams: {
          link: "swiggy://menu",
          type: "DEEPLINK",
          params: {
            isSld: "true",
            sourceRequestId: "6875e22ff76dc113e6e73a186c7731ce",
            qrEnabled: "false",
            restaurant_id: "677125",
            query: "Burger",
            sourceSessionId: "lqa33ef0-bb2e-4f72-8758-b3476a6ef99d",
            source: "SEARCH",
          },
        },
      },
    },
  },
];

// CONFIG DRIVEN UI
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">Search</div>
      <div className="restaurant-container">
        {
          resList.map((restaurant) => { 
            const restaurantDetail = restaurant?.card?.card?.info;     // Optional Chaining
            return (
              <RestaurantCard key={restaurantDetail.id} resData={restaurantDetail} />
            )
          })
        } 
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);