import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "./constants";

export type Language = keyof typeof SUPPORTED_LANGUAGES;
export type AutoLanguage = typeof AUTO_LANGUAGE;
export type FromLangauge = Language | AutoLanguage;

export interface state {
  fromLanguage: FromLangauge,
  toLanguage: Language,
  fromText: string,
  result: string,
  loading: boolean,
}

export type Action = 
  | { type: 'INTERCHANGE_LANGUAGES'}
  | { type: 'SET_FROM_LANGUAGE', payload: FromLangauge}
  | { type: 'SET_TO_LANGUAGE', payload: Language}
  | { type: 'SET_FROM_TEXT', payload: string}
  | { type: 'SET_RESULT', payload: string}

export enum SeccionType {
  From = 'from',
  To = 'to',
}