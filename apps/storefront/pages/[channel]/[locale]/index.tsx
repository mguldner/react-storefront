import { ApolloQueryResult } from "@apollo/client";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import React, { ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

import { Layout } from "@/components";
import { BaseSeo } from "@/components/seo/BaseSeo";
import { HOMEPAGE_MENU } from "@/lib/const";
import apolloClient from "@/lib/graphql";
import { contextToRegionQuery } from "@/lib/regions";
import {
  HomepageBlocksQuery,
  HomepageBlocksQueryDocument,
  HomepageBlocksQueryVariables,
} from "@/saleor/api";

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const result: ApolloQueryResult<HomepageBlocksQuery> = await apolloClient.query<
    HomepageBlocksQuery,
    HomepageBlocksQueryVariables
  >({
    query: HomepageBlocksQueryDocument,
    variables: { slug: HOMEPAGE_MENU, ...contextToRegionQuery(context) },
  });
  return {
    props: {
      menuData: result?.data,
    },
    revalidate: 60 * 60, // value in seconds, how often ISR will trigger on the server
  };
};
function Home() {
  return (
    <>
      <BaseSeo />
      <div className="py-10">
        <header className="mb-4">
          <div className="container">
            <Carousel
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
              showStatus={false}
              showThumbs={false}
            >
              <div className="h-fit">
                <Image
                  className="object-contain h-[60vh]"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
                  alt="Pokémon"
                  width={400}
                  height={400}
                />
              </div>
              <div className="h-fit">
                <Image
                  className="object-contain h-[60vh]"
                  src="https://upload.wikimedia.org/wikipedia/fr/a/a5/Yu-Gi-Oh_Logo.JPG"
                  alt="Yu-Gi-Oh!"
                  width={400}
                  height={400}
                />
              </div>
            </Carousel>
          </div>
        </header>
        <main></main>
      </div>
    </>
  );
}

export default Home;

export const getStaticPaths: GetStaticPaths = () => ({
  paths: [],
  fallback: "blocking",
});

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
