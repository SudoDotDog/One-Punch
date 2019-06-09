/**
 * @author WMXPY
 * @namespace Basic
 * @description Basic
 * @override Story
 */

import * as React from "react";
import { One } from "../../src/form/one";

export const punch = One.create();
// .register('input', () => <input></input>)
// .register('button', (props: any) => <button>{props.children}</button>);

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

export const Basic: React.FC = () => {

    const [value, setValue] = React.useState(form.initValue);

    return <form.Component
        value={value}
        onChange={(next: any) => {
            console.log(next);
            setValue(next);
        }}
    >
    </form.Component>;
};
