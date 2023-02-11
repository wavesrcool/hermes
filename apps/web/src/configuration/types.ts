import I18nConfig from "../../next-i18next.config";

/**
 * * Hermes Documentation
 *
 * @created 01 06 2023
 * @collection hermes types config
 * @notes [ ]
 *
 */
export type TypesConfiguration = {
  GRAPH: {
    STATE_NAME: string;
  };
  I18N: {
    CONFIG: typeof I18nConfig;
    DICTIONARY: {
      BASIS: string[];
    };
  };
  SOURCES: {
    MEDIA: string;
  };
};
