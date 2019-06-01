/**
 * @author WMXPY
 * @namespace Basic
 * @description Basic
 * @override Story
 */

import * as React from "react";
import { One } from "../../src/one";

export const punch = One.create()
    .register('input', () => <input></input>);

export const Basic = () => <div>123</div>;
