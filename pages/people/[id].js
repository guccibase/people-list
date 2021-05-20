import Details from "../../components/Details";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  const paths = data.map((person) => {
    return { params: { id: person.id.toString() } };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users/" + context.params.id
  );
  const data = await res.json();

  return { props: { details: data } };
};

export default function personDetails({ details }) {
  return <Details details={details}></Details>;
}
