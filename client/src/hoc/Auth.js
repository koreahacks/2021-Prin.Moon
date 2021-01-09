import React, { useState, useEffect } from "react";
import Spinner from "../assets/Spinner.svg";
import styled from "styled-components";
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
            history.push("/");
          }
          setLoading(false);
        } catch (err) {
          history.push("/login");
        }
      })();
      return () => setLoading(false);
    }, []);
    return !loading ? (
      <Component {...props} />
    ) : (
      <StyledLoadingSpinner>
        <img src={Spinner} alt="loading.." />
      </StyledLoadingSpinner>
    );
  }
  return Authentication;
}

const StyledLoadingSpinner = styled.div`
  position: relative;
  display: flex;
  min-height: 100vh;
  padding-top: calc(51px + 1rem);
  padding-bottom: 150px;
  justify-content: center;
  align-items: center;

  img {
    height: 8rem;
  }
`;
