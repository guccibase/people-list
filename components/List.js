import Link from "next/link";
import React from "react";
import styles from "../styles/People.module.css";

function List({ people }) {
  return (
    <div>
      <h1>All people</h1>
      {people.map((person) => (
        <div className={styles.person} id={person.id}>
          <Link href={`/people/${person.id}`}>
            <a>
              <h3>{person.name}</h3>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default List;
