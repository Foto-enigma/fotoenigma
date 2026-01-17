import { useLang } from "../LangContext"

export default function Privacy() {
  const { t } = useLang()

  return (
    <div className="privacy-data">

      <div className="privacy-data-container 1">
        <h1>{t.privacy.controller.title}</h1>
        <p>{t.privacy.controller.description}</p>
        <p>{t.privacy.controller.nameLabel}: <span className="fav">{t.privacy.controller.name}</span></p>
        <p>{t.privacy.controller.emailLabel}: <span className="fav">{t.privacy.controller.email}</span></p>
      </div>

      <div className="privacy-data-container 2">
        <h1>{t.privacy.audience.title}</h1>
        <p>
          {t.privacy.audience.line1} {t.privacy.audience.line2.split("13 years or older")[0]}
          <span className="fav">13 years or older</span>
          {t.privacy.audience.line2.split("13 years or older")[1]}
        </p>
      </div>

      <div className="privacy-data-container 3">
        <h1>{t.privacy.collection.title}</h1>
        <p>{t.privacy.collection.description}</p>
        <ul>
          {t.privacy.collection.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{t.privacy.collection.footer}</p>
      </div>

      <div className="privacy-data-container 4">
        <h1>{t.privacy.thirdParties.title}</h1>
        <p><span className="fav">{t.privacy.thirdParties.service}</span></p>
        <p>{t.privacy.thirdParties.description}</p>
        <ul>
          {t.privacy.thirdParties.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{t.privacy.thirdParties.footer}</p>
      </div>

      <div className="privacy-data-container 5">
        <h1>{t.privacy.admob.title}</h1>
        <p>{t.privacy.admob.description}</p>
        <ul>
          {t.privacy.admob.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{t.privacy.admob.moreInfo}</p>
        <a href={t.privacy.admob.url}>{t.privacy.admob.url}</a>
      </div>

      <div className="privacy-data-container 6">
        <h1>{t.privacy.purchases.title}</h1>
        <p>{t.privacy.purchases.description}</p>
        <ul>
          {t.privacy.purchases.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="privacy-data-container 7">
        <h1>{t.privacy.sharing.title}</h1>
        <p>{t.privacy.sharing.description}</p>
        <ul>
          {t.privacy.sharing.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="privacy-data-container 8">
        <h1>{t.privacy.ai.title}</h1>
        <p>{t.privacy.ai.description}</p>
        <ul>
          {t.privacy.ai.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="privacy-data-container 9">
        <h1>{t.privacy.deletion.title}</h1>
        <p>{t.privacy.deletion.description}</p>
        <ul>
          {t.privacy.deletion.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p><span className="fav">{t.privacy.deletion.email}</span></p>
        <p>{t.privacy.deletion.footer}</p>
      </div>

      <div className="privacy-data-container 10">
        <h1>{t.privacy.security.title}</h1>
        <p>{t.privacy.security.description}</p>
      </div>

      <div className="privacy-data-container 11">
        <h1>{t.privacy.changes.title}</h1>
        <p>{t.privacy.changes.description}</p>
      </div>

      <div className="privacy-data-container">
        <h1>{t.privacy.contact.title}</h1>
        <p>{t.privacy.contact.description} <span className="fav">{t.privacy.contact.email}</span></p>
      </div>

    </div>
  )
}
