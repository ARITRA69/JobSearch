import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": '5b0fecc814msh821de7874edf530p1dede3jsnd2e03d44304c',
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;



// import { useState, useEffect } from 'react'
// import axios from 'axios';

// // const rapidapikey = RAPID_API_KEY

// const useFetch = (endpoint, query) => {
//     const [data, setData] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     const options = {
//         method: 'GET',
//         url: `https://jsearch.p.rapidapi.com/${endpoint}`,
//         headers: {
//             'X-RapidAPI-Key': '5b0fecc814msh821de7874edf530p1dede3jsnd2e03d44304c',
//             'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
//         },
//         params: { ...query },
//     };

//     const fetchData = async () => {
//         setIsLoading(true)

//         try {
//             const response = await axios.request(options)
//             setData(response.data.data)
//             setIsLoading(false)
//         } catch (error) {
//             setError(error)
//             alert('Something went wrong. Please try again')
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     useEffect(() => {
//         fetchData()
//     },[])

//     const refetch = () => {
//         setIsLoading(true)
//         fetchData()
//     }

//     return { data, isLoading, error, refetch }
// }
// export default useFetch