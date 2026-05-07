axios.get('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    const data = response.data;
    const ekranchiqargich = document.getElementById("posts");
    data.forEach((users) => {
      const { id, name, username, email } = users;
      const ekranchiqar = document.createElement("div");
      ekranchiqar.className = "user";
      ekranchiqar.innerHTML = `

        <h2>${name}</h2>
        <p>ID: ${id}</p>
        <p>Username: ${username}</p>
        <p>Email: ${email}</p>


      `;
      ekranchiqargich.appendChild(ekranchiqar);
    });
  });
