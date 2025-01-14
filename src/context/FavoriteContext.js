import createDataContext from "./createDataContext";

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'add_favorite':
      return [...state, action.payload];
    case 'remove_favorite':
      return state.filter((fav) => fav.id !== action.payload);
    default:
      return state;
  }
};

const addFavorite = (dispatch) => (restaurant) => {
  dispatch({ type: 'add_favorite', payload: restaurant });
};

const removeFavorite = (dispatch) => (id) => {
  dispatch({ type: 'remove_favorite', payload: id });
};

export const { Context, Provider } = createDataContext(
  favoriteReducer,
  { addFavorite, removeFavorite },
  []
);
