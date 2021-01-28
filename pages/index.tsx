import Head from "next/head";
import React from "react";
import AnalyticsPage from "../components/AnalyticsPage";
import AnalyticsPageContent from "../components/AnalyticsPageContent";
import VercelPageShell from "../components/VercelPageShell";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AnalyticsPage />
    </>
  );
}
