# Redux Toolkit
 - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our store to our app
 - Slice (cart slice)
 - dispatch (action)
 - Selector


- when you click on this ADD button it dispatches an action which calls an fn() and this function modifies the cart. This fn() is basically known as Reducer. 

  - the reducer modifies the slice(cart) of the redux store,then our slice (data) will be updated. 

  - whenever Cart(Slice) data changes the React auto-magically update the cart on the header using Selector.

  - Header Component subscribed to this store (Redux) using useSelector(Hook).