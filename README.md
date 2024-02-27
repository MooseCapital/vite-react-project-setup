## project name
go here to write a good readme https://readme.so/editor
```
put code in 3 backticks to be copyable
```
get badges here: [badges 1](https://github.com/aleen42/badges) , [badges 2](https://github.com/Ileriayo/markdown-badges)

![vite-badge](https://badges.aleen42.com/src/vitejs.svg)
![react-badge](https://badges.aleen42.com/src/react.svg)
![tailwind](https://badges.aleen42.com/src/tailwindcss.svg)
![nodejs](https://badges.aleen42.com/src/node.svg)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

1. inside webstorm click new -> 'project from version control' 
2. select our 'vite-react-project-setup'
3. complete the steps below to squash all commits into one

```jsx
rm -rf .git
```
```jsx
git init
```
```jsx
git add .
```
```jsx
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

