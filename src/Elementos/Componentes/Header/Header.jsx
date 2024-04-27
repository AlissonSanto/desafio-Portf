import styles from"./Header.module.css"
import github from"../../image/github.svg"
import linkdin from"../../image/linkdin.svg"

function Header(){

        
    return(
        <div>
            <a>
                <button className={styles.btnHeader}>
                    <a href="../Projects/Projects#projects">Projetos</a>
                    </button>
                <button className={styles.btnHeader}>
                <a href="../../../App#me">Sobre Mim</a>

                </button>
                <button className={styles.btnHeader}>
                <a href="../Footer/Footer#footer">Contato</a>
                    </button>
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