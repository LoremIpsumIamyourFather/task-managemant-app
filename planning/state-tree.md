# State Tree
The shape of data in the application, and where each piece lives.

├── tasks: [
│ { id: number, text: string, completed: boolean }
│ ]
├── filter: "all" | "completed" | "incomplete"
│
└── ContactForm (self-contained)
└── formData: {
firstName: string,
lastName: string,
email: string,
comments: string
}


## Notes

- `tasks` and `filter` live in the App component and are passed down as props
- Each task has three fields: `id` (unique), `text` (the task itself), and `completed` (boolean)
- `filter` determines which subset of tasks is displayed
- `ContactForm` manages its own form state independently — it doesn't need to interact with the task list