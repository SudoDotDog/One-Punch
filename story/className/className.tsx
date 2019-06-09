/**
 * @author WMXPY
 * @namespace ClassName
 * @description ClassName
 * @override Story
 */

import * as React from "react";
import { One } from "../../src/form/one";

export const punch = One.create('test');

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

export const ClassName: React.FC = () => {

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
