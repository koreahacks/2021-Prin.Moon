import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useHistory } from "react-router";
import myAxios from "../utils/myAxios";
import useGeoLocation from "../hooks/useGeoLocation";

export default function Auth(Component, loginRequired) {
  function Authentication(props) {
    const { myLocation } = useGeoLocation();
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
            if (
              !myLocation.place &&
              window.location.pathname !== "/" &&
              window.location.pathname !== "/mypage" &&
              window.location.pathname !== "/recruitedParty" &&
              window.location.pathname !== "/participatedParty"
            ) {
              if (window.location.pathname === "/address/confirm") {
                history.replace("/address/confirm");
              } else {
                history.replace("/address/search");
              }
            } else {
              history.replace(window.location.pathname);
            }
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
