# Gulp Boilerplate

I can build or start working on lot of landing pages. Across most of these sites, the requirements and types of functionality are often the same.

To save myself some time I created this boilerplate, which aims to achieve the following:

 * Quick set up of folder structure. This folder structure works nicely with both simple landing pages and even bigger Angular apps.
 * Concatinating and minifying javascript into one file.
 * SASS support (this will be minified to one file).
 * Express server so you don't need to worry about installing local servers like MAMP.
 * Consistent code formatting when commit to git (by using <a href="http://editorconfig.org/" target="_blank">.editorconfig</a>).
 * Git ignore so you don't commit `node_modules`.

## Set up

**Project Setup**

1. Open the project in your favourite editor and update lines 2, 4 and 5 in the package.json file.
2. Make sure you have npm, node, gulp and sass installed on your machine.
3. Run `npm install`.
4. Run `gulp`

** Extra Benefits**

1. Install the 'livereload' plugin for your browser: <a href="https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei?hl=en" target="_blank">Chrome</a>, <a href="https://addons.mozilla.org/en-GB/firefox/addon/livereload/" target="_blank">Firefox</a>.
2. Turn 'livereload' on and start coding.

## Code

Below is useful snippets for Google Analytics tracking to help get you starter.

```
ga('send', 'event', 'category', 'action');
ga('send', 'event', 'category', 'action', 'label');
ga('send', 'event', 'category', 'action', 'label', value);  // value is a number.
```

## Useful Plugins

Below have included some of my most commons plugins:

 * <a href="http://www.owlgraphic.com/owlcarousel/" target="_blank">jQuery Owl Carousel</a>
 * <a href="http://brm.io/jquery-match-height/" target="_blank">jQuery Equal Heights</a>
 * <a href="https://jqueryvalidation.org/" target="_blank">jQuery Validate</a>

## Modal Windows

For modal windows I tend to use the boubon.io one. To install this, you need to run the following from your project route:

1. `gem install bourbon`
2. `cd assets/styles/scss`
3. `bourbon install`
4. You will need to `@import bourbon/bourbon';` in your SCSS file.

## Contributing

This format might not cover everyones requirements. If you think something could be improved feel free to fork and submit a pull request.