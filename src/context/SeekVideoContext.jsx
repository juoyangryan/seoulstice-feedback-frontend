import React, { createContext, useContext, useState } from "react";

const SeekContext = createContext();

export function useSeekVideo() {
  return useContext(SeekContext);
}

export function SeekVideoProvider({ children }) {
  const [handleSeekTo, setHandleSeekTo] = useState(null);

  return (
    <SeekContext.Provider value={{ handleSeekTo, setHandleSeekTo }}>
      {children}
    </SeekContext.Provider>
  );
}
