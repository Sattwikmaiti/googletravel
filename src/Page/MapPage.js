import React, { useEffect, useState } from "react";
import '../App.css'
import Sidebar from '../Components/Sidebar'
import Map from '../Components/Map'
import List from '../Components/List'
import { useParams } from "react-router-dom";
import useFilterHook from "../hooks/useFilterHook";
import { fetchData, fetchCity } from "../api";

const MapPage = () => {
  const [bounds, setBounds] = useState();
  const [userLocation, setUserLocation] = useState();
  const [data, setData] = useState([]);
  /*   const [newData, setNewData] = useState(false); */
  const [child, setChild] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  const [rating, setFilterRating] = useState([]);
  const [price, setFilterPrice] = useState([]);
  const [distance, setFilterDistance] = useState([]);

  const [placeName, setPlaceName] = useState();

  const url = `https://travel-advisor.p.rapidapi.com/${params.id}/list-in-boundary`;

  const [newData, setNewData] = useFilterHook(data, rating, distance, price);

  useEffect(() => {
    setIsLoading(true);
    if (placeName) {
      fetchCity(placeName)
        .then((res) => {
          setBounds();
          setUserLocation(res.data.results[0].geometry);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, [placeName, url]);

  useEffect(() => {
    if (userLocation && bounds) {
      setIsLoading(true);
      fetchData(url, bounds)
        .then((res) => {
          setIsLoading(false);
          setNewData([]);
          setUserLocation();
          setData(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url, userLocation, bounds]);

  return (
    <main className="d-flex">
      <section className="shadow">
        {" "}
        <Sidebar />
      </section>
      <section className="w-100">
        <Map
          setBounds={setBounds}
          userLocation={userLocation}
          data={newData.length ? newData : data}
          setChild={setChild}
        />
      </section>
      <section className="shadow">
        {" "}
        <List
          data={newData.length ? newData : data}
          isLoading={isLoading}
          child={child}
          filter={{
            setFilterRating,
            setFilterPrice,
            setFilterDistance,
            setPlaceName,
          }}
        />
      </section>
    </main>
  );
};

export default MapPage;
