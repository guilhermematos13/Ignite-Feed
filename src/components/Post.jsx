import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.headerPost}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/guilhermematos13.png"
          />
          <div className={styles.authorInfo}>
            <strong>Guilherme Matos</strong>
            <span>Front-end Developer</span>
          </div>
        </div>

        <time title="05 de Dezembro às 20:10:00" dateTime="2022-05-12 20:10:00">
          Públicado há 1h
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw </a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />

        <button type="submit">Comentar</button>
      </form>
    </article>
  );
}
