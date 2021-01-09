import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useHistory } from "react-router";
import myAxios from "../utils/myAxios";

export default function Auth(Component, loginRequired) {
  function Authentication(props) {
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    useEffect(() => {
      (async () => {
        try {
          const res = await myAxios.get("/user/info");
          if (res.status !== 200 && loginRequired) {
            history.push("/login");
          }
          if (res.status === 200 && !loginRequired) {
            history.replace(window.location.pathname);
          }
          setLoading(false);
        } catch (err) {
          history.push("/login");
        }
      })();
      return () => setLoading(false);
    }, []);
    return !loading ? <Component {...props} /> : <Spinner />;
  }
  return Authentication;
}
