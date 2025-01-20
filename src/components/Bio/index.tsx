import BgCredit from '../BgCredit'
import style from './Bio.module.css'

export default function Bio() {
    return (
        <section className={style.bio}>
            <p>Programador Front-End com especialização em React.</p>
            <p>Criatividade, organização, proatividade, disposição a encarar novos desafios.</p>
            <p>Formado no curso de <u>Programador Fullstack</u> pelo Firjan Senai.</p>
            <p>Cursando o curso <u>Oracle ONE - Especialização Front-End</u> pela Alura.</p>
            <BgCredit at='kxvn_lx' name='Kevin Laminto' photoId='7PqRZK6rbaE' />
        </section>
    )
}