import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

export function useLang() {
  const context = useContext(LanguageContext);
  return context;
}