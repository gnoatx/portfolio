import BgCredit from '../BgCredit'
import style from './Bio.module.css'

export default function Bio() {
    return (
        <section className={style.bio}>
            <p>Programador Front-End com especialização em React.</p>
            <p>Criatividade, organização, proatividade, vontade de encarar novos desafios.</p>
            <p>Formado no curso de <b>Programador Fullstack</b> pelo Firjan Senai.</p>
            <p>Formado no curso <b>Oracle ONE - Especialização Front-End</b> pela Alura.</p>
            <BgCredit at='kxvn_lx' name='Kevin Laminto' photoId='7PqRZK6rbaE' />
        </section>
    )
}