---
title: "Error Boundary in React"
date: 2024-09-27T22:55:19+07:00
description: Error boundaries catchs errors anywhere in their child component tree and display a fallback UI instead of crashing the whole application
tags: [react]
author:
  name: BBMCode
  email: bbmcode247@gmail.com
  homepage: https://bbmcode.com
  github: bbmcodedotcom
---

```javascript
// 1. Creating the Error Boundary Component
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Update the state if an error is caught
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Log error details, e.g., to an external logging service
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    console.error("Error caught in Error Boundary:", error, errorInfo);
    // Here you could send error details to a remote server
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>bbmcode.com</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;

// 2. Using the Error Boundary
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import BuggyComponent from './BuggyComponent';

const App = () => {
  return (
    <div>
      <h1>Welcome to the Error Boundary Demo</h1>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;


// 3. Creating a Buggy Component (for testing)
import React, { useState } from 'react';

const BuggyComponent = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('I crashed!');
  }

  return (
    <div>
      <h2>Click the button to throw an error:</h2>
      <button onClick={() => setThrowError(true)}>Throw Error</button>
    </div>
  );
};

export default BuggyComponent;
```
