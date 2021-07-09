
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CarsEngineRelation {
    create?: EngineInput;
    connect?: string;
    disconnect?: boolean;
}

export interface CarsInput {
    engine?: CarsEngineRelation;
    manufacturer?: string;
    name?: string;
}

export interface EngineInput {
    displacement?: number;
    horsePower?: number;
    manufacturer?: string;
    name?: string;
    torque?: number;
}

export interface Cars {
    name?: string;
    _id: string;
    manufacturer?: string;
    engine?: Engine;
    _ts: Long;
}

export interface CarsPage {
    data: Cars[];
    after?: string;
    before?: string;
}

export interface Engine {
    torque?: number;
    name?: string;
    _id: string;
    horsePower?: number;
    manufacturer?: string;
    displacement?: number;
    _ts: Long;
}

export interface EnginePage {
    data: Engine[];
    after?: string;
    before?: string;
}

export interface IMutation {
    createCars(data: CarsInput): Cars | Promise<Cars>;
    createEngine(data: EngineInput): Engine | Promise<Engine>;
    updateCars(id: string, data: CarsInput): Cars | Promise<Cars>;
    deleteCars(id: string): Cars | Promise<Cars>;
    updateEngine(id: string, data: EngineInput): Engine | Promise<Engine>;
    deleteEngine(id: string): Engine | Promise<Engine>;
}

export interface IQuery {
    findCarsByID(id: string): Cars | Promise<Cars>;
    findEngineByID(id: string): Engine | Promise<Engine>;
    cars(_size?: number, _cursor?: string): CarsPage | Promise<CarsPage>;
    engines(_size?: number, _cursor?: string): EnginePage | Promise<EnginePage>;
}

export type Long = any;
export type Time = any;
