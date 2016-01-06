#UI example

1. Hit `npm install` to pull down all the required dependencies
2. Run `gulp` to create the build
3. Navigate your browser to the newly created `dist` folder.

##Notes
* The framework used here is one I built myself inspired by the Inuit Framework and the [https://speakerdeck.com/dafed/managing-css-projects-with-itcss](ITCSS) system that aims to focus only on architecture and not design / skin. 
* The framework has not yet been released to open source but the grid system I use has been released [https://github.com/rbrtsmith/rbrtsmith-grid](rbrtsmith-grid)
* The classnames are based on a BEM hybrid coined as [http://csswizardry.com/2015/08/bemit-taking-the-bem-naming-convention-a-step-further/](BEMMIT).
* The only JavaScript provided is a polyfill to make external SVG sprites
work in IE.