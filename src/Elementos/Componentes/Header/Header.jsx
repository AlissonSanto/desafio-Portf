import styles from"./Header.module.css"
import github from"../../image/github.svg"
import linkdin from"../../image/linkdin.svg"

function Header(){
    return(
        <div>
            <a>
                <button className={styles.btnHeader}>Projetos</button>
                <button className={styles.btnHeader}>Tecnologias</button>
                <button className={styles.btnHeader}>Sobre mim</button>
            </a>
            <nav className="nav_img">
            <a href="">
                <img src={github} alt="Erro" />
                <img src={linkdin} alt="Erro" />
                </a>
            </nav>

        </div>
    );
};

export default Header;