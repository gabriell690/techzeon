/* eslint-disable @typescript-eslint/no-explicit-any */
export type ContentBlockType =
  | "paragraph"
  | "heading"
  | "image"
  | "quote"
  | "list"
  | "code"
  | "video";

export interface ContentBlock {
  headers: any;
  rows: any;
  id: string;
  type: ContentBlockType;

  content?: string;

  level?: 1 | 2 | 3 | 4 | 5 | 6;

  src?: string;

  alt?: string;

  caption?: string;

  language?: string;

  items?: string[];
}