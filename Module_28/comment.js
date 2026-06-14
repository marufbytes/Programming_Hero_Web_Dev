const LoadComment = () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    fetch(url)
        .then(res => res.json())
        .then(data => displayComment(data));
}

const displayComment = (comments) => {

    const commentContainer = document.getElementById('comment-container'); 
    commentContainer.innerHTML = "";

    comments.forEach(comment => { 
        const div = document.createElement('div'); 

        div.innerHTML = `
        <div class="comment-card">
            <h2>${comment.name}</h2>
            <h4>${comment.body}</h4>
        </div>
        `;

        commentContainer.append(div);
    });
}

LoadComment();