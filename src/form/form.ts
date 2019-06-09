/**
 * @author WMXPY
 * @namespace One
 * @description Form
 */

import * as React from "react";
import { OneComponentIndex, OneElement, OneHydratedProps } from "./declare";
import { createHydrateComponent, createInitValue } from "./hydrate";

export class Form {

    public static fromStructure(
        index: OneComponentIndex,
        elements: OneElement[],
        className?: string,
    ): Form {

        return new Form(index, elements, className);
    }

    private readonly _index: OneComponentIndex;
    private readonly _elements: OneElement[];
    private readonly _className?: string;

    private readonly _component: React.ComponentType<OneHydratedProps>;
    private readonly _initValue: Record<string, any>;

    private constructor(
        index: OneComponentIndex,
        elements: OneElement[],
        className?: string,
    ) {

        this._index = index;
        this._elements = elements;
        this._className = className;

        this._component = createHydrateComponent(
            this._index,
            this._elements,
            this._className,
        );
        this._initValue = createInitValue(this._elements);
    }

    public get Component(): React.ComponentType<OneHydratedProps> {

        return this._component;
    }

    public get initValue(): Record<string, any> {

        return this._initValue;
    }
}
