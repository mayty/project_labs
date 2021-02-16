import { AccountType, ID, NoteStatus } from './shared';

export type User = {
  id: ID;
  name: string;
  email: string;
  accountType: AccountType;
  notes?: ReadonlyArray<ID>;
};

export type Note = {
  id: ID;
  owner: ID;
  labels: ReadonlyArray<ID>;
  color: string;
  title: string;
  data: string;
  status: NoteStatus;
  reminderDate: string;
};
