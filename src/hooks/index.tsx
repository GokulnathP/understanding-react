import useName from "./use-name.ts";

const getName = () => useName();

const useHook = () => {
  return { value: getName() };
}

const Hooks = () => {
  const { value } = useHook();

  return <h1>{value}</h1>
};

export default Hooks;
