export interface Entry {
  _id: string;
  description: string;
  crearedAt: number;
  status: EntryStatus;
}

export type EntryStatus = "peding" | "in-progres" | "finished";
