
interface User {
  name: string;
  email: string;
}

interface UserState {
  user: User | null
}

interface UserAction {
  type: string;
  payload?: User;
}

const initialState: UserState = {
  user: null,
};

export const userReducer = (
  state = initialState, 
  action: UserAction
): UserState => {
  switch (action.type) {
    case 'user/login':
      return {
        ...state,
        user: action.payload as User,
      };
    case 'user/logout':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};