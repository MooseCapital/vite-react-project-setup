
<div align="center">
<h1 style="text-align: center;">Project name</h1>
  <img src="https://badges.aleen42.com/src/vitejs.svg" alt="vite-badge">
  <img src="https://badges.aleen42.com/src/react.svg" alt="react-badge">
  <img src="https://badges.aleen42.com/src/tailwindcss.svg" alt="tailwind">
  <img src="https://badges.aleen42.com/src/node.svg" alt="nodejs">
<br>
<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="Postgres">
<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express">
<br>
<img src="https://picsum.photos/id/179/500/300" width="600px" height="auto">

</div>


>  put project description here
>  <br>
>  next line

<br>

go here to write a good readme https://readme.so/editor

get badges here: [modern round](https://github.com/aleen42/badges) , [square](https://github.com/Ileriayo/markdown-badges), [square2](https://github.com/alexandresanlim/Badges4-README.md-Profile)


1. inside webstorm click new -> 'project from version control' 
2. select our 'vite-react-project-setup'
3. complete the steps below to squash all commits into one

```jsx
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```
4. create a new project in github with the same name we chose in webstorm
5. copy the ssh git link from github, in webstorm click git -> manage remotes -> add the ssh link
6. in the git tab on the bottom, fetch from the link, now push to the main branch
7. create a new branch called 'test', for good practice use this daily, and use 'main' for major updates
8. npm install, to download everything from package.json

## npm config run scripts
1. At the NPM config at the top, click "edit configurations", then add NPM from the list
2. add all scripts from package.json, to start a local server with, so we can start by clicking the green arrow
3. remember these scripts need the path to where node is installed.
since we use nvm, it won't be in the webstorm directory, but in our home directory .nvm



## gh-pages when finished
For this, we need to be using hash router not BrowserRouter, because BrowserRouter doesn't work with GitHub pages.
 We have no control over Githubs ability
to redirect to our home route each time we refresh the page. So we use hash router. 
We tell our app to make the project base projectname/#/ . 
This way we don't need control over the server, we get routing control for anything after the hash.
Since we will be using our own domain mostly, we might not need, but it's good to remember both routing methods.

1) go to vite.config.js -> after plugins, write base with the current directory on Github

```
base: "/github project directory" 
 ```

3) When we are ready to upload to GitHub pages do this, click the build script, then preview it, then deploy,
    
    ```
    npm run build
     ```

    ```
    npm run preview
     ```

    ```
    npm run deploy
    ```
If it ask for username, give GitHub username, and by "password" it means GitHub access token. If we get the error "github pages already exist"
. Go into node_modules folder -> .cache folder -> delete "gh-pages" -> redeploy

## 🚀 How to use

ex.

## 📝 Lessons Learned

blah blah

## 🪪 License

blah blah