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
5. on the git tab at the bottom, click fetch remotes, this adds a remote commit with all the files we want, on the new repo
6. now right-click the most recent remote commit from the *testing* branch and "revert current branch to here".
7. we pick "accept theirs" to all files. Now remove any files left over and not in use, such as app.css
8. go back to git at the top and manage remotes, remove this repo from our new project
9. now we can remove any other local branches that might have been created from "reverting" our local main to the remote commit. but KEEP our newly created local "test" branch
10. Main and test local branches should be at the same commit, and we should only have one. Now it is time to add the remote commit to our github project link
11. for good practice, use "test" branch daily, then when we have important updates, use the main