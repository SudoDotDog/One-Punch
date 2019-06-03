/**
 * @author WMXPY
 * @namespace One
 * @description Declare
 */

import * as React from "react";

export type InputType = "text" | "email" | "password" | "number";

export type OneHydratedProps = {

    readonly onChange: (next: Record<string, any>) => void;
    readonly value: Record<string, any>;
};

export type OneInputProps = Partial<{

    readonly onChange: (next: string) => void;
    readonly type: InputType;
    readonly value: string;
}>;

export type OneButtonProps = Partial<{

    readonly onClick: () => void;
}>;

export type OneComponentIndex = Partial<{

    input: React.ComponentType<OneInputProps>;
    button: React.ComponentType<OneButtonProps>;
}>;

export type Expendables = {

    readonly className?: string;
    readonly props?: Record<string, any>;
    readonly key?: string;
};

export type OneElement = {

    readonly role: "input";
    readonly field: string;
    readonly type?: InputType;
    readonly defaultValue?: string;
} & Expendables | {

    readonly role: "button";
    readonly text: string;
    readonly onClick: (value: Record<string, any>) => void;
} & Expendables;
