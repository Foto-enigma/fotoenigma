import { useLang } from "../LangContext"

export default function Terms() {
    const { t } = useLang()

    return (
        <div className="privacy-data">
            <div className="privacy-data-container 1">
                <h1>{t.terms.general.title}</h1>
                <p>
                    {t.terms.general.line1} <span className="fav">{t.terms.general.highlight1}</span> {t.terms.general.line2}
                </p>
                <p>{t.terms.general.developer} <span className="fav">{t.terms.general.developerName}</span></p>
                <p>{t.terms.general.email} <span className="fav">{t.terms.general.emailAddress}</span></p>
                <p>{t.terms.general.agreement}</p>
            </div>

            <div className="privacy-data-container 2">
                <h1>{t.terms.usage.title}</h1>
                <p>
                    {t.terms.usage.description} <span className="fav">{t.terms.usage.highlight}</span>.
                </p>
                <ul>
                    {t.terms.usage.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="privacy-data-container 3">
                <h1>{t.terms.use.title}</h1>
                <p>
                    {t.terms.use.line1} <span className="fav">{t.terms.use.highlight}</span>.
                </p>
                <p>{t.terms.use.line2}</p>
                <ul>
                    {t.terms.use.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="privacy-data-container 4">
                <h1>{t.terms.content.title}</h1>
                <p>{t.terms.content.line1}</p>
                <p>
                    {t.terms.content.line2} <span className="fav">{t.terms.content.highlight}</span> {t.terms.content.line3}
                </p>
            </div>

            <div className="privacy-data-container 5">
                <h1>{t.terms.property.title}</h1>
                <p>
                    {t.terms.property.line1} <span className="fav">{t.terms.property.highlight}</span>.
                </p>
                <p>{t.terms.property.line2}</p>
            </div>

            <div className="privacy-data-container 6">
                <h1>{t.terms.ads.title}</h1>
                <p>
                    {t.terms.ads.line1} <span className="fav">{t.terms.ads.highlight}</span>.
                </p>
                <p>{t.terms.ads.line2}</p>
            </div>

            <div className="privacy-data-container 7">
                <h1>{t.terms.purchases.title}</h1>
                <p>
                    {t.terms.purchases.line1} <span className="fav">{t.terms.purchases.highlight}</span>.
                </p>
                <ul>
                    {t.terms.purchases.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <div className="privacy-data-container 8">
                <h1>{t.terms.sharing.title}</h1>
                <p>
                    {t.terms.sharing.line1} <span className="fav">{t.terms.sharing.highlight}</span>.
                </p>
                <p>{t.terms.sharing.line2}</p>
            </div>

            <div className="privacy-data-container 9">
                <h1>{t.terms.liability.title}</h1>
                <p>
                    {t.terms.liability.line1} <span className="fav">{t.terms.liability.highlight}</span>.
                </p>
                <p>{t.terms.liability.line2}</p>
            </div>

            <div className="privacy-data-container 10">
                <h1>{t.terms.modifications.title}</h1>
                <p>
                    {t.terms.modifications.line1} <span className="fav">{t.terms.modifications.highlight}</span> {t.terms.modifications.line2}
                </p>
            </div>

            <div className="privacy-data-container 11">
                <h1>{t.terms.changes.title}</h1>
                <p>{t.terms.changes.line1}</p>
                <p>{t.terms.changes.line2}</p>
            </div>

            <div className="privacy-data-container">
                <h1>{t.terms.contact.title}</h1>
                <p>
                    {t.terms.contact.line1} <span className="fav">{t.terms.contact.highlight}</span>
                </p>
            </div>
        </div>
    )
}
