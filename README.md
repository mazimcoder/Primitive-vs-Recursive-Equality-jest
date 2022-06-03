<h1><em>Primitive</em> vs <em>Recursive</em> Equality Example in <strong>javascript</strong> using jest</h1>
<br>

Deep Equality test would take the object's reference into account despite the equal properties' names, keys and values.
``` javascript
  {ab:[a:1,b:2,c:3]} === {ab:[a:1,b:2,c:3]} = false
```
In this Example the arrays will be tested in deep and primitive equality using jest along with recursive test
<br>
- Install npm first
``` bash
npm install
```
<br>

- run jset

``` bash
npm test
```
  
  
