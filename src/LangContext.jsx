import { createContext, useContext, useState } from "react"
import en from "./i18n/en.json"
import es from "./i18n/es.json"
import pt from "./i18n/pt.json"

const LangContext = createContext()

const languages = { en, es, pt }

export function LangProvider({ children }) {
  const [lang, setLang] = useState("en")

  return (
    <LangContext.Provider value={{ lang, setLang, t: languages[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}
