export const getContacts = state => state.contacts;

export const getUsersError = state => state.contacts.error;

export const getSentSuccess = state => state.contacts.send_result;

export const getIsLoadingContacts = state => state.contacts.isLoading;

export const getToken = state => state.token.token;

export const getError = state => state.token.error;

export const getIsLoadingToken = state => state.token.isLoading;

export const getIsLoadingPositions = state => state.positions.isLoading;

export const getPositions = state => state.positions.positions;
