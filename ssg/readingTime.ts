export const readingTime = (text: string) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(" ").length;
  const readingTime = wordCount / wordsPerMinute;
  return Math.round(readingTime * 10) / 10;
};
