import React from 'react'

/* 
In React, a Synthetic Event is a cross-browser wrapper around the browser’s native event system. 
React implements its own event system to ensure consistent behavior across different browsers. 
The SyntheticEvent object is similar to the native event object provided by the browser but works the same across all browsers, 
making event handling more predictable. 

Unified Event System:-
React's event delegation improves performance by attaching just one event listener to the root of the DOM tree 
(for example, the <div id="root"> element where your React app is mounted). 
Instead of each component or element having its own listener, all events (like clicks, key presses, etc.) are captured at the root, 
and React then determines which specific component should handle the event.
When an event occurs (like a click), it bubbles up from the target element(the element that was clicked) to the root element.
React intercepts the event at the root and uses its internal logic to determine which component or element in your 
component tree should handle the event.
This way, React avoids attaching individual event listeners to each DOM element.

Event Pooling (depricated No longer supported from react17+):-
Creating new event objects for every single event (like clicks, keypresses, etc.) can be expensive in terms of memory 
allocation and garbage collection. Pooling helps reduce the number of objects created and subsequently destroyed, 
improving memory efficiency and app performance.
Event pooling in React means that the SyntheticEvent objects are reused after the event handler function has finished executing. 
Instead of creating a new event object every time an event occurs (like a click or keypress), React reuses the same event object
across multiple events to save memory and improve performance.
Once an event has been handled, React nullifies the event object's properties so that the object can be reused for the next event. 
This is called "pooling."
*/

const SyntheticEvent = () => {
  const handleClick = (event) => {
    console.log(event.type);  // "click"
    
    setTimeout(() => {
      console.log(event.type);  // "null" because event is pooled
    }, 1000);
  };
  return (
    <>
    {/* each button has an onClick event handler, React doesn't attach 100 separate click event listeners. 
    Instead, it only has one click event listener at the root. When any button is clicked, React figures out which 
    button was clicked using the event delegation system and triggers the correct onClick handler. */}
      <div>
      {[...Array(100)].map((_, i) => (
        <button key={i} onClick={() => alert(`Button ${i} clicked`)}>
          Button {i}
        </button>
      ))}
    </div>
    <br /><br />
    <button onClick={handleClick}>Event Pooling</button>
    </>
  )
}

export default SyntheticEvent