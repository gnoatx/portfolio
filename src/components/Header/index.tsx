import BgCredit from '../BgCredit'
import style from './Header.module.css'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style['info-block']}>
                <div className={style.title}>
                    <strong className={style.hello}>Olá, meu nome é</strong>
                    <h1 className={style.name}>Victor Gnoato</h1>
                </div>
                <div className={style['image-container']}>
                    <img className={style['profile-picture']} src="src/assets/profile.png" alt="Foto de perfil do desenvolvedor" height={300} />
                </div>
            </div>
            <BgCredit at='jezar' name='Jezael Melgoza' photoId='layMbSJ3YOE' />
      </header>
    )
}