import { Task, TaskMap } from "./types/types";

export const todos: Task[] = [
  {
    id: "1",
    task: "Install Dev enviroment",
    description: "Description with some more text here",
    tag: "Low",
    date: "Sun Jan 21 2024",
  },
  {
    id: "2",
    task: "Build a To-Do App",
    description: "Description with some more text here",
    tag: "Low",
    date: "Sun Jan 21 2023",
  },
  {
    id: "3",
    task: "Review CSS Modules",
    description: "Description with some more text here",
    tag: "Low",
    date: "Sun Jan 21 2023",
  },
];

export const initialState: TaskMap = {
  'ToDo': [
    {
      id: "1",
      task: "Install Dev enviroment",
      description: "Description with some more text here",
      tag: "Low",
      date: "Sun Jan 21 2023",
    },
    {
      id: "2",
      task: "Build a To-Do App",
      description: "Description with some more text here",
      tag: "Low",
      date: "Sun Jan 21 2023",
    },
    {
      id: "3",
      task: "Review CSS Modules",
      description: "Description with some more text here",
      tag: "Low",
      date: "Sun Jan 21 2024",
    },
  ],
  Pending: [],
  Done: [
    {
      id: "4",
      task: "Push in Git",
      description: "Description with some more text here",
      tag: "High",
      date: "2024-10-23",
    },
  ],
};
