import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { configuration } from "../configuration";

const {
  I18N: {
    CONFIG,
    DICTIONARY: { BASIS },
  },
} = configuration;

const Page404: NextPage = () => {
  return <h1>{"404 - hermes.art"}</h1>;
};

export default Page404;

export const getStaticProps: GetStaticProps = async ({
  locale = "en",
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...BASIS], CONFIG)),
    },
  };
};
