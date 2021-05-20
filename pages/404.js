import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function PageNotFound() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState();
  let time = 3;
  const interval = () =>
    setInterval(() => {
      setTimeLeft(time);
      time--;
    }, 1000);

  const timer = () => {
    setTimeout(() => {
      router.push("/");
      clearInterval(interval);
    }, 4000);
  };

  useEffect(() => {
    interval();
    timer();
  }, []);

  return (
    <>
      <Head>
        <title>People list | Error</title>
        <meta name="description" content="error" />
      </Head>
      <div className="page-not-found">
        <h1>Ooops.....</h1>
        <h2>Page cannot be found</h2>
        <p>Will redirect in {timeLeft}</p>
        <p>
          Back to{" "}
          <Link href="/">
            <a>homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
}
