import React, { createContext, useContext, useState } from "react";

const SingletonContext = createContext();

const SingletonProvider = ({ children }) => {
  const [singletonInstance] = useState({
    name: "Singleton Service",
    timestamp: new Date(),
  });

  return (
    <SingletonContext.Provider value={singletonInstance}>
      {children}
    </SingletonContext.Provider>
  );
};

const useSingleton = () => {
  return useContext(SingletonContext);
};

// App Component
const MyComponent = () => (
  <SingletonProvider>
    <ChildComponent />
  </SingletonProvider>
);

const ChildComponent = () => {
  const singleton = useSingleton();

  return (
    <div>
      <p>Name: {singleton.name}</p>
      <p>Timestamp: {singleton.timestamp.toString()}</p>
    </div>
  );
};

export default MyComponent;
