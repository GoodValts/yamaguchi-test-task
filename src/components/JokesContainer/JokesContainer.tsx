import loadingImg from "../../assets/loading.gif";
import { useGetJokesQuery } from "@/store/reducers/jokesApi";
import styles from "./JokesContainer.module.scss";
import { useEffect } from "react";
import Joke from "../Joke/Joke";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectSearch } from "@/store/reducers/searchSlice";

export default function JokesContainer() {
  const searchString = useSelector(selectSearch);

  const { data, error, isLoading } = useGetJokesQuery(searchString, {
    skip: searchString.length < 4,
  });

  useEffect(() => console.log(data?.result.length), [data]);

  return (
    <div className={styles.container}>
      {!!data?.total && searchString.length > 3 && (
        <>
          <p className={styles.counter}>{`Total: ${data.total}`}</p>
          <div className={styles.jokes}>
            {data.result.map((joke) => (
              <Joke
                value={joke.value}
                id={joke.id}
                updated={joke.updated_at}
                key={joke.id}
                link={joke.url}
              />
            ))}
          </div>
        </>
      )}
      {isLoading && (
        <Image
          className={styles.loading}
          src={loadingImg}
          alt="loading.gif"
          unoptimized
        />
      )}
      <p className={styles.resultError}>
        {error ? "Server error" : data?.total ? null : "No jokes here"}
      </p>
    </div>
  );
}
