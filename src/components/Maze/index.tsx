import { Cell } from 'components/Cell';
import { useTime } from 'hooks/useTime';
import { ICell } from 'interface/ICell';
import { IGraph } from 'interface/IGraph';
import { IMaze } from 'interface/IMaze';
import { INodeCell } from 'interface/INode';
import { useEffect, useState } from 'react';
import { GraphSetupService } from 'service/GraphSetupService';
import { MouseService } from 'service/MouseService';

import { Container, StyledMaze } from './styles';

interface MazeProps {
    maze: IMaze;
    restartMaze: boolean;
    setRestartMaze: React.Dispatch<React.SetStateAction<boolean>>;
    graphMouse: IGraph | null;
    setGraphMouse: React.Dispatch<React.SetStateAction<IGraph | null>>;
    setMazeGraph: React.Dispatch<React.SetStateAction<IMaze | null>>;
}
export function Maze({ maze, restartMaze, setRestartMaze, graphMouse, setGraphMouse,setMazeGraph }: MazeProps) {
    const [mouseMaze, setMouseMaze] = useState<IMaze>({ ...maze });
    const [initialTime, setInitialTime] = useState<number>(0);
    const {handleApplyTime} = useTime();

    useEffect(() => {
        if (restartMaze) {
            const oldGrid = maze?.grid;
            if (oldGrid) {
                for (let i = 0; i < oldGrid?.length; i++) {
                    const innerArrayLenght = oldGrid[i].length;
                    for (let j = 0; j < innerArrayLenght; j++) {
                        oldGrid[i][j].visitedMouse = false;
                    }
                }
                setMouseMaze({ ...(mouseMaze as IMaze), grid: oldGrid, current: mouseMaze?.initial as ICell });
                setGraphMouse(GraphSetupService.setupGraphs(oldGrid.length));
                setRestartMaze(false);
                setInitialTime(performance.now());
            }
        }
    }, [restartMaze]);
    useEffect(() => {
        setMazeGraph(mouseMaze)
    },[mouseMaze]);
    useEffect(() => {
        if (maze) {
            if (maze.initial && maze.final) {
                const mazeUpdate = maze;
                setGraphMouse(GraphSetupService.setupGraphs(maze.grid.length));
                setMouseMaze({ ...mazeUpdate, stack: [] });
                setInitialTime(performance.now());   
            }
        }
    }, []);

    function addNodesAndUpdateAdjList(graph: IGraph, currentCell: ICell, neighbors: ICell[]) {
        if (!GraphSetupService.checkIfNodeExistInGraph(graph, currentCell.numberCell)) {
            GraphSetupService.addNode(graph, currentCell);
        }
        const node = graph.listNode.get(currentCell.numberCell) as INodeCell;
        for (let i = 0; i < neighbors.length; i++) {
            if (!GraphSetupService.checkIfNodeExistInGraph(graph, neighbors[i].numberCell)) {
                GraphSetupService.addNode(graph, neighbors[i]);
            }
            const neighborNode = graph.listNode.get(neighbors[i].numberCell) as INodeCell;

            GraphSetupService.addNodeInAdjacencyList(node, neighborNode, graph);
        }
    }

    function removeFromArray(cell: ICell, array: ICell[]) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (array[i].numberCell == cell.numberCell) array.splice(i, 1);
        }
    }
    useEffect(() => {
        if (mouseMaze && graphMouse) {
            
            const currentMouse = mouseMaze.current;
            currentMouse.visitedMouse = true;
            currentMouse.current = false;
            const graphUpdate = graphMouse;
            const gridUpdate = mouseMaze.grid;
            const stackUpdate = mouseMaze.stack;

            gridUpdate[currentMouse.rowNum][currentMouse.colNum] = currentMouse;

            if (currentMouse.numberCell == mouseMaze.final?.numberCell) {
                console.log('finish')
                const endTime = performance.now();
                const finalTime = endTime - initialTime;
        
                handleApplyTime({
                    timeInMiliseconds: finalTime,
                    timeInSeconds: finalTime / 1000
                })
                return;
            }
        
            const neighbors = MouseService.checkNeighbors(currentMouse, mouseMaze.grid);
            addNodesAndUpdateAdjList(graphUpdate as IGraph, currentMouse, neighbors);
            const chosenNeighbor = MouseService.chooseNeighboor(neighbors);

            if (chosenNeighbor) {
                chosenNeighbor.current = true;
                removeFromArray(chosenNeighbor, neighbors);
                for (let i = 0; i < neighbors.length; i++) {
                    stackUpdate.push(neighbors[i]);
                }
                gridUpdate[chosenNeighbor.rowNum][chosenNeighbor.colNum] = chosenNeighbor;
                setMouseMaze({ ...mouseMaze, current: chosenNeighbor, grid: gridUpdate, stack: stackUpdate });
            } else if (stackUpdate.length > 0) {
                const currentMouse = stackUpdate.pop() as ICell;
                setMouseMaze({ ...mouseMaze, current: currentMouse, stack: stackUpdate });
            }
        }
    }, [mouseMaze]);

    return (
        <Container width={mouseMaze?.width ? mouseMaze?.width : 600}>
            <StyledMaze width={mouseMaze?.width ? mouseMaze?.width : 600}>
                {mouseMaze &&
                    mouseMaze.grid.map((row, index) => (
                        <div key={index}>
                            {row.map((cell, index) => (
                                <Cell key={index} cell={cell} widthCell={mouseMaze.witdhCell}></Cell>
                            ))}
                        </div>
                    ))}
            </StyledMaze>
        </Container>
    );
}
