import React, { memo, useMemo, useContext, useRef, MutableRefObject, FC } from 'react';
import DropdownAlert from 'react-native-dropdownalert';

type AlertContextValue = {
  dropdownAlertRef?: MutableRefObject<DropdownAlert | null>;
};

export const AlertContext = React.createContext<AlertContextValue>({});

type ProviderComponentProps = {
  children: JSX.Element;
};

const ProviderComponent: FC<ProviderComponentProps> = ({ children }) => {
  const dropdownAlertRef = useRef<DropdownAlert>(null);

  const alertContextValue: AlertContextValue = useMemo(() => ({ dropdownAlertRef }), [
    dropdownAlertRef,
  ]);

  // position of DropdownAlert component in render is important
  // it should be at the bottom to work correctly
  return (
    <AlertContext.Provider value={alertContextValue}>
      {children}
      <DropdownAlert ref={dropdownAlertRef} />
    </AlertContext.Provider>
  );
};

export const AlertContextProvider = memo(ProviderComponent);

export const useAlertRef = () => useContext(AlertContext).dropdownAlertRef?.current;

export const useSuccessAlert = () => {
  const ref = useAlertRef();

  return (title: string, message: string) => ref?.alertWithType('success', title, message);
};

export const useWarningAlert = () => {
  const ref = useAlertRef();

  return (title: string, message: string) => ref?.alertWithType('warn', title, message);
};

export const useErrorAlert = () => {
  const ref = useAlertRef();

  return (title: string, message: string) => ref?.alertWithType('error', title, message);
};
