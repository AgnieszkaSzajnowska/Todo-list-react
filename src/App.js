import Form from "./form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import React, { useState } from 'react';

const tasks = [
  { id: 1, content: "wypić kawę", done: false },
  { id: 2, content: "iść do sklepu", done: true },
];

function App() {
  const [hideDone, setHideDone] = useState(false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie"
        body={<Form />} />
      <Section title="Lista zadań"
        body={
        <Tasks
          tasks={tasks}
          hideDone={hideDone}
        />}
        extraHeaderContent={
        <Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
        />} />
    </Container>
  );
}

export default App;
