# Kink.com Coding Challenge - Frontend SASS

## Goal

Using the code in this directory as a starting point, build a single page with a navbar and two content sections.
Both the upper and lower sections should be one column wide in mobile and two columns from tablet (768px) and above.

Using a css grid layout is not necessary to complete this assignment, but you’re welcome to use one that natively
works with all browsers.

### Navbar

The navbar should prominently display the included `./assets/images/logo.png`.

### Upper Section

The upper section should display an area that includes some text on the left-hand side and an image on the right-hand
side. Use the included `./assets/images/placeholder.png` image.

### Lower Section

The lower section should display a form on the left-hand side with a username field and a comment field.
The right-hand side should display some comments in a list-like fashion.

### Bonus

The form submits data to the server, which renders it along with a success message. No persistence is needed.

## Guidelines

- All styles should be written using scss.
- If you need to use a grid system, CSS Grid Layout is recommended.
- Please do not use a CSS framework like Bootstrap, Foundation, Bulma, etc.
- Please do not use JavaScript libraries or frontend frameworks such as Vue, React, Angular, Backbone, jQuery, etc.
- If JavaScript is used, use ES6.
- Documentation and maintainability is a plus.

## Getting Started

Make sure you have the current [Node.js](https://nodejs.org/en/) [LTS](https://nodejs.org/en/about/releases/) installed.

Clone the repository.

```bash
git clone https://github.com/Kink-Com/CodingChallenge.git
# Remove the Git history
rm -Rf .git
```

Change directory to the project.

```bash
cd frontend/sass
```

Initialize git.

```bash
git init
git add .
git commit -m "Initial commit."
```

Install dependencies.

```bash
npm install
```

Run the Node.js server.

```bash
node ./index.js
```

Compile and watch for changes in the scss files.

```bash
npm run watch:sass
```

Visit http://localhost:3000 - you should see red text reading "Hello, world!" on a black background.

To check against our [coding standards](https://github.com/Kink-Com/eslint-config-kink):

```bash
npx eslint .
```

## Submission

Create a new public Git repository in your favorite Git hosting service like GitHub. Do not use a template; keep it empty.

- https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-new-repository

Then, add the remote to your project.

- https://help.github.com/en/github/using-git/adding-a-remote

Commit all your work.

```bash
git add .
git commit -m "Finally"
```

Push the changes in your local repository to GitHub.

```bash
git push origin master
```

Send the URL for the public repository as your submission.

### Time Allotment

We respect your time and would prefer you not spend more than 3 hours. Feel free to include code comments to indicate
any features you don't have time to implement.
