export const getContacts = state => state.contacts;

export const getToken = state => state.token.token;

export const getPositions = state => state.positions.positions;

// export const getFilter = state => state.filter;

// export const isContactNameUnique = (state, name) => {
//   const contacts = state.contacts.items;
//   return !contacts.some(contact => contact.name === name);
// };

export const getIsLoading = state => state.token.isLoading;

export const getError = state => state.token.error;

export const getUsersError = state => state.contacts.error;
