import React, { useState, useCallback, useContext, createContext } from "react";

interface Props {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const Context = createContext<Props>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function RequestModalProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Context.Provider
      value={{
        isOpen: open,
        open: handleOpen,
        close: handleClose,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useRequestModal() {
  return useContext(Context);
}
