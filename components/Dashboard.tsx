"use client";
import { useCallback } from "react";
import {
  DragDropContext,
  Droppable,
  DropResult,
  DraggableLocation,
} from "react-beautiful-dnd";
import Column from "./Column";
import { useBoard } from "@/context/BoardContext/BoardContext";
import useWindowSize from "@/hooks/useWindowSize";

export default function Dashboard() {
  const { boardState, dispatch } = useBoard();
  const { isMobile } = useWindowSize();

  const onBeforeCapture = useCallback(() => {

  }, []);
  const onBeforeDragStart = useCallback(() => {

  }, []);
  const onDragStart = useCallback(() => {

  }, []);
  const onDragUpdate = useCallback(() => {

  }, []);
  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return; 

      const source: DraggableLocation = result.source;
      const destination: DraggableLocation = result.destination;

      if (result.type === "COLUMN") {
        dispatch({ type: "MOVE_COLUMN", payload: { source, destination } });
        return;
      }
  
      if (result.type === "TASK") {
        dispatch({ type: "MOVE_TASK", payload: { source, destination } });
      }
    },
    [dispatch]
  );

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <Droppable
        droppableId="dashboard"
        type="COLUMN"
        direction={isMobile ? "vertical" : "horizontal"}
      >
        {(provided, snapshot) => (
          <ul
            className="grid md:grid-cols-3 gap-3"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {boardState.ordered.map((key, index) => (
              <Column
                key={key}
                index={index}
                listTitle={key}
                listOfTasks={boardState.columns[key]}
              />
            ))}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
}
