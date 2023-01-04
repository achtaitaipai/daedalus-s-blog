export const readingTime = (text: string) => {
  const wordsPerMinute = 200;
  const wordCount = text.split(" ").length;
  const readingTime = (wordCount / wordsPerMinute) * 60;
  return Math.round(readingTime);
};
