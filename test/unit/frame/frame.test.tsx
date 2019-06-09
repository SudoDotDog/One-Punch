/**
 * @author WMXPY
 * @namespace Frame
 * @description Frame
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from 'chance';
import { shallow, ShallowWrapper } from 'enzyme';
import * as React from "react";
import { Frame, FrameProps } from "../../../src/frame/frame";

describe('Given a <Frame /> Component', (): void => {

    const chance: Chance.Chance = new Chance('one-punch-frame');

    const getDefaultProps = (): FrameProps => ({

        frame: chance.string(),
    });

    const render = (props: FrameProps = getDefaultProps(), children: any = chance.string()) => {

        return shallow(
            (<Frame {...props}>
                {children}
            </Frame>),
        );
    };

    it('should be able to extend children', (): void => {

        const text: string = chance.string();
        const component: ShallowWrapper = render(undefined, text);

        expect(component.text()).to.be.equal(text);
    });
});

