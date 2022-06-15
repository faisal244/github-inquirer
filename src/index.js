const inquirer = require("inquirer");
const fs = require("fs");

const { fetchDataFromApi } = require("./utils/fetcher");
const { generateHtml } = require("./utils/generator");

const init = async () => {
  const questions = [
    {
      type: "input",
      message: "Please enter username:",
      name: "username",
    },
    {
      type: "confirm",
      message: "Would you like to add another username?",
      name: "anotherUsername",
    },
  ];

  let inProgress = true;
  const usernames = [];

  while (inProgress) {
    // prompt question and get answers
    const { username, anotherUsername } = await inquirer.prompt(questions);

    usernames.push(username);

    // check if you want to stop
    if (!anotherUsername) {
      inProgress = false;
    }
  }

  const urls = usernames.map(
    (username) => `https://api.github.com/users/${username}`
  );

  const promises = urls.map((url) => fetchDataFromApi(url));

  const responses = await Promise.all(promises);

  const users = responses.map((response) => ({
    username: response.login,
    imageUrl: response.avatar_url,
    githubUrl: response.html_url,
    name: response.name,
  }));

  const html = generateHtml(users);

  fs.writeFileSync("./profiles.html", html);

  console.log("Successfully generated HTML!!");
};

init();
