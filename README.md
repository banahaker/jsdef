# JSDef
A Define tool for js/ts
# Install
```bash
npm i jsdefn
```
# HOW TO
1. Create Defs
```js
import { JSDef } from 'jsdefn'
const $ = JSDef({
    "A": "apple"
})
```
2. Get define 
```js
console.log($.JD("A"))
```
it's will out put `apple` in console  
# define function
There are three way to define
1. constructor
```js
// define when create defs
const $ = JSDef({
    "B": "Banana"
})
```
2. define once
```js
$.def("M", "mongo")
```
3. define many in one time
```js
$.defMany({
    "author": "lazp",
    "time": "2022"
})
```
# License
MIT