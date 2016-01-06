#UI example

1. Hit `npm install` to pull down all the required dependencies
2. Run `gulp` to create the build
3. Navigate your browser to the newly created `dist` folder.

##Notes
* The framework used here is one I built myself inspired by the Inuit Framework and the [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss) system that aims to focus only on architecture and not design / skin. 
* The framework has not yet been released to open source but the grid system I use has been released [rbrtsmith-grid](https://github.com/rbrtsmith/rbrtsmith-grid)
* The classnames are based on a BEM hybrid coined as [BEMIT](http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/).
* The only JavaScript provided is a polyfill to make external SVG sprites
work in IE.
* Minified CSS weight (Before Gzip) 11kb.
* Tested in Chrome44, FF42, Safari 8.