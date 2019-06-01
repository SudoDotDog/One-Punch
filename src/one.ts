/**
 * @author WMXPY
 * @namespace One
 * @description One
 */

import * as React from "react";
import { OneComponentIndex, OneHydratedProps, OneStructure } from "./declare";
import { createHydrateComponent } from "./hydrate";

export class One {

    public static create(): One {

        return new One();
    }

    private readonly _registry: OneComponentIndex;

    private constructor() {

        this._registry = {};
    }

    public register<T extends keyof OneComponentIndex>(type: T, component: OneComponentIndex[T]): this {

        this._registry[type] = component;
        return this;
    }

    public hydrate(structure: OneStructure): React.ComponentType<OneHydratedProps> {

        return createHydrateComponent(this._registry, structure);
    }
}
