import Form from "react-bootstrap/Form";
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from "../assets/constants";
import React from "react";
import { SeccionType, FromLangauge, Language } from "../assets/type.d";

type Props =
  | {
      type: SeccionType.From;
      value: FromLangauge;
      onChange: (language: FromLangauge) => void;
    }
  | {
      type: SeccionType.To;
      value: Language;
      onChange: (language: Language) => void;
    };

export function LanguageSelector({ onChange, value, type }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event?.target.value as Language);
  };

  return (
    <Form.Select
      onChange={handleChange}
      value={value}
      aria-label="Selecciona el idioma"
    >
      {type === SeccionType.From && (
        <option value={AUTO_LANGUAGE}>Detectar idioma</option>
      )}
      {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
        <option value={key} key={key}>
          {literal}
        </option>
      ))}
    </Form.Select>
  );
}
