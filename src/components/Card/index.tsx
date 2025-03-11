import style from './Card.module.css'

type CardProps = {
    work: {
        title: string,
        image: string,
        link: string,
        description: string
    }
}

export default function Card({ work }: CardProps) {
    return (
        <>
            <div className={style['card-background']} style={{backgroundImage: `url(/assets/${work.image}.png)`}}>
                <div className={style.card}>
                    <div className={style['info-card']}>
                        <a href={work.link}><h2 className={style.title}>{work.title}</h2></a>
                        <article className={style.info}>
                            {work.description.split('.').slice(0,-1).map((text) => <p className={style.description}>{`${text}.`}</p>)}
                        </article>
                    </div>
                    <a href={work.link} className={style['image-link']}>
                        <img className={style['card-image']} src={`/assets/${work.image}.png`} alt={work.title} />
                    </a>
                </div>
            </div>
        </>
    )
}