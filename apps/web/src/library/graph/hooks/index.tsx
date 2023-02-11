import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type HermesGraphData0000 = {
  __typename?: "HermesGraphData0000";
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type HermesGraphData0001 = {
  __typename?: "HermesGraphData0001";
  list?: Maybe<Array<Thread>>;
  notes?: Maybe<Array<Scalars["String"]>>;
};

export type HermesGraphFigures0000 = {
  locale: Scalars["String"];
};

export type HermesGraphFigures0001 = {
  locale: Scalars["String"];
};

export type HermesGraphResolve0000 = {
  __typename?: "HermesGraphResolve0000";
  data?: Maybe<HermesGraphData0000>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type HermesGraphResolve0001 = {
  __typename?: "HermesGraphResolve0001";
  data?: Maybe<HermesGraphData0001>;
  hash: Scalars["String"];
  message?: Maybe<Scalars["String"]>;
  pass: Scalars["Boolean"];
  timestamp: Scalars["Float"];
};

export type ModelsNotes = {
  __typename?: "ModelsNotes";
  date: Scalars["String"];
  key: Scalars["String"];
  list: Array<Scalars["String"]>;
};

export type Msg = {
  __typename?: "Msg";
  created: Scalars["String"];
  id: Scalars["Int"];
  key: Scalars["String"];
  records?: Maybe<MsgRecords>;
  thread: Thread;
  threadId?: Maybe<Scalars["Int"]>;
  updated: Scalars["String"];
  wave: Scalars["String"];
};

export type MsgRecords = {
  __typename?: "MsgRecords";
  date: Scalars["String"];
  from: Scalars["String"];
  notes?: Maybe<Array<ModelsNotes>>;
  recipient: Scalars["String"];
  sender: Scalars["String"];
  subject: Scalars["String"];
  text: Scalars["String"];
};

export type Query = {
  __typename?: "Query";
  HermesGraph0000: HermesGraphResolve0000;
  HermesGraph0001: HermesGraphResolve0001;
};

export type QueryHermesGraph0000Args = {
  figure: HermesGraphFigures0000;
};

export type QueryHermesGraph0001Args = {
  figure: HermesGraphFigures0001;
};

export type Thread = {
  __typename?: "Thread";
  created: Scalars["String"];
  id: Scalars["Int"];
  key: Scalars["String"];
  msgs: Array<Msg>;
  subject: Scalars["String"];
  updated: Scalars["String"];
};

export type HermesGraph0000QueryVariables = Exact<{
  figure: HermesGraphFigures0000;
}>;

export type HermesGraph0000Query = {
  __typename?: "Query";
  HermesGraph0000: {
    __typename?: "HermesGraphResolve0000";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "HermesGraphData0000";
      notes?: Array<string> | null;
    } | null;
  };
};

export type HermesGraph0001QueryVariables = Exact<{
  figure: HermesGraphFigures0001;
}>;

export type HermesGraph0001Query = {
  __typename?: "Query";
  HermesGraph0001: {
    __typename?: "HermesGraphResolve0001";
    pass: boolean;
    message?: string | null;
    timestamp: number;
    hash: string;
    data?: {
      __typename?: "HermesGraphData0001";
      notes?: Array<string> | null;
      list?: Array<{
        __typename?: "Thread";
        id: number;
        created: string;
        updated: string;
        key: string;
        subject: string;
        msgs: Array<{
          __typename?: "Msg";
          id: number;
          created: string;
          updated: string;
          key: string;
          wave: string;
          records?: {
            __typename?: "MsgRecords";
            recipient: string;
            sender: string;
            subject: string;
            date: string;
            from: string;
            text: string;
          } | null;
        }>;
      }> | null;
    } | null;
  };
};

export const HermesGraph0000Document = gql`
  query HermesGraph0000($figure: HermesGraphFigures0000!) {
    HermesGraph0000(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
      }
    }
  }
`;

/**
 * __useHermesGraph0000Query__
 *
 * To run a query within a React component, call `useHermesGraph0000Query` and pass it any options that fit your needs.
 * When your component renders, `useHermesGraph0000Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHermesGraph0000Query({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useHermesGraph0000Query(
  baseOptions: Apollo.QueryHookOptions<
    HermesGraph0000Query,
    HermesGraph0000QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HermesGraph0000Query, HermesGraph0000QueryVariables>(
    HermesGraph0000Document,
    options
  );
}
export function useHermesGraph0000LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HermesGraph0000Query,
    HermesGraph0000QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HermesGraph0000Query,
    HermesGraph0000QueryVariables
  >(HermesGraph0000Document, options);
}
export type HermesGraph0000QueryHookResult = ReturnType<
  typeof useHermesGraph0000Query
>;
export type HermesGraph0000LazyQueryHookResult = ReturnType<
  typeof useHermesGraph0000LazyQuery
>;
export type HermesGraph0000QueryResult = Apollo.QueryResult<
  HermesGraph0000Query,
  HermesGraph0000QueryVariables
>;
export const HermesGraph0001Document = gql`
  query HermesGraph0001($figure: HermesGraphFigures0001!) {
    HermesGraph0001(figure: $figure) {
      pass
      message
      timestamp
      hash
      data {
        notes
        list {
          id
          created
          updated
          key
          subject
          msgs {
            id
            created
            updated
            key
            wave
            records {
              recipient
              sender
              subject
              date
              from
              text
            }
          }
        }
      }
    }
  }
`;

/**
 * __useHermesGraph0001Query__
 *
 * To run a query within a React component, call `useHermesGraph0001Query` and pass it any options that fit your needs.
 * When your component renders, `useHermesGraph0001Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHermesGraph0001Query({
 *   variables: {
 *      figure: // value for 'figure'
 *   },
 * });
 */
export function useHermesGraph0001Query(
  baseOptions: Apollo.QueryHookOptions<
    HermesGraph0001Query,
    HermesGraph0001QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<HermesGraph0001Query, HermesGraph0001QueryVariables>(
    HermesGraph0001Document,
    options
  );
}
export function useHermesGraph0001LazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HermesGraph0001Query,
    HermesGraph0001QueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    HermesGraph0001Query,
    HermesGraph0001QueryVariables
  >(HermesGraph0001Document, options);
}
export type HermesGraph0001QueryHookResult = ReturnType<
  typeof useHermesGraph0001Query
>;
export type HermesGraph0001LazyQueryHookResult = ReturnType<
  typeof useHermesGraph0001LazyQuery
>;
export type HermesGraph0001QueryResult = Apollo.QueryResult<
  HermesGraph0001Query,
  HermesGraph0001QueryVariables
>;
