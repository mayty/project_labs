export const formatFirebaseError = (error: string) => error.replace(/^\[[\0-\255]*] /gim, '');
