import { useEffect, useState } from "react";
import { supabase } from "../../../supabaseClient";

const useFetchUser = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data, error } = await supabase.from("userInfo").select("*");
        if (error) throw error;
        setUserInfo(data);
      } catch (err) {
        setError(err.message || "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUserInfo();
  }, []);

  return { userInfo, loading, error };
};

export default useFetchUser;
