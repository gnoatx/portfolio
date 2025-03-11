import { useEffect, useState } from 'react'
import BgCredit from '../BgCredit'
import style from './Header.module.css'

export default function Header() {
    const [profileWidth, setProfileWidth] = useState(window.innerWidth <= 1000 ? 150 : 300);

    useEffect(() => {
        const handleResize = () => setProfileWidth(window.innerWidth <= 1000 ? 150 : 300)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <header className={style.header}>
            <div className={style['info-block']}>
                <div className={style.title}>
                    <strong className={style.hello}>Olá, meu nome é</strong>
                    <h1 className={style.name}>Victor Gnoato</h1>
                </div>
                <div className={style['image-container']}>
                    <img className={style['profile-picture']} src="/assets/profile.png" alt="Foto de perfil do desenvolvedor" height={profileWidth} />
                </div>
            </div>
            <BgCredit at='jezar' name='Jezael Melgoza' photoId='layMbSJ3YOE' />
      </header>
    )
}