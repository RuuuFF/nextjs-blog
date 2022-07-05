import { getSortedPostsData } from "../lib/posts";

import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className="headingMd">
        <p>Hello! I'm <strong>Carlos</strong>. I'm Frontend Developer and passionate for code, airplane and photograph. You can contact me on <a href="https://www.linkedin.com/in/ruuuff/">LinkedIn</a>.</p>
        <p>(This is a sample website - you'll be building a site like this on <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)</p>
      </section>

      <section className="headingMd padding1px">
        <h2 className="headingLg">Blog</h2>
        <ul className="list">
          {allPostsData.map(({ id, date, title }) => (
            <li className="listItem" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className="lightText">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}