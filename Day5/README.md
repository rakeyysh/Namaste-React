 
 
 # - Two types of Export/Imort

 - to export one complete file use export default filename
   - just write export default filename -->>> export default Components;
    - to import  from default export just write --->>>  import file/Component from "file-path";

 - to export multiple things from the same files, you will have to use Named export
     - just write export before the name of the thing
      - to import Named export just write  --- >>>  import { file/Component} from "file-path";

      ...
      # React Hooks
      (Normal JS utility functions)

      - useState() - Superpowerful State Variables in React.
      - useEffect()

      - # What is the Virtual DOM?
        The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

        - React creates the virtual DOM in JS object that mimics the structure of actual DOM.
        - It’s lighter and faster to work with because it's in-memory.

        - # What is “React Fiber”?
        Fiber is the new reconciliation engine in React 16. Its main goal is to enable incremental rendering of the virtual DOM.


        React creates a new Virtual DOM (really, a new Fiber tree) on every render. It does not modify the old Virtual DOM. Instead, it compares the new tree with the old one (reconciliation), figures out the differences, and applies only the necessary updates to the actual DOM. The old Virtual DOM is then discarded (or kept as alternate for future diffing).




      - #  🔁 What Actually Happens:

 - # 1- New Virtual DOM is created

This happens every time your component re-renders (e.g., due to setState).

It’s a new tree of JavaScript objects.

- # 2- React compares old vs. new Virtual DOM

This is the reconciliation/diffing phase.

No DOM changes happen here — React only builds a plan.

- # 3-It does NOT mutate the old virtual DOM

React keeps the old Fiber tree temporarily for comparison (alternate).

After diffing, React may discard it or reuse some nodes.

- # 4 - React marks what needs to change in the actual DOM

Using effect tags (UPDATE, PLACEMENT, DELETION, etc.)

DOM is updated surgically

Only the actual DOM nodes that are affected are touched.

No wholesale re-rendering of DOM nodes.

- # ✅ Summary Phrase You Can Use
"React always builds a new Virtual DOM (Fiber tree) on every render. It never mutates the old one. It then compares the new one to the previous, marks the differences, and finally applies the minimal required updates to the actual DOM. This is the essence of React's efficient UI rendering." 