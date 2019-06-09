/**
 * @author WMXPY
 * @namespace Frame
 * @description Frame
 */

import * as React from "react";

export type FrameProps = {

    readonly children?: any;
    readonly frame: string;
};

export const Frame: React.FC<FrameProps> = (props: FrameProps) => {

    return props.children;
};
