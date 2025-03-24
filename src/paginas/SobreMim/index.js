import PostModelo from "componentes/PostModelo/Index";
import fotoCapa from "assets/sobre_mim_capa.png"
import styles from "./SobreMim.module.css"
import fotoSobreMim from "assets/imagem-alberto2.jpg"

export default function SobreMim () {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou Alberto!
            </h3>

            <img
                className={styles.fotoSobreMim} 
                src={fotoSobreMim}
                alt="Foto Alberto"
            />
            <p className={styles.paragrafo}>
                Meu nome é Alberto, estou graduando Análise e Desenvolvimento de Sistemas e atualmente atuo como desenvolvedor web.
            </p>
            <p className={styles.paragrafo}>
                Tenho experiência no desenvolvimento de páginas e sistemas web responsivos, com foco em layouts atrativos e funcionalidades eficientes.</p>
            <p className={styles.paragrafo}>
                Estou em busca de uma posição que me permita aprimorar minhas habilidades em desenvolvimento web full-stack.</p> 
            <p className={styles.paragrafo}>
                Tenho trabalhado em projetos pessoais e colaborado em projetos de terceiros, sempre com o objetivo de aprimorar meus conhecimentos na área de desenvolvimento.</p>
            
        </PostModelo>
    )
}