import style from './BgCredit.module.css'

type BgCreditProps = {
    at: string,
    name: string,
    photoId: string
}

export default function BgCredit({ at, name, photoId }: BgCreditProps) {
    return (
        <section>
            <div className={style['bg-credit-container']}>
                <span className={style['bg-credit']}>Foto de <a href={`https://unsplash.com/pt-br/@${at}`}>{name}</a> na <a href={`https://unsplash.com/pt-br/fotografias/${photoId}`}>Unsplash</a></span>
            </div>
        </section>
    )
}