# Node-Intro

In this exercise, you will practice working with Node, NPM, and the *file* API by building a program similar to the standard UNIX utility, [cat 🐈](http://www.linfo.org/cat.html).

## Step 0

1. Run `npm init` to create a Node project inside the project folder.
2. Create a git repository in your project folder.
3. Add `node_modules` to a `.gitignore` file.

## Step 1

In `step1.js`, write a function, `cat`. It should take one argument, `path`, and it should read the file with that path, and print the contents of that file.

## Step 2

1. Copy over your `step1.js` code to `step2.js`.
2. Add a new function, `webCat`. This function should take a URL and, using [axios](https://github.com/axios/axios#installing), read the content of that URL and print it to the console.
3. Modify the code that invoked `cat` so that, based on the command-line args, it decides whether the argument is a file path or a URL and calls either `cat` or `webCat`, respectively.

## Step 3

1. Copy over your `step2.js` code to `step3.js`.
2. Add a feature where, on the command line, you can *optionally* provide an argument to output to a file instead of printing to the console. The argument should look like this: `--out output-filename.txt readfile-or-url`.
3. If `--out` follows your script name, it should take the next argument and use that as the path to write to.
4. Make sure you handle errors trying to write to the file.

Feel free to explore and improve upon these steps to enhance your understanding of Node, NPM, and file handling. Happy coding!
