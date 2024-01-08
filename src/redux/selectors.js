export const getContacts = state => state.contacts;

export const getToken = state => state.token.token;

export const getPositions = state => state.positions.positions;

export const getSentSuccess = state => state.contacts.send_result;

export const getIsLoading = state => state.token.isLoading;

export const getError = state => state.token.error;

export const getUsersError = state => state.contacts.error;
