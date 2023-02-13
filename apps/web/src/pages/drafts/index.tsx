import { HermesDraftsOrigin } from "@hermes-web-features/drafts/HermesDraftsOrigin";
import { useShape } from "@hermes-web-shapes/hooks";
import { ofRootShape } from "@hermes-web-shapes/root/RootShape";
import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { configuration } from "../../configuration";

const {
  I18N: {
    CONFIG,
    DICTIONARY: { BASIS },
  },
} = configuration;

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes page
 * @notes [ ]
 *
 */
const HermesPagesDrafts: NextPage = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    //
    // @notes:
    setMounted(true);
    // end
    return;
  }, []);

  const RootShape = useShape(ofRootShape);

  return mounted ? (
    <HermesDraftsOrigin
      basis={{ key: RootShape.basiskey, dictionary: [...BASIS] }}
    />
  ) : null;
};

export default HermesPagesDrafts;

export const getStaticProps: GetStaticProps = async ({
  locale = "en",
}: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...BASIS], CONFIG)),
    },
  };
};
