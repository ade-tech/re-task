## Challenge - Task Application

### Setup

- Create the following in './starter/10-tasks':
  - `Form.tsx` (with a basic return)
  - `List.tsx` (with a basic return)
  - `types.ts`
    - Export a type named 'Task' with the following properties:
      - `id: string`
      - `description: string`
      - `isCompleted: boolean`
- In `index.tsx`, import 'Task' type and set up a state value of type 'Task[]'.
- Also, import and render 'Form' and 'List' in `index.tsx`.

### Form

- Create a form with a single input.
- Set up a controlled input.
- Set up a form submit handler and ensure it checks for empty values.

### Add Task

- In `index.tsx`, create an 'addTask' function that adds a new task to the list.
- Pass 'addTask' as a prop to 'Form'.
- In 'Form', set up the correct type and invoke 'addTask' if the input has a value.

### Toggle Task

- In `index.tsx`, create a 'toggleTask' function that toggles 'isCompleted'.
- Pass the function and list as props to 'List'.
- In `List.tsx`:
  - Set up the correct type for props.
  - Render the list.
  - Set up a checkbox in each item and add an 'onChange' handler.
  - Invoke the 'toggleTask' functionality.

### Local Storage

- Incorporate LocalStorage into the application.

## 10 - Tasks

- create Form, List components
