/**
 * @author WMXPY
 * @namespace One
 * @description Form
 */

import * as React from "react";
import { OneComponentIndex, OneElement, OneHydratedProps } from "./declare";
import { createHydrateComponent, createInitValue } from "./hydrate";

export class Form {

    public static fromStructure(index: OneComponentIndex, elements: OneElement[]): Form {

        return new Form(index, elements);
    }

    private readonly _index: OneComponentIndex;
    private readonly _elements: OneElement[];

    private readonly _component: React.ComponentType<OneHydratedProps>;
    private readonly _initValue: Record<string, any>;

    private constructor(index: OneComponentIndex, elements: OneElement[]) {

        this._index = index;
        this._elements = elements;

        this._component = createHydrateComponent(this._index, this._elements);
        this._initValue = createInitValue(this._elements);
    }

    public get Component(): React.ComponentType<OneHydratedProps> {

        return this._component;
    }

    public get initValue(): Record<string, any> {

        return this._initValue;
    }
}
