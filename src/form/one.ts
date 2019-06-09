/**
 * @author WMXPY
 * @namespace One
 * @description One
 */

import { OneComponentIndex, OneElement } from "./declare";
import { Form } from "./form";

export class One {

    public static create(className?: string): One {

        return new One(className);
    }

    private readonly _registry: OneComponentIndex;
    private readonly _className?: string;

    private constructor(className?: string) {

        this._registry = {};
        this._className = className;
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

        return Form.fromStructure(
            this._registry,
            elements,
            this._className,
        );
    }
}
