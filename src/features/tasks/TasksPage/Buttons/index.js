import { useSelector, useDispatch } from "react-redux";
import { Wrapper, TasksButtons } from "./styled";
import { selectHideDone, toggleHideDone, setAllDone, selectTasks } from "../../tasksSlice";
import ExampleButton from "../ExampleButton";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone)
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ExampleButton
        onClick={() => dispatch(toggleHideDone())}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </ExampleButton>
      <TasksButtons
        onClick={() => dispatch(setAllDone())}
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </TasksButtons>
    </Wrapper>
  );
};

export default Buttons;