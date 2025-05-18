
- # Props
- props are just normal argument to the functions.
- passing a props to the function is just-like passing an argument to the functions.

- when you have to dynamically pass in some data to a component, you pass it as props.
- you can pass any no of props and pass over component and React will wrap all of it inside in an Object.

- # What is Config-Driven UI
- Config Driven UI refers to a software design pattern where the user interface (UI) is dynamically generated based on configuration data,   rather than being hardcoded. This pattern promotes flexibility,

- # 🔑 Purpose of key in JSX:
React uses the key (usually with .map()) to identify which items in a list have changed, been added, or been removed. This helps React minimize re-renders and improve performance during updates. other-wise it will re -render everything if any list have been changed .

- We don’t recommend using indexes for keys if the order of items may change.
- refer article Robin Pokorny(react official docs)
- not using keys(not acceptable) <<<< index as key (not best practice /good)    <<<< unique id (best practice) >>>>>>>>
