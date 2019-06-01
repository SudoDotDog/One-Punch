/**
 * @author WMXPY
 * @namespace One
 * @description Hydrate
 */

import * as React from "react";
import { OneComponentIndex, OneHydratedProps, OneStructure } from "./declare";

export const createHydrateComponent = (index: OneComponentIndex, structure: OneStructure): React.FC<OneHydratedProps> => {

    return (props: OneHydratedProps): React.ReactElement => {

        return <div>123</div>;
    };
};
