## project name
go here to write a good readme https://readme.so/editor
```
put code in 3 backticks to be copyable
```
![react-badge.svg](public/images/react-badge.svg)
![vitejs-badge.svg](public/images/vitejs-badge.svg)

1. Create a new vite react project in webstorm, then npm install when asked
2. go to the git tab on the bottom, and create a local repo. Now add all our files to git to make a first commit on local main
3. at the top toolbar click git -> git branches, now create a *test* branch. This is safer and best practice to only commit important updates on main.
4. go to git -> manage remotes, now add the http link to this repo
5. on the git tab, click fetch remotes, this adds a remote commit with all the files we want, on the new repo
6. now right-click the remote commit from the *testing* branch and **cherry-pick** its files.
7. we pick "accept theirs" to all files. Now remove any files left over and not in use, such as app.css
8. right click the remote *testing* commit and remove it, then remove this remote branch
9. now add the remove ssh link to our actual project. checkout local *main* branch and rebase onto the local test branch
10. we're all caught up. checkout the test branch to make our project, and push to the remote test branch
11. when we have a big update, rebase it onto the main branch then push to the main remote