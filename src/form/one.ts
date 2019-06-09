/**
 * @author WMXPY
 * @namespace One
 * @description One
 */

import { OneComponentIndex, OneElement } from "./declare";
import { Form } from "./form";

export class One {

    public static create(): One {

        return new One();
    }

    private readonly _registry: OneComponentIndex;

    private constructor() {

        this._registry = {};
    }

    public component<T extends keyof OneComponentIndex>(type: T): OneComponentIndex[T] | null {

        if (this._registry[type]) {
            return this._registry[type];
        }
        return null;
    }

    public register<T extends keyof OneComponentIndex>(type: T, component: OneComponentIndex[T]): this {

        this._registry[type] = component;
        return this;
    }

    public hydrate(elements: OneElement[]): Form {

        return Form.fromStructure(this._registry, elements);
    }
}
