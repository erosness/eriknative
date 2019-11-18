const servers = (state = [], action) => {
  switch (action.type) {
    case "NEW_SCAN":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: true
        }
      ];
    default:
      return state;
  }
};

export default servers;
