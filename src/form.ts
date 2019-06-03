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

    private constructor(index: OneComponentIndex, elements: OneElement[]) {

        this._index = index;
        this._elements = elements;
    }

    public get Component(): React.ComponentType<OneHydratedProps> {

        return createHydrateComponent(this._index, this._elements);
    }

    public get initValue(): Record<string, any> {

        return createInitValue(this._elements);
    }
}
