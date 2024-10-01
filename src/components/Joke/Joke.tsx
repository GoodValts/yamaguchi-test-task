import styles from "./Joke.module.scss";

export default function Joke({
  value,
  id,
  updated,
  link,
}: {
  value: string;
  id: string;
  updated: string;
  link: string;
}) {
  return (
    <div className={styles.joke} onClick={() => window.open(link, "_blank")}>
      <p className={styles.value}>{value}</p>
      <p className={styles.id}>{id}</p>
      <p className={styles.updated}>{updated.slice(0, -7)}</p>
    </div>
  );
}
