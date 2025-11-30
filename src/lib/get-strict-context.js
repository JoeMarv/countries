import React from 'react';

// Notice the name is now 'getStrictContext' to match your error
export function getStrictContext(options = {}) {
  const Context = React.createContext(undefined);
  Context.displayName = options.name;

  function useStrictContext() {
    const context = React.useContext(Context);
    if (context === undefined) {
      throw new Error(
        options.errorMessage ||
          `${options.name || 'Context'} must be used within a Provider`
      );
    }
    return context;
  }

  return [Context.Provider, useStrictContext];
}
