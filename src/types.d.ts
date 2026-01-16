export interface Page {
  title: string;
  content: string;
}

export interface PageMutation {
  title: string;
  content: string;
  pageName: string;
}

export interface PageApi {
  [key: string]: Page;
}