export interface Page {
  title: string;
  content: string;
}

export interface PageApi {
  [key: string]: PageMutation;
}