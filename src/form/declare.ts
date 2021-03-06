/**
 * @author WMXPY
 * @namespace Form
 * @description Declare
 */

import * as React from "react";

export type InputType = "text" | "email" | "password" | "number";

export type OneHydratedProps = {

    readonly onChange: (next: Record<string, any>) => void;
    readonly value: Record<string, any>;
};

export type OneInputProps = Partial<{

    readonly onChange: React.ChangeEventHandler<any>;
    readonly type: InputType;
    readonly value: string;
}>;

export type OneButtonProps = Partial<{

    readonly onClick: React.MouseEventHandler<any>;
    readonly children?: any;
}>;

export type OneTextLikeProps = Partial<{
    readonly children?: any;
}>;

export type OneComponentIndex = Partial<{

    button: React.ComponentType<OneButtonProps>;
    input: React.ComponentType<OneInputProps>;

    flag: React.ComponentType<OneTextLikeProps>;
    text: React.ComponentType<OneTextLikeProps>;
    title: React.ComponentType<OneTextLikeProps>;
}>;

export type Expendables = {

    readonly className?: string;
    readonly props?: Record<string, any>;
    readonly key?: string;
};

export type OneElement = ({

    readonly role: "input";
    readonly field: string;
    readonly type?: InputType;
    readonly defaultValue?: string;
} | {

    readonly role: "button";
    readonly text: string;
    readonly onClick: (value: Record<string, any>) => void;
} | {

    readonly role: "text" | "flag" | "title";
    readonly text: string;
}) & Expendables;
