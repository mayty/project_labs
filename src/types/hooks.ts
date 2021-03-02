import { SetStateAction, Dispatch } from 'react';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

// types
import { AccountType, ID } from '@/types/shared';

// utils
import { NOTES_LAST_EDIT_FIELD } from '@/utils/constants/api';
import { Note } from './models';

export type SignManuallyOptions = {
  email: string;
  password: string;
  onError?: (error: any) => void;
  onSuccess: (token: string, id: string, accountType: AccountType, email: string) => void;
};

export type SignManuallyResult = [() => Promise<void>, { loading: boolean }];

export type SocialSignInOptions = {
  onError?: (error: any) => void;
  onSuccess: (token: string, id: string, accountType: AccountType, email: string) => void;
};

export type QueryOptions = {
  collection: string;
  params?: any;
};

export type QueryDocumentOptions = QueryOptions & {
  id: ID;
};

export type QueryResult<T> = {
  data: ReadonlyArray<T | FirebaseFirestoreTypes.DocumentData> | undefined;
  loading: boolean;
  error?: string;
};

export type QueryDocumentResult<T> = {
  data: T | FirebaseFirestoreTypes.DocumentData | undefined;
  loading: boolean;
  error?: string;
};

export type CreateDocumentOptions<T> = {
  params: T;
};

export type CreateDocumentResult<T> = {
  data: T | undefined;
  loading: boolean;
  error?: string;
};

export type DebouncedNoteUpdateHandlerOptions = { id: ID; [NOTES_LAST_EDIT_FIELD]: string };
export type DebouncedNoteUpdateHandlerResult = {
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  body: string;
  setBody: Dispatch<SetStateAction<string>>;
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
};

export type ModalOptions = { initialState?: boolean };
export type ModalResult = [boolean, { openModal: () => void; closeModal: () => void }];

export type NotesActionSheetOptions = {
  isSingleMode?: boolean;
  isPinned?: boolean;
  onEditColor?: () => void;
  onDelete?: () => void;
  onPin?: () => void;
};

export type SearchNotesQueryOptions = {};
export type SearchNotesQueryResult = [
  string,
  (text: string) => void,
  { loading: boolean; refreshing: boolean; data?: readonly Note[]; refetch: () => Promise<void> },
];

export type UpdateNotesColorsOptions = {
  noteIds: readonly ID[];
  callback: () => void;
};
export type UpdateNotesColorsResult = (color: string) => void;

export type PinNoteOptions = {
  id: ID;
  isPinned: boolean;
};
export type PinNoteResult = () => void;

export type UsePinNotesOptions = {
  ids: readonly ID[];
};
export type UsePinNotesResult = () => void;

export type UseUpdatePasswordOptions = {
  onError?: () => void;
};
export type UseUpdatePasswordResult = [
  () => void,
  {
    loading: boolean;
    currentPassword: string;
    newPassword: string;
    setCurrentPassword: (text: string) => void;
    setNewPassword: (text: string) => void;
  },
];
