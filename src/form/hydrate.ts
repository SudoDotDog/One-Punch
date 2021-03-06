/**
 * @author WMXPY
 * @namespace Form
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

export const createDivCoveredElement = (
    type: React.FunctionComponent | React.ComponentClass | string,
    props: Record<string, any> | null,
    children: React.ReactNode[],
    className?: string,
): React.ReactElement => {

    return React.createElement('div', {
        className,
    }, React.createElement(type, props, ...children));
};

export const createHydrateComponent = (
    index: OneComponentIndex,
    elements: OneElement[],
    className?: string,
): React.FC<OneHydratedProps> => {

    const Hydrated: React.FC<OneHydratedProps> = (props: OneHydratedProps): React.ReactElement | null => {

        const parsed = elements.map((element: OneElement, order: number) => {

            const common: Record<string, any> = {
                className: element.className,
                key: element.key || `key__${order}`,
                props: element.props,
            };

            switch (element.role) {
                case 'button':
                    return createDivCoveredElement(
                        index.button || 'button',
                        {
                            ...common,
                            onClick: () => element.onClick(props.value),
                        },
                        [element.text],
                        className,
                    );
                case 'input':
                    return createDivCoveredElement(
                        index.input || 'input',
                        {
                            ...common,
                            onChange: (next: React.ChangeEvent<HTMLInputElement>) => {
                                props.onChange(_Map.lash_mutate(props.value, element.field, next.target.value));
                            },
                            type: element.type || 'text',
                            value: props.value[element.field],
                        },
                        [],
                        className,
                    );
                case 'text':
                    return createDivCoveredElement(
                        index.text || 'span',
                        {
                            ...common,
                        },
                        [element.text],
                        className,
                    );
                case 'flag':
                    return createDivCoveredElement(
                        index.flag || 'span',
                        {
                            ...common,
                        },
                        [element.text],
                        className,
                    );
                case 'title':
                    return createDivCoveredElement(
                        index.title || 'span',
                        {
                            ...common,
                        },
                        [element.text],
                        className,
                    );
            }

            return null;
        });

        return React.createElement(React.Fragment, {}, ...parsed);
    };

    return Hydrated;
};
