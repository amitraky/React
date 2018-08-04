# React
  React is a front-end library developed by Facebook. It is used for handling the view layer for web and mobile apps. ReactJS allows us to create reusable UI components. It is currently one of the most popular JavaScript libraries and has a strong foundation and large community behind it

## Basic
  * JSX
  * Component
  * State
  * Props
  * Forms
  * Events
  * Keys
  * Router
  * Flux
  * Higher Order Component (HOC)

## Different phases of React component’s lifecycle ##

     * Initial Rendering Phase: This is the phase when the component is about to start its life journey and make its way to the DOM.
     * Updating Phase: Once the component gets added to the DOM, it can potentially update and re-render only when a prop or state change occurs. That happens only in this phase.
     * Unmounting Phase: This is the final phase of a component’s life cycle in which the component is destroyed and removed from the DOM.

   
##  lifecycle

    1.componentWillMount() – Executed just before rendering takes place both on the client as well as server-side.
	2.componentDidMount() – Executed on the client side only after the first render.
	3.componentWillReceiveProps() – Invoked as soon as the props are received from the parent class and before another render is called.
	4.shouldComponentUpdate() – Returns true or false value based on certain conditions. If you want your component to update, return true else return false. By default, it returns false.
	5.componentWillUpdate() – Called just before rendering takes place in the DOM.
	6.componentDidUpdate() – Called immediately after rendering takes place.
	7.componentWillUnmount() – Called after the component is unmounted from the DOM. It is used to clear up the memory spaces.


## Advanced




