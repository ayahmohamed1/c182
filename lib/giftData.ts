export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
}

export const defaultLoveLetterParagraphs: string[] = [
  "You are my safe place, my warmth, and the only person I can be truly myself with.",
  "I love the man you are",
  "I choose you through the easy days and the hard ones, today and for all our years ahead.",
  "Happy 26th birthday to my forever favorite person, my heart, and my future.",
  "Always and forever, your favorite lady. 🤍",
];

const ahmedGift: GiftData = {
  senderName: "AlBANDRI",
  receiverName: "Adel",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Check out these awesome surprises made just for you",
  birthdayWishesTitle: "Happy 26th Birthday, adel! 🎂✨",
  birthdayWishesMessage:
    "Being with you is truly one of the best things that has ever happened to me. From the moment you came into my life, everything started to feel brighter and more meaningful...",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Our Special Track",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "Check out these awesome surprises for YOU!",
  },
};

export default giftData;