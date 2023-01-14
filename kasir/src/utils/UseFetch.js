import { useEffect, useState } from "react";
const UseFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Cant fetch the data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
        setError(null);
      })
      .catch((e) => {
        setLoading(false);
        setData(null);
        setError(e.message);
      });
  }, [url]);

  return { data, loading, error };
};

export default UseFetch;
// http://localhost:8000/products
