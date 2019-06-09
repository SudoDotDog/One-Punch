/**
 * @author WMXPY
 * @namespace History
 * @description History
 */

import * as React from "react";

export const useHistory = <T = any>(initState: T):
    [T, (next: T) => void, {
        readonly undo?: () => void;
        readonly redo?: () => void;
        readonly versions: T[];
    }] => {

    const initVersion: number = 0;
    const [versions, setVersions]: [T[], (next: T[]) => void] = React.useState<T[]>([initState]);
    const [current, setCurrent]: [number, (next: number) => void] = React.useState<number>(initVersion);

    const undoable: boolean = current !== 0;
    const redoable: boolean = current !== versions.length - 1;

    const nextVersion = (next: T): void => {
        const nextVersions: T[] = redoable
            ? versions.slice(0, current + 1)
            : versions;

        setVersions([...nextVersions, next]);
        setCurrent(nextVersions.length);
    };

    return [
        versions[current],
        nextVersion,
        {
            undo: undoable ? (() => setCurrent(Math.max(current - 1, 0))) : undefined,
            redo: redoable ? (() => setCurrent(Math.min(current + 1, versions.length - 1))) : undefined,
            versions,
        },
    ];
};
