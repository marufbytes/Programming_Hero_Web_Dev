const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayPost(data);
        });
};

const displayPost = (posts) => {
    // 1. Get the container & empty the container
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = '';

    posts.forEach((post) => {
        const postCard = document.createElement("div");

        postCard.innerHTML = `
            <div class="post-card">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;

        // 3. add to the container
        postContainer.append(postCard);
    });
};

loadPost();