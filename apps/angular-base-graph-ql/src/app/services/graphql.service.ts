import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
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
  Date: any;
  Long: any;
  Time: any;
};









export type Cars = {
  __typename?: 'Cars';
  name?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
  manufacturer?: Maybe<Scalars['String']>;
  engine?: Maybe<Engine>;
  _ts: Scalars['Long'];
};

export type CarsEngineRelation = {
  create?: Maybe<EngineInput>;
  connect?: Maybe<Scalars['ID']>;
  disconnect?: Maybe<Scalars['Boolean']>;
};

export type CarsInput = {
  engine?: Maybe<CarsEngineRelation>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type CarsPage = {
  __typename?: 'CarsPage';
  data: Array<Maybe<Cars>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type Engine = {
  __typename?: 'Engine';
  torque?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  _id: Scalars['ID'];
  horsePower?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  displacement?: Maybe<Scalars['Int']>;
  _ts: Scalars['Long'];
};

export type EngineInput = {
  displacement?: Maybe<Scalars['Int']>;
  horsePower?: Maybe<Scalars['Int']>;
  manufacturer?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  torque?: Maybe<Scalars['Int']>;
};

export type EnginePage = {
  __typename?: 'EnginePage';
  data: Array<Maybe<Engine>>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  createCars: Cars;
  createEngine: Engine;
  updateCars?: Maybe<Cars>;
  deleteCars?: Maybe<Cars>;
  updateEngine?: Maybe<Engine>;
  deleteEngine?: Maybe<Engine>;
};


export type MutationCreateCarsArgs = {
  data: CarsInput;
};


export type MutationCreateEngineArgs = {
  data: EngineInput;
};


export type MutationUpdateCarsArgs = {
  id: Scalars['ID'];
  data: CarsInput;
};


export type MutationDeleteCarsArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateEngineArgs = {
  id: Scalars['ID'];
  data: EngineInput;
};


export type MutationDeleteEngineArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  findCarsByID?: Maybe<Cars>;
  findEngineByID?: Maybe<Engine>;
  cars: CarsPage;
  engines: EnginePage;
};


export type QueryFindCarsByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindEngineByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCarsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryEnginesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type CarsListQueryVariables = Exact<{
  size?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
}>;


export type CarsListQuery = (
  { __typename?: 'Query' }
  & { cars: (
    { __typename?: 'CarsPage' }
    & Pick<CarsPage, 'after' | 'before'>
    & { data: Array<Maybe<(
      { __typename?: 'Cars' }
      & Pick<Cars, 'name' | 'manufacturer'>
      & { engine?: Maybe<(
        { __typename?: 'Engine' }
        & Pick<Engine, 'name' | 'displacement' | 'horsePower' | 'torque' | 'manufacturer'>
      )> }
    )>> }
  ) }
);

export type EngineListQueryVariables = Exact<{
  size?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
}>;


export type EngineListQuery = (
  { __typename?: 'Query' }
  & { engines: (
    { __typename?: 'EnginePage' }
    & Pick<EnginePage, 'after' | 'before'>
    & { data: Array<Maybe<(
      { __typename?: 'Engine' }
      & Pick<Engine, 'name' | 'displacement' | 'horsePower' | 'torque' | 'manufacturer'>
    )>> }
  ) }
);

export const CarsListDocument = gql`
    query carsList($size: Int, $cursor: String) {
  cars(_size: $size, _cursor: $cursor) {
    data {
      name
      manufacturer
      engine {
        name
        displacement
        horsePower
        torque
        manufacturer
      }
    }
    after
    before
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CarsListGQL extends Apollo.Query<CarsListQuery, CarsListQueryVariables> {
    document = CarsListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const EngineListDocument = gql`
    query engineList($size: Int, $cursor: String) {
  engines(_size: $size, _cursor: $cursor) {
    data {
      name
      displacement
      horsePower
      torque
      manufacturer
    }
    after
    before
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EngineListGQL extends Apollo.Query<EngineListQuery, EngineListQueryVariables> {
    document = EngineListDocument;

    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
