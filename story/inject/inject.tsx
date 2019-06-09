/**
 * @author WMXPY
 * @namespace Inject
 * @description Inject
 * @override Story
 */

import * as React from "react";
import { OneButtonProps, OneInputProps } from "../../src/form/declare";
import { One } from "../../src/form/one";

export const punch = One.create()
    .register('button', (props: OneButtonProps) =>
        <button
            style={{ backgroundColor: 'red' }}
            onClick={props.onClick}
        >
            {props.children}
        </button>)
    .register('input', (props: OneInputProps) =>
        <input
            style={{ backgroundColor: 'red' }}
            onChange={props.onChange}
            type={props.type}
            value={props.value}
        />);

const form = punch.hydrate([
    {
        role: 'button',
        text: 'Hello',
        onClick: (value) => alert(JSON.stringify(value)),
    },
    {
        role: 'input',
        field: 'qqq',
    },
]);

export const Inject: React.FC = () => {

    const [value, setValue] = React.useState(form.initValue);

    return (<div>
        <div>
            {JSON.stringify(value, null, 2)}
        </div>
        <form.Component
            value={value}
            onChange={(next: any) => {
                setValue(next);
            }}
        >
        </form.Component>
    </div>);
};
