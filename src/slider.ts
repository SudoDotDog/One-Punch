/**
 * @author WMXPY
 * @namespace One
 * @description Slider
 */

import * as React from "react";

export type SliderProps = {

    readonly children: any;
    readonly active: string;

    readonly default?: string;
};

export const Slider: React.FC<SliderProps> = (props: SliderProps): React.ReactElement => {

    if (!props.children) {
        return null;
    }

    const children: React.ReactElement[] = React.Children.toArray(props.children);

    for (const frame of children) {

        const type: any = frame.type;

        if (type.displayName === "Frame"
            && frame.props.name === props.active) {

            return frame;
        }
    }

    for (const frame of children) {

        const type: any = frame.type;

        if (type.displayName === "Frame"
            && frame.props.name === props.default) {

            return frame;
        }
    }

    return null;
};
