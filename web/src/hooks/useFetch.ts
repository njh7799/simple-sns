import axios from "axios";
import { useReducer, useEffect } from "react";
import { loadingState } from "../interface";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useFetch(): [loadingState, Function] {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async (url: string) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await axios.get(url);
      const data = response.data;
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  return [state, fetchData];
}

export default useFetch;
