// Filename: pages/index.tsx

import Head from "next/head";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>Startup Landing Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to our Startup Page</h1>
        <p>This is a simple landing page.</p>
      </main>
    </div>
  );
};

export default Home;