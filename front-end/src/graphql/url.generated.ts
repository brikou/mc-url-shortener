import * as Types from '../graphql.d';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UrlsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UrlsQuery = { __typename?: 'Query', urls: Array<{ __typename?: 'Url', key: string, link: string }> };

export type CreateUrlMutationVariables = Types.Exact<{
  createUrlInput: Types.CreateUrlInput;
}>;


export type CreateUrlMutation = { __typename?: 'Mutation', createUrl: { __typename?: 'Url', key: string, link: string } };


export const UrlsDocument = gql`
    query urls {
  urls {
    key
    link
  }
}
    `;
export function useUrlsQuery(baseOptions?: Apollo.QueryHookOptions<UrlsQuery, UrlsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UrlsQuery, UrlsQueryVariables>(UrlsDocument, options);
      }
export function useUrlsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UrlsQuery, UrlsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UrlsQuery, UrlsQueryVariables>(UrlsDocument, options);
        }
export type UrlsQueryHookResult = ReturnType<typeof useUrlsQuery>;
export type UrlsLazyQueryHookResult = ReturnType<typeof useUrlsLazyQuery>;
export type UrlsQueryResult = Apollo.QueryResult<UrlsQuery, UrlsQueryVariables>;
export const CreateUrlDocument = gql`
    mutation createUrl($createUrlInput: CreateUrlInput!) {
  createUrl(createUrlInput: $createUrlInput) {
    key
    link
  }
}
    `;
export function useCreateUrlMutation(baseOptions?: Apollo.MutationHookOptions<CreateUrlMutation, CreateUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUrlMutation, CreateUrlMutationVariables>(CreateUrlDocument, options);
      }
export type CreateUrlMutationHookResult = ReturnType<typeof useCreateUrlMutation>;
export type CreateUrlMutationResult = Apollo.MutationResult<CreateUrlMutation>;
export type CreateUrlMutationOptions = Apollo.BaseMutationOptions<CreateUrlMutation, CreateUrlMutationVariables>;