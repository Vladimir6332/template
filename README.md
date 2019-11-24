# template

Template of project with webpack, eslint, airbnb

Install

1. npm init
2. npm install eslint --save-dev
3. npm install eslint-plugin-import --save-dev
4. check dependdencies: npm info "eslint-config-airbnb-base@latest" peerDependencies
   install airbnb: npx install-peerdeps --dev eslint-config-airbnb-base
5. install webpack: npm install webpack webpack-cli --save-dev
   npm install --save-dev html-webpack-plugin
   npm install copy-webpack-plugin --save-dev
   npm install file-loader --save-dev
   npm install --save-dev css-loader
   npm install --save-dev webpack-dev-server
6. add scripts to packaje.json:
   "scripts": {
   "test": "echo \"Error: no test specified\" && exit 1",
   "start": "webpack-dev-server",
   "build": "webpack -p",
   "watch": "webpack --watch"
   },
