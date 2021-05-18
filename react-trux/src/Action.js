const useAction = (action, ...params) => {
  return { action, params };
};

const callAction = useAction;

export { useAction, callAction };
