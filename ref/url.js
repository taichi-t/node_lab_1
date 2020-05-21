const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=q231234123&status=active');

console.log(myUrl.href);
console.log(myUrl.toString());

console.log(myUrl.host);

console.log(myUrl.pathname);

console.log(myUrl.search);

console.log(myUrl.searchParams);

myUrl.searchParams.append('color','white');
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value, name) => {
    console.log(`${name} : ${value}`);
})