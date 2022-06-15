const generateUserCards = (users) => {
  return users
    .map((user) => {
      return `<div class="card" style="width: 18rem">
      <img src="${user.imageUrl}" class="card-img-top" alt="${user.name}" />
      <div class="card-body">
        <h5 class="card-title">${user.name}</h5>
        <p class="card-text">${user.username}</p>
        <a href="${user.githubUrl}" class="btn btn-primary">View Profile</a>
      </div>
    </div>`;
    })
    .join("");
};

const generateHtml = (users) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>GitHub Users</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <h1 class="text-center m-3">My Favourite GitHub Users</h1>
        <div class="d-flex flex-row flex-wrap justify-content-center">
          ${generateUserCards(users)}
        </div>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>`;
};

module.exports = {
  generateHtml,
};
