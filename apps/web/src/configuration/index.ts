import I18nConfig from "../../next-i18next.config";
import { TypesConfiguration } from "./types";

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes config
 * @notes [ ]
 *
 */
export const configuration: TypesConfiguration = {
  I18N: {
    CONFIG: I18nConfig,
    DICTIONARY: {
      BASIS: [`common`, `glossary`],
    },
  },
  SOURCES: {
    MEDIA: "https://media.hermes.art/",
  },
};
