export type INPUT_TYPES =
  | 'text'
  | 'email'
  | 'password'
  | 'select'
  | 'phone'
  | 'date'
  | 'custom'
  | 'autocomplete';

export type SELECT_OPTIONS = Array<{label: string; value: string | number}>;

export type FILE = {
  uri: string;
  type: string;
  name: string;
};
