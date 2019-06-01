/**
 * @author WMXPY
 * @namespace One
 * @description Declare
 */

import * as React from "react";

export type OneHydratedProps = {

};

export type OneInputProps = {

    readonly onChange: (next: string) => void;
};

export type OneComponentIndex = {

    input: React.ComponentType<OneInputProps>;
};
