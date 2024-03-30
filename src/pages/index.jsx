import { useEffect } from "react";
import Category from "./components/Category";
import Header from "./components/Header";
import OnlineDelivery from "./components/OnlineDelivery";
import TopRestaurant from "./components/TopRestaurant";

export default function Home() {

  useEffect(() => {
    document.title = "Order Food Online from India's Best Food Delivery Service | Swiggy"
 }, []);

  return (
    <>
      <Header/>
      <Category/>
      <TopRestaurant/>
      <OnlineDelivery/>
    </>
  );
}