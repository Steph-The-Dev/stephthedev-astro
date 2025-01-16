---
id: 2025-11-12-getting-started-with-react
title: 'Getting Started with React: Building Your First Component'
description: 'Learn the basics of React and create your first component in this beginner-friendly guide.'
pubDate: 'Nov 12 2025'
image: ./images/yash-kumar-roy-TFE2u40Ghw8-unsplash.jpg
---

# Getting Started with React

## Introduction

Welcome to the world of React! In this article, we'll introduce you to React.js, a popular JavaScript library
for building user interfaces. We'll cover the basics of setting up a React project and creating your first
component.

## What is React?

React is an open-source JavaScript library developed by Facebook. It's used to build reusable UI components that
can be rendered on the client side or server side.

## Setting Up React

To get started with React, you can use Create React App, a tool that sets up a new React project with all the
necessary configurations.

First, make sure you have Node.js installed. Then, run the following commands:

```bash
npx create-react-app my-react-app
cd my-react-app
npm start
```

This will create a new React app and start the development server.

## Components

In React, everything is a component. Components are reusable pieces of code that represent a part of the UI.

Here’s an example of a simple React component:

```jsx
import React from 'react';

function HelloWorld() {
  return <h1>Hello, World!</h1>;
}

export default HelloWorld;
```

You can also create class components, but functional components are more commonly used in modern React
applications.

## Props and State

Props (short for properties) are used to pass data from parent components to child components. State is used to
manage data that changes over time within a component.

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;
```

## Conclusion

React is a powerful library for building dynamic and interactive user interfaces. In the next article, we'll
dive deeper into React concepts such as state management, props, and routing.
