import axios from "axios";
import Error from "../Error/index";
import { useEffect, useState } from "react";

const useRepos = () => {
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/users/panijoanna/repos"
        );
        setRepos(response.data);
      } catch (error) {
        setError(<Error />);
      }
    };
    fetchData();
  }, []);
  return { repos, error };
};

export default useRepos;
