import { useEffect, useState } from "react";
import { useUser } from "state/auth";

/*
-----------------------------------------------------
GetUser is a custom fetch hook which takes the given 
url and fetches the data from the API. It also handels 
fetching errors and if the API call is pending. 
-----------------------------------------------------
*/

const GetUser = (url: string) => {
  const [data, setData] = useState([] as any);
  const [error, setError] = useState(null);
  const user = useUser();

  /*
    -------------------------------------------------
    The "getAPI" function fetch the data from the url, 
    or handels fetching errors and pending API calls.
    -------------------------------------------------
  */

  useEffect(() => {
    const getApi = async () => {
      await fetch(url, {
        headers: {
          Authorization: `Bearer ${user?.access_token}`,
          "Content-Type": "application/json",
        }
      })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch the data for this resource.");
          }
          return res.json();
        })
        .then((json) => {
          setData(json);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
        });
    };
    getApi();
  }, [url, user?.access_token]);

  return { data, error };
};

export default GetUser;
