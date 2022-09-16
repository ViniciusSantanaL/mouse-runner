export interface ICell {
    rowNum: number;
    colNum: number;
    walls: Array<boolean>;
    visited: boolean;
}
