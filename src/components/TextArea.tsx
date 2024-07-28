import { Form } from "react-bootstrap";
import { SeccionType } from "../assets/type.d";
import React from "react";

interface Props {
  type: SeccionType;
  loading?: boolean;
  onChange: (value: string) => void;
  value: string;
}

const commonStyles = { border: 0, heigth: "200px", resize: "none" };

const getPlaceHolder = ({
  type,
  loading,
}: {
  type: SeccionType;
  loading?: boolean;
}) => {
  if (type === SeccionType.From) return "Introducir texto";
  if (loading === true) return "Cargando...";

  return "Traducción";
};

export const TextArea = ({ type, loading, value, onChange }: Props) => {
  const styles =
    type === SeccionType.From
      ? commonStyles
      : { ...commonStyles, backgroundColor: "#f5f5f5" };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return (
    <Form.Control
      as="textarea"
      placeholder={getPlaceHolder({ type, loading })}
      autoFocus={type == SeccionType.From}
      style={styles}
      value={value}
      disabled={type === SeccionType.To}
      onChange={handleChange}
    />
  );
};
