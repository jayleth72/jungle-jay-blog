import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel='icon' href='/favicon.ico' type='image/x-icon' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />
      <main className='container mx-auto my-5'>{children}</main>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Jungle Jay's Adventures",
  keywords: "fitness, workouts, health, time-efficient workouts",
  description: "Jay's outdoor advertures"
};
