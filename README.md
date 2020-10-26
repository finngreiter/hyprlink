# hyprlink

## example:

```javascript
const hyprlink = require('hyprlink');
console.log(
  hyprlink(
    'The most popular search engine in the world is Google: https://google.com ( there is also bing: https://bing.com )'
  )
);
```

returns: `[ 'The most popular search engine in the world is Google: ', 'https://google.com', ' ( there is also bing: ', 'https://bing.com', ' )' ]`
