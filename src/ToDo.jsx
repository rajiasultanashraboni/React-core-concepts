// export default function ToDo({ task, isDone }) {
//   return <li>Task:{task}</li>;
// }

// consditional rendering 1
// export default function ToDo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished:{task}</li>;
//   } else {
//     return <li>Work on:{task}</li>;
//   }
// }

// conditional rendering 2
// export default function ToDo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished:{task}</li>;
//   }
//   return <li>Work on:{task}</li>;
// }

//conditional rendering 3

// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "finished" : "work on"}:{task}
//     </li>
//   );
// }

//conditional rendering option 4:

// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone && ":done"}
//     </li>
//   );
// }
// conditional rendering option 5
// export default function ToDo({ task, isDone }) {
//   return (
//     <li>
//       {task}
//       {isDone || ":do it"}
//     </li>
//   );
// }

// conditional rendering 2
6;
export default function ToDo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>Finished:{task}</li>;
  } else {
    listItem = <li>Work on:{task}</li>;
  }
  return listItem;
}
