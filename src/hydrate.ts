/**
 * @author WMXPY
 * @namespace One
 * @description Hydrate
 */

import { _Map } from "@sudoo/bark/map";
import * as React from "react";
import { OneComponentIndex, OneElement, OneHydratedProps } from "./declare";

export const createHydrateComponent = (index: OneComponentIndex, elements: OneElement[]): React.FC<OneHydratedProps> => {

    return (props: OneHydratedProps): React.ReactElement => {

        const parsed = elements.map((element: OneElement, order: number) => {

            const common: Record<string, any> = {
                className: element.className,
                key: element.key || order,
                props: element.props,
            };

            switch (element.role) {
                case 'button': return React.createElement(index.button || 'button', {
                    ...common,
                    onClick: element.onClick,
                }, element.text);
                case 'input': return React.createElement(index.input || 'input', {
                    ...common,
                    onChange: (next: React.ChangeEvent<HTMLInputElement> | string) => {
                        if (typeof next === 'string') {
                            props.onChange(_Map.mutate(props.value, element.field, next));
                        } else {
                            props.onChange(_Map.mutate(props.value, element.field, next.target.value));
                        }
                    },
                    type: element.type,
                    value: props.value[element.field],
                });
            }
            return null;
        });

        return React.createElement(React.Fragment, {}, parsed);
    };
};
