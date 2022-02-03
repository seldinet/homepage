import React, { useState, useCallback, useContext, createContext } from "react";

interface RequestValueProps {
  company: string;
  name: string;
  phoneNumber: string;
  email: string;
  site: string;
  requiredAgree: boolean;
  notRequiredAgree: boolean;
}

interface Props {
  isOpen: boolean;
  value: RequestValueProps;
  open: () => void;
  close: () => void;
  setValue: (value: RequestValueProps) => void;
  isActive: boolean;
}

const Context = createContext<Props>({
  isOpen: false,
  value: {
    company: "",
    name: "",
    phoneNumber: "",
    email: "",
    site: "",
    requiredAgree: false,
    notRequiredAgree: false,
  },
  open: () => {},
  close: () => {},
  setValue: () => {},
  isActive: false,
});

export function RequestModalProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<RequestValueProps>({
    company: "",
    name: "",
    phoneNumber: "",
    email: "",
    site: "",
    requiredAgree: false,
    notRequiredAgree: false,
  });

  const isActive =
    !!value.company &&
    !!value.name &&
    !!value.phoneNumber &&
    !!value.site &&
    value.requiredAgree;

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const handleValue = useCallback((value: RequestValueProps) => {
    setValue(value);
  }, []);

  return (
    <Context.Provider
      value={{
        isOpen: open,
        value: value,
        isActive: isActive,
        open: handleOpen,
        close: handleClose,
        setValue: handleValue,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useRequestModal() {
  return useContext(Context);
}
