function AddTodoForm() { //function AddTodoForm(): The component function. Capitalized because it is a React component and React components must start w/ a capital letter. If it is lowercase, React thinks it's a standard HTML tag (like <div> or <span>).//
  return (
    <form>{/*Just like HTML, but in JSX, you can use the > tag to create a form.*/}

      <input type="text" placeholder="Add a new task..." />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTodoForm; //Makes the component available so other files can import it.//