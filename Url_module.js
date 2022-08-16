import { URL } from 'url';

const myURL = new URL('https://example.org:81/foo#bar');

console.log(myURL.href);        //output: https://example.org:81/foo#bar

console.log(myURL.protocol);    //output: https:

console.log(myURL.host);         // output: example.org:81

console.log(myURL.port);         // output: 81

console.log(myURL.hash);         // output: #bar