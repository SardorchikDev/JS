const request = new XMLHttpRequest();
request.addEventListener("load", function() {
  if (request.readyState === 4 && request.status === 200) {
    const data = JSON.parse(this.responseText);
    const ekranchiqargich = document.getElementById("posts");
    data.forEach((todo) => {
      const { title, id, completed } = todo;
      const ekranchiqar = document.createElement("div");
      ekranchiqar.className = "post " + (completed ? "completed" : "not-completed");
      ekranchiqar.innerHTML = `

        <h2>${title}</h2>
        <p>ID: ${id}</p>
        <p>Completed: ${completed ? "true" : "false"}</p>

        
      `;
      ekranchiqargich.appendChild(ekranchiqar);
    });
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
