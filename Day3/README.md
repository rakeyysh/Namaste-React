
 - npm run start is same as npm start to run our script which we have added in package.json to avoid writing npx parcel index.html again and again , it executes the pakage parcel with index.html because we have configure this in our package.json

- we can write React without JSX also, but JSX makes our developer life easy. JSX is separate and React is separate.

- JSX is not HTML inside Javascript, we can say it is HTML/XML like syntax. it is diffferent from HTML.

- # How Javascript understands this code?
- it is transpiled(converted) before it reaches the Javascript Engine by Parcel using Babel.

- # Babel
- Babel is a Javascript compiler .
- Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current     older browsers or environments.

- to give attributes in JSX use camelCase words.
- if you have to write JSX in multilple lines , it is mandatory to wrappe it inside a round-brackets ( ... )

- JSX ==> Babel transpiles it to -- React.createElement => ReactElement => JS Object => HTML Element(render) 

- # React Components

- # React Functional components
- the javascript functions which returns JSX code/ReactElement is known as React Components.

- whenever creating a components in React ,declare Name with the first letter as capital one. this is the way of react to understand components.

- To Put/Render any component inside another component use <react-component/> 
- You can inject any javascript code inside JSX using { any JS code}.
- To put any react-element inside JSX same way {react-element} (at last react element is also a JS- code)
- You can also put functional-component inside React Element.