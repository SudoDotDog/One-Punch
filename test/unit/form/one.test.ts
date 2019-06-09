/**
 * @author WMXPY
 * @namespace Form
 * @description One
 * @override Unit
 */


import { expect } from "chai";
import * as Chance from 'chance';
import { One } from "../../../src/form/one";

describe('Given a {One} Class', (): void => {

    const chance: Chance.Chance = new Chance('one-punch-one');

    it('should be able to construct class', (): void => {

        const one: One = One.create();

        expect(one).to.be.instanceOf(One);
    });

    it('should be able to register component', (): void => {

        const type: any = chance.string();
        const value: any = chance.string();

        const one: One = One.create();
        one.register(type, value);

        expect(one.component(type)).to.be.equal(value);
        // tslint:disable-next-line
        expect(one.component(chance.string() as any)).to.be.null;
    });
});

