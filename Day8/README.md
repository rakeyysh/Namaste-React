# why do we write super() keyword in class-based components?

- In class-based React components, we write super(props) to initialize the parent class (React.Component) with the props we want to use in our component.

- 🔍 Why is super(props) necessary?
  - super() calls the constructor of the parent class (React.Component).

   - Passing props to super allows you to access this.props inside the constructor.

    - If you don't call super(props), this.props will be undefined in the constructor, and accessing it will throw an error.

    - ❗️You cannot write executable statements (like console.log) directly inside a class body except inside methods or the constructor.


# why do we use componentDidMount() inside class-based component?
 - to make API calls.
 - we write API calls inside componentDidMount() , because react quickly wants to render the data so it renders the data with the basic info 
  - and API load then it re-rendered just like useEffect do in functional components.


  - # 🧠 Summary (Refined Answer):
In class-based components, React follows a two-phase lifecycle: Render Phase (where it builds the virtual DOM by calling constructor() and render() from parent to child) and Commit Phase (where it applies changes to the real DOM and calls componentDidMount() from child to parent). React batches DOM updates to improve performance since actual DOM manipulation is expensive. This efficient rendering and commit strategy makes React very fast and optimized.



   - Parent Constructor
    - Parent Render
     
      - First Constructor
     - First Render
  
      - Second Constructor
       - Second Render
  
      < DOM UPDATED - IN SINGLE BATCH >
       - First componentDidMount();
       - Second componentDidMount();
  
   - Parent componentDidMount();
   
 

 # 🔹 componentWillUnmount()
   - This method is called right before a component is unmounted and destroyed. It’s typically used for cleanup tasks such as:

    - Clearing timers or intervals
       - Removing event listeners
         - Canceling network requests

 # 🔹 componentDidUpdate(prevProps, prevState)
    - This method is called immediately after a component updates due to changes in props or state. It's useful for:
      - Reacting to prop or state changes (e.g., fetching new data when a prop changes)
       - Performing side effects after updates .       


 #   # References:
        https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/     
