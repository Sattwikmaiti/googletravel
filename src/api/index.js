import axios from "axios";
export const fetchData = (url, { sw, ne }) => {
  return axios({
    method: "GET",
    url: url,
    params: {
      bl_latitude: sw.lat,
      tr_latitude: ne.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
    },
    headers: {
      "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
      "X-RapidAPI-Key": "3a8b400d77msh8cc78b0791dd7a3p18f156jsn6307be6385d9",
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchCity = (placeName) => {
  return axios({
    method: "GET",
    url: `https://api.opencagedata.com/geocode/v1/json?&key=${process.env.REACT_APP_CITY_KEY}`,

    params: {
      q: placeName,
    },
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
};
