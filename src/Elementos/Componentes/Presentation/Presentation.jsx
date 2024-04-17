import styles from "./Presentation.module.css";


function Presentation() {
    return (
        <div className={styles.presentation}>
            <h1>Bem-vindo ao meu Portifólio</h1>
            <h3>Olá, eu sou Alisson Santos!</h3>
            <p>Sou um apaixonado por tecnologia e soluções inovadoras.<br />
                Como Desenvolvedor, eu tenho o compromisso de resolver problemas<br />
                complexos e trazer resultados excepcionais para os negócios.<br />
                estou sempre em busca de novos desafios para superar.<br />
                Atualmente estou me aprofundando para a area do Back-end<br />
                para poder opera como Desenvolvedor Full-Stack.</p>


            <Button className="btn"
                text="Saber mais"
                link="" />
        </div>
    );
};

export default Presentation;