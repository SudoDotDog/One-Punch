/**
 * @author WMXPY
 * @namespace Mock
 * @description Hook
 */

import { shallow } from 'enzyme';
import * as React from 'react';

export const TestHook = (props: any) => {
    props.callback();
    return null;
};

export const testHook = (callback: any) => {
    return shallow(<TestHook callback={callback} />);
};
