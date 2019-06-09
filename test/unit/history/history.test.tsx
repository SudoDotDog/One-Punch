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

    const initValue: number = chance.natural();
    let history: any;

    beforeEach((): void => {
        testHook((): void => {
            history = useHistory(initValue);
        });
    });

    it('should be able to get history', (): void => {

        expect(history[0]).to.be.equal(initValue);
        expect(history[1]).to.be.instanceOf(Function);
    });

    it('should be able to access history status', (): void => {

        // tslint:disable-next-line
        expect(history[2].undo).to.be.undefined;
        // tslint:disable-next-line
        expect(history[2].redo).to.be.undefined;
        expect(history[2].versions).to.be.lengthOf(1);
    });

    it('should be able to add history', (): void => {

        const next: number = chance.natural();
        const addVersion: (next: number) => void = history[1];

        addVersion(next);

        // tslint:disable-next-line
        expect(history[2].undo).to.be.not.undefined;
        // tslint:disable-next-line
        expect(history[2].redo).to.be.undefined;
        expect(history[2].versions).to.be.lengthOf(2);

        expect(history[0]).to.be.equal(next);
    });

    it('should be able to undo', (): void => {

        const next: number = chance.natural();
        const addVersion: (next: number) => void = history[1];

        addVersion(next);

        // tslint:disable-next-line
        expect(history[2].undo).to.be.not.undefined;
        // tslint:disable-next-line
        expect(history[2].redo).to.be.undefined;
        expect(history[2].versions).to.be.lengthOf(2);

        expect(history[0]).to.be.equal(next);

        history[2].undo();

        // tslint:disable-next-line
        expect(history[2].undo).to.be.undefined;
        // tslint:disable-next-line
        expect(history[2].redo).to.be.not.undefined;
        expect(history[2].versions).to.be.lengthOf(2);

        expect(history[0]).to.be.equal(initValue);
    });

    it('should be able to redo', (): void => {

        const next: number = chance.natural();
        const addVersion: (next: number) => void = history[1];

        addVersion(next);

        // tslint:disable-next-line
        expect(history[2].undo).to.be.not.undefined;
        // tslint:disable-next-line
        expect(history[2].redo).to.be.undefined;
        expect(history[2].versions).to.be.lengthOf(2);

        expect(history[0]).to.be.equal(next);

        history[2].undo();

        // tslint:disable-next-line
        expect(history[2].undo).to.be.undefined;
        // tslint:disable-next-line
        expect(history[2].redo).to.be.not.undefined;
        expect(history[2].versions).to.be.lengthOf(2);

        expect(history[0]).to.be.equal(initValue);

        history[2].redo();

        // tslint:disable-next-line
        expect(history[2].undo).to.be.not.undefined;
        // tslint:disable-next-line
        expect(history[2].redo).to.be.undefined;
        expect(history[2].versions).to.be.lengthOf(2);

        expect(history[0]).to.be.equal(next);
    });
});

