/**
 * @author WMXPY
 * @namespace History
 * @description History
 */

import * as React from "react";

export const useHistory = <T = any>(initState: T): [T, (next: T) => void, void | null, void | null] => {

    const [versions, setVersions] = React.useState<T[]>([initState]);
    const [current, setCurrent] = React.useState<number>(0);

    const undoable: boolean = current !== 0;
    const redoable: boolean = current !== versions.length - 1;

    const nextVersion = (next: T): void => {
        const nextVersions = redoable
            ? versions.slice(0, current + 1)
            : versions;

        setVersions([...nextVersions, next]);
        setCurrent(nextVersions.length);
    };

    return [
        versions[current],
        nextVersion,
        undoable ? setCurrent(Math.max(current - 1, 0)) : null,
        redoable ? setCurrent(Math.min(current + 1, versions.length - 1)) : null,
    ];
};
