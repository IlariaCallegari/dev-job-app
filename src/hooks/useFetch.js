import { useState } from "react";
import getData from "../services/getData";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = (
    params = {
      position: "Senior Software Engineer",
      contract: "Full Time",
      location: "United Kingdom",
    }
  ) => {
    getData()
      .then((res) => {
        setData(filterResponse(res, params));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      }, []);
  };

  const filterResponse = (response, { position, contract, location }) => {
    response.filter((r) => {
      return (
        r.position.toLowerCase().includes(position.toLowerCase()) &&
        r.contract.toLowerCase().includes(contract.toLowerCase()) &&
        r.location.toLowerCase().includes(location.toLowerCase())
      );
    });
  };

  return [fetchData, data, setData, isLoading, setIsLoading, error, setError];
};

export default useFetch;
