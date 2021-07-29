import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [jobId, setJobId] = useState(0);

  const fetchData = async (
    params = {
      position: "",
      contract: "",
      location: "",
    }
  ) => {
    await fetch("data.json")
      .then((res) => {
        if (!res.ok) throw Error("Network response error");
        //convert the Json into a js object
        return res.json();
      })
      .then((res) => {
        setData(filterResponse(res, params));
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const filterResponse = (response, { position, contract, location }) => {
    return response.filter((r) => {
      return (
        r.position.toLowerCase().includes(position.toLowerCase()) &&
        r.contract.toLowerCase().includes(contract.toLowerCase()) &&
        r.location.toLowerCase().includes(location.toLowerCase())
      );
    });
  };

  return [
    fetchData,
    data,
    setData,
    isLoading,
    setIsLoading,
    error,
    setError,
    jobId,
    setJobId
  ];
};

export default useFetch;
