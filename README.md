# React Basics - Quick Reference

## 1. What is JSX?

**JSX** (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML/XML.

It allows you to write UI structure inside JavaScript code.

```jsx
const element = <h1>Hello, world!</h1>;
```

## 2. What is the difference between State and Props?

| Feature        | Props                            | State                               |
| -------------- | -------------------------------- | ----------------------------------- |
| **Definition** | Data passed from parent to child | Internal, private data of component |
| **Mutable?**   | Immutable (read-only)            | Mutable (can be changed)            |
| **Who owns?**  | Parent component                 | The component itself                |
| **Changed by** | Parent re-renders                | `setState` / `useState` setter      |
| **Purpose**    | Communication downward           | Manage dynamic UI / user input      |

## 3. What is the useState hook, and how does it work?

`useState` is a **React Hook** that lets us add and manage **state** in functional components.

Before Hooks, state was only available in class components.  
`useState` makes it possible to use state in function components.

### How useState Hook Works – Step by Step

1. **First Render (Component mounts)**
   ```jsx
   const [count, setCount] = useState(0);
   ```
2. **Call setter function**
   ```jsx
   setCount(5);
   // or
   setCount((prev) => prev + 1);
   ```

## 4. How can you share state between components in React?

| Method                   | When to use                                 | Code Example / Pattern                   | Direction / Scope           |
| ------------------------ | ------------------------------------------- | ---------------------------------------- | --------------------------- |
| **Props (Passing down)** | Parent → direct children                    | `<Child count={count} />`                | Top-down                    |
| **Lifting State Up**     | Siblings / close relatives need same state  | Move state to closest common parent      | Parent manages, passes down |
| **Context API**          | Deeply nested components / global-like data | `createContext` + `<MyContext.Provider>` | Provider → all descendants  |
| **useReducer + Context** | Complex state logic + sharing               | Combine reducer with Context             | Global-like with logic      |

## 5. How is event handling done in React?

Events in React use **camelCase** naming and accept **function references** (not strings).

```jsx
<button onClick={handleClick}>Click me</button>
<input onChange={handleChange} type="text" />
<form onSubmit={handleSubmit}>...</form>
```
