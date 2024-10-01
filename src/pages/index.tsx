import Input from "@/components/Input/Input";
import JokesContainer from "@/components/JokesContainer/JokesContainer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yamaguchi test task</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <Input />
        <JokesContainer />
      </main>
    </>
  );
}
