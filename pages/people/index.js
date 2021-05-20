import Head from "next/head";
import List from "../../components/list";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { people: data },
  };
};

function index({ people }) {
  return (
    <>
      <Head>
        <title>People list | List of people</title>
        <meta name="description" content="list of people" />
      </Head>
      <List people={people} />
    </>
  );
}

export default index;
