import { readingTime } from "../utils/readingTime";

export function useReadingTime(text: string) {
  return readingTime(text);
}