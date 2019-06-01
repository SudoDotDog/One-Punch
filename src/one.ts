/**
 * @author WMXPY
 * @namespace One
 * @description One
 */

import * as React from "react";
import { OneComponentIndex, OneHydratedProps } from "./declare";

export class One {

    public static create(): One {

        return new One();
    }

    private readonly _registry: Partial<OneComponentIndex>;

    private constructor() {

        this._registry = {};
    }

    public register<T extends keyof OneComponentIndex>(type: T, component: OneComponentIndex[T]): this {

        this._registry[type] = component;
        return this;
    }

    public hydrate(): React.ComponentType<OneHydratedProps> {

        return null as any;
    }
}
