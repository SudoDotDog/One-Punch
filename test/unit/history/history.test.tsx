/**
 * @author WMXPY
 * @namespace History
 * @description History
 * @override Unit
 */

import { expect } from "chai";
import * as Chance from 'chance';
import { useHistory } from "../../../src/history/history";
import { testHook } from "../../mock/testHook";

describe.only('Given a [useHistory] React Hook', (): void => {

    const chance: Chance.Chance = new Chance('one-punch-history-history');

    let history: any;
    let hook: any;

    beforeEach((): void => {
        hook = testHook((): void => {
            history = useHistory(0);
        });
    });

    it('should be able to get history', (): void => {

        expect(history[0]).to.be.equal(0);
        expect(history[1]).to.be.instanceOf(Function);
    });

    it('should be able to access history status', (): void => {

        // tslint:disable-next-line
        expect(history[2]).to.be.null;
        // tslint:disable-next-line
        expect(history[3]).to.be.null;
        expect(history[4]).to.be.lengthOf(1);
    });
});

