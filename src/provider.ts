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

    const children: React.ReactElement[] = React.Children.toArray(props.children);

    for (const frame of children) {
        if (frame.props.name) {

        }
    }

    console.log(children);

    return null;
};
