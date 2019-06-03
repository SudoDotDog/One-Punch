/**
 * @author WMXPY
 * @namespace One
 * @description Declare
 */

import * as React from "react";

export type InputType = "text" | "email" | "password" | "number";

export type OneHydratedProps = {

};

export type OneInputProps = {

    readonly onChange: (next: string) => void;
    readonly type: InputType;
    readonly value: string;
};

export type OneButtonProps = {

    readonly onClick: () => void;
};

export type OneComponentIndex = Partial<{

    input: React.ComponentType<OneInputProps>;
    button: React.ComponentType<OneButtonProps>;
}>;

export type OneStructure = Record<string, OneElement>;

export type Expendables = {

    readonly className?: string;
    readonly props?: Record<string, any>;
};

export type OneElement = {

    readonly role: "input";
    readonly type: InputType;
    readonly defaultValue: string;
} & Expendables | {

    readonly role: "button";
    readonly onClick: () => void;
} & Expendables;
