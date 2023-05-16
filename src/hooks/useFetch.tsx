import { useEffect, useState } from "react";
import { fetchDataFromAPI } from "../services/api";

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<string | boolean>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading("Loading");
    setData(null);
    setError(null);

    fetchDataFromAPI(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, loading, error };
};
