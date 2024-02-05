import styles from "./Frase.module.css";

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Este é uma componente com uma Frase</p>
    </div>
  );
}

export default Frase;
