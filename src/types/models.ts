import { AccountType, ID, NoteStatus } from './shared';

// utils
import { NOTES_LAST_EDIT_FIELD } from '@/utils/constants/api';

export type User = {
  id: ID;
  name: string;
  email: string;
  accountType: AccountType;
  notes?: ReadonlyArray<ID>;
};

export type NoteInput = {
  owner: ID;
  title: string;
  data?: string;
  [NOTES_LAST_EDIT_FIELD]: string;
};

export type Note = NoteInput & {
  id?: string;
  labels?: ReadonlyArray<ID>;
  color: string;
  status: NoteStatus;
  reminderDate?: string;
  pinned?: boolean;
};
