import { useReducer } from "react";
import { Action, FromLangauge, Language, type state } from "../assets/type";
import { AUTO_LANGUAGE } from "../assets/constants";

const initialState: state = {
  fromLanguage: "auto",
  toLanguage: "en",
  fromText: "",
  result: "",
  loading: false,
};

const reducer = (state: state, action: Action) => {
  const { type } = action;

  if (type === "INTERCHANGE_LANGUAGES") {

    if(state.fromLanguage === AUTO_LANGUAGE) return state;

    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    };
  }

  if (type === "SET_FROM_LANGUAGE") {
    return {
      ...state,
      fromLanguage: action.payload,
    };
  }

  if (type === "SET_TO_LANGUAGE") {
    return {
      ...state,
      toLanguage: action.payload,
    };
  }

  if (type === "SET_FROM_TEXT") {
    return {
      ...state,
      loading: true,
      fromText: action.payload,
      result: "",
    };
  }

  if (type === "SET_RESULT") {
    return {
      ...state,
      loading: false,
      result: action.payload,
    };
  }

  return state;
};

export const useStore = () => {
  const [{ fromLanguage, toLanguage, result, fromText, loading }, dispatch] =
    useReducer(reducer, initialState);

  const interChangeLanguage = () => {
    dispatch({type: "INTERCHANGE_LANGUAGES"});
  };

  const setFromLanguages = (payload: FromLangauge) => {
    dispatch({type: "SET_FROM_LANGUAGE", payload});
  };

  const setToLanguages = (payload: Language) => {
    dispatch({type: "SET_TO_LANGUAGE", payload});
  };

  const setFromText = (payload: string) => {
    dispatch({type: "SET_FROM_TEXT", payload});
  };

  const setResult = (payload: string) => {
    dispatch({type: "SET_RESULT", payload});
  };

  return { 
    fromLanguage, 
    toLanguage, 
    result, 
    fromText, 
    loading,
    interChangeLanguage,
    setFromLanguages,
    setToLanguages,
    setFromText,
    setResult
   };
};