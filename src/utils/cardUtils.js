import { getRelativeDateStr, getRandomDateInRange } from "./dateUtils";

const randomMax999 = (min = 0) =>
  Math.floor(Math.random() * (999 - min + 1)) + min;

export const INITIAL_CARDS = [
  {
    id: 1,
    image: "https://loremflickr.com/400/400/nature?lock=1",
    labelLeft: "Today",
    dateRight: getRelativeDateStr(0),
    likesLeft: 420,
    likesRight: 780,
    commentsLeft: 32,
    commentsRight: 145,
    typeLeft: "Image upload",
    dateBottomRight: getRelativeDateStr(0),
  },
  {
    id: 2,
    image: "https://loremflickr.com/400/400/nature?lock=2",
    labelLeft: "Today",
    dateRight: getRelativeDateStr(1),
    likesLeft: 310,
    likesRight: 430,
    commentsLeft: 48,
    commentsRight: 210,
    typeLeft: "Image upload",
    dateBottomRight: getRelativeDateStr(1),
  },
  {
    id: 3,
    image: "https://loremflickr.com/400/400/nature?lock=3",
    labelLeft: "Today",
    dateRight: getRelativeDateStr(2),
    likesLeft: 180,
    likesRight: 940,
    commentsLeft: 14,
    commentsRight: 88,
    typeLeft: "Image upload",
    dateBottomRight: getRelativeDateStr(2),
  },
  {
    id: 4,
    image: "https://loremflickr.com/400/400/nature?lock=4",
    labelLeft: "Today",
    dateRight: getRelativeDateStr(3),
    likesLeft: 890,
    likesRight: 920,
    commentsLeft: 92,
    commentsRight: 430,
    typeLeft: "Image upload",
    dateBottomRight: getRelativeDateStr(3),
  },
  {
    id: 5,
    image: "https://loremflickr.com/400/400/nature?lock=5",
    labelLeft: "Today",
    dateRight: getRelativeDateStr(4),
    likesLeft: 310,
    likesRight: 760,
    commentsLeft: 25,
    commentsRight: 112,
    typeLeft: "Image upload",
    dateBottomRight: getRelativeDateStr(4),
  },
  {
    id: 6,
    image: "https://loremflickr.com/400/400/nature?lock=6",
    labelLeft: "Today",
    dateRight: getRelativeDateStr(5),
    likesLeft: 740,
    likesRight: 990,
    commentsLeft: 63,
    commentsRight: 195,
    typeLeft: "Image upload",
    dateBottomRight: getRelativeDateStr(5),
  },
  {
    id: 7,
    image: "https://loremflickr.com/400/400/nature?lock=7",
    labelLeft: "Today",
    dateRight: getRelativeDateStr(2),
    likesLeft: 230,
    likesRight: 800,
    commentsLeft: 19,
    commentsRight: 74,
    typeLeft: "Image upload",
    dateBottomRight: getRelativeDateStr(2),
  },
  {
    id: 8,
    image: "https://loremflickr.com/400/400/nature?lock=8",
    labelLeft: "Today",
    dateRight: getRelativeDateStr(1),
    likesLeft: 950,
    likesRight: 990,
    commentsLeft: 105,
    commentsRight: 512,
    typeLeft: "Image upload",
    dateBottomRight: getRelativeDateStr(1),
  },
];

export const generateNewCards = (currentLength) =>
  Array.from({ length: 8 }, (_, i) => {
    const nextId = currentLength + i + 1;
    const lockId = ((nextId - 1) % 80) + 1;

    const likesLeft = randomMax999(50);

    const likesRight = randomMax999(likesLeft);

    const commentsLeft = randomMax999(5);

    const commentsRight = randomMax999(commentsLeft);

    const randomPastDate = getRandomDateInRange(
      new Date("2025-06-01"),
      new Date("2026-05-01"),
    );

    return {
      id: nextId,
      image: `https://loremflickr.com/400/400/nature?lock=${lockId}`,
      labelLeft: "Today",
      dateRight: randomPastDate,
      likesLeft,
      likesRight,
      commentsLeft,
      commentsRight,
      typeLeft: "Image upload",
      dateBottomRight: randomPastDate,
    };
  });
