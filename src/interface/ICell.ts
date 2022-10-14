export interface ICell {
    rowNum: number;
    colNum: number;
    walls: Array<boolean>;
    visited: boolean;
    visitedMouse: boolean;
    current: boolean;
    initial: boolean;
    final: boolean;
}
