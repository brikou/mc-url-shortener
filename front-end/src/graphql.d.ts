export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateUrlInput = {
  link: Scalars['String'];
};

export type MessageDto = {
  __typename?: 'MessageDto';
  id?: Maybe<Scalars['Int']>;
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createUrl: Url;
  message: MessageDto;
};


export type MutationCreateUrlArgs = {
  createUrlInput: CreateUrlInput;
};


export type MutationMessageArgs = {
  message: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  messages: Array<MessageDto>;
  url: Url;
  urls: Array<Url>;
};


export type QueryUrlArgs = {
  key: Scalars['String'];
};

export type Url = {
  __typename?: 'Url';
  id: Scalars['ID'];
  key: Scalars['String'];
  link: Scalars['String'];
};
