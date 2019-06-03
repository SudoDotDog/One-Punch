/**
 * @author WMXPY
 * @namespace One
 * @description Hydrate
 */

import { _Map } from "@sudoo/bark/map";
import * as React from "react";
import { OneComponentIndex, OneElement, OneHydratedProps } from "./declare";

export const createInitValue = (elements: OneElement[]): Record<string, any> => {

    return elements.reduce((previous: Record<string, any>, element: OneElement) => {

        switch (element.role) {
            case 'input': return {
                ...previous,
                [element.field]: element.defaultValue || '',
            };
        }

        return previous;
    }, {});
};

export const createHydrateComponent = (index: OneComponentIndex, elements: OneElement[]): React.FC<OneHydratedProps> => {

    const Hello: React.FC<OneHydratedProps> = (props: OneHydratedProps): React.ReactElement | null => {

        const parsed = elements.map((element: OneElement, order: number) => {

            const common: Record<string, any> = {
                className: element.className,
                key: element.key || order + 1,
                props: element.props,
            };

            switch (element.role) {
                case 'button': return React.createElement(index.button || 'button', {
                    ...common,
                    onClick: () => element.onClick(props.value),
                }, element.text);
                case 'input': return React.createElement(index.input || 'input', {
                    ...common,
                    onChange: (next: React.ChangeEvent<HTMLInputElement> | string) => {
                        if (typeof next === 'string') {
                            props.onChange(_Map.lash_mutate(props.value, element.field, next));
                        } else {
                            props.onChange(_Map.lash_mutate(props.value, element.field, next.target.value));
                        }
                    },
                    type: element.type || 'text',
                    value: props.value[element.field],
                });
            }
            return null;
        });

        return React.createElement(React.Fragment, {}, ...parsed);
    };

    return Hello;
};
