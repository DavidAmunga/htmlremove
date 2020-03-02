### htmlremove
Removed HTML tags from html string to return plain text

## Setup
```
npm install htmlremove
yarn install htmlremove
```


## Usage
var htmlremove = require('htmlremove);


var html = " <div> May the force be with <a href="#">you</a>. I love <strong>Batman</strong> ";

html = htmlremove(html);

//output 'May the force be with you. I love Batman'