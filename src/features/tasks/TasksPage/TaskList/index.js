import { useSelector, useDispatch } from "react-redux";
import { List, ListItem, Button, TasksContainer, StyledLink } from "./styled";
import { removeTask, toggleTaskDone, selectHideDone } from "../../tasksSlice";
import { selectTasksByQuery } from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";

const TaskList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <ListItem
          key={task.id}
          $hidden={hideDone && task.done}
        >
          <Button
            onClick={() =>
              dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </Button>
          <TasksContainer
            $done={task.done}>
            <StyledLink to=
              {toTask({ id: task.id })}>{task.content}
            </StyledLink>
          </TasksContainer>
          <Button $remove onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;