const loadTodo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    fetch(url)
        .then(res => res.json())
        .then(data => displayTodo(data))
        .catch(err => console.error("Error fetching data:", err));
};

const displayTodo = (todos) => {
    const todoContainer = document.getElementById('todo-container');
    todoContainer.innerHTML = ""; // Clear existing placeholder or previous data

    todos.forEach((todo) => {
        // Create a wrapper column div for cleaner layout alignment
        const todoCard = document.createElement('div');
        
        todoCard.innerHTML = `
            <div class="todo-card">
                <h4>${todo.title}</h4>
                <p class="status-badge ${todo.completed ? 'done' : 'pending'}">
                    ${todo.completed ? "✓ Completed" : "⟳ Pending"}
                </p>
            </div>
        `;
        
        todoContainer.append(todoCard);
    });
};

// Initialize the fetch operation
loadTodo();