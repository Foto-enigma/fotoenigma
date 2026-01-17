import { useLang } from "./LangContext"
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";

export default function App() {
  const { lang, setLang } = useLang()

  const handleChangeLang = (newLang) => {
    setLang(newLang)
  }

  return (
    <div className="app">
      <div className="main-title">
        <h1>FOTOENIGMA</h1>

        {/* Botones generales de idioma */}
        <div className="lang-buttons">
          <button
            className={lang === 'en' ? 'active' : ''}
            onClick={() => handleChangeLang('en')}
          >
            EN
          </button>
          <button
            className={lang === 'es' ? 'active' : ''}
            onClick={() => handleChangeLang('es')}
          >
            ES
          </button>
          <button
            className={lang === 'pt' ? 'active' : ''}
            onClick={() => handleChangeLang('pt')}
          >
            PT
          </button>
        </div>
      </div>

      <div className="first-column">
        <div>
          <h1 className="app-title">
            Privacy Policy
            <span className="cursor"></span>
          </h1>
          <Privacy />
        </div>
      </div>

      <div className="second-column">
        <div>
          <h1 className="app-title">
            Terms & Conditions
            <span className="cursor"></span>
          </h1>
          <Terms />
        </div>
      </div>
    </div>
  )
}
