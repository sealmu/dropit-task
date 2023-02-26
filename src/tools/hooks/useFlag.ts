// (application) dependencies imports
import { useCallback, useState } from "react";

// (local) interfaces and types
type UseFlag = (
  initialState?: boolean
) => [boolean, () => void, () => void, () => void];

const useFlag: UseFlag = (initialState = false) => {
  // (local) states
  const [boolean, setBoolean] = useState(initialState);

  // (local) callbacks
  const handleSetTrue = useCallback(() => {
    setBoolean(true);
  }, []);

  const handleSetFalse = useCallback(() => {
    setBoolean(false);
  }, []);

  const handleToggle = useCallback(() => {
    setBoolean((state) => !state);
  }, [setBoolean]);

  // returns
  return [boolean, handleSetTrue, handleSetFalse, handleToggle];
};

// exports
export default useFlag;
