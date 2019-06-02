/**
 * @author WMXPY
 * @namespace One
 * @description Provider
 */

import * as React from "react";

export type FrameProviderProps = {

    readonly children: any;
};

export const FrameProvider: React.FC<FrameProviderProps> = (props: FrameProviderProps) => {

    if (!props.children) {
        return null;
    }

    props.children.find((slot) => console.log(slot));
};
