import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "t7cZfWIp-q",
    firstName: "Harry",
    lastName: "Potter",
    password: "ginny",
    username: "harryP",
    bio: "I am a wizard",
    website: "https://en.wikipedia.org/wiki/Harry_Potter",
    profileAvatar:
      "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
    backgroundImage:
      "https://en.idei.club/uploads/posts/2023-06/thumbs/1686302182_en-idei-club-p-hogwarts-aesthetic-dizain-krasivo-42.jpg",
    createdAt: "2022-05-31T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "LCrc9f0Zl0",
        firstName: "Ron",
        lastName: "Weasley",
        username: "weaselyRon",
        profileAvatar:
          "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
      },
      {
        _id: "1T6Be1QpLm",
        firstName: "Draco",
        lastName: "Malfoy",
        username: "dracoMalfoy",
        profileAvatar:
          "https://i.pinimg.com/originals/2c/f8/19/2cf8190c62b3027bed25741e5b3b8e69.jpg",
      },
      {
        _id: "o5gzWjEeX_",
        firstName: "Severus",
        lastName: "Snape",
        username: "theHalfBloodPrince",
        profileAvatar:
          "https://i.insider.com/5f47e7c9cd2fec00296a497a?width=1000&format=jpeg&auto=webp",
      },
      {
        _id: "79Gksh9otl",
        firstName: "Albus",
        lastName: "Dumbledore",
        username: "AlbusD",
        profileAvatar:
          "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
      },
    ],
    followers: [
      {
        _id: "qq8zWjEeXd",
        firstName: "Hermoine",
        lastName: "Granger",
        username: "hermoineG",
        profileAvatar:
          "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "79Gksh9otl",
    firstName: "Albus",
    lastName: "Dumbledore",
    password: "harry",
    username: "AlbusD",
    bio: "It does not do to dwell on dreams and forget to live.",
    website: "https://en.wikipedia.org/wiki/Albus_Dumbledore",
    profileAvatar:
      "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
    backgroundImage:
      "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
    createdAt: "2022-04-11T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "1T6Be1QpLm",
        firstName: "Draco",
        lastName: "Malfoy",
        username: "dracoMalfoy",
        profileAvatar:
          "https://i.pinimg.com/originals/2c/f8/19/2cf8190c62b3027bed25741e5b3b8e69.jpg",
      },
    ],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Harry",
        lastName: "Potter",
        username: "harryP",
        profileAvatar:
          "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "1T6Be1QpLm",
    firstName: "Draco",
    lastName: "Malfoy",
    password: "8mile",
    username: "dracoMalfoy",
    bio: "My father will hear about this!",
    website: "https://www.eminem.com/",
    profileAvatar:
      "https://i.pinimg.com/originals/2c/f8/19/2cf8190c62b3027bed25741e5b3b8e69.jpg",
    backgroundImage: "https://i.insider.com/5f802b784c3b2e0019bba0c7?width=700",
    createdAt: "2002-10-26T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "79Gksh9otl",
        firstName: "Albus",
        lastName: "Dumbledore",
        username: "Albus",
        profileAvatar:
          "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
      },
      {
        _id: "t7cZfWIp-q",
        firstName: "Harry",
        lastName: "Potter",
        username: "harryP",
        profileAvatar:
          "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "LCrc9f0Zl0",
    firstName: "Ron",
    lastName: "Weasley",
    password: "ronW",
    username: "weaselyRon",
    bio: "Life is a struggle when you are a muggle",
    website: "https://www.weaselyRon.com/",
    profileAvatar:
      "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
    backgroundImage:
      "https://s.yimg.com/ny/api/res/1.2/_wbi6jyNYT1Gvyc7B0fhTA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NDU-/https://media.zenfs.com/en-US/homerun/mashable_watercooler_910/7ad4dd18dc01e4af71f19e14c6f7b6d9",
    createdAt: "2012-02-10T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Harry",
        lastName: "Potter",
        username: "harryP",
        profileAvatar:
          "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "o5gzWjEeX_",
    firstName: "Severus",
    lastName: "Snape",
    password: "lily",
    username: "theHalfBloodPrince",
    bio: "Always!",
    website: "https://en.wikipedia.org/wiki/Severus_Snape",
    profileAvatar:
      "https://i.insider.com/5f47e7c9cd2fec00296a497a?width=1000&format=jpeg&auto=webp",
    backgroundImage:
      "https://miro.medium.com/v2/resize:fit:940/1*TMCerj0yY_mKke4L1Y6lrQ.jpeg",
    createdAt: "2009-07-25T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Harry",
        lastName: "Potter",
        username: "harryP",
        profileAvatar:
          "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
      },
    ],
    bookmarks: [],
  },
  {
    _id: "M1NR81Bzlz",
    firstName: "Sirius",
    lastName: "Black",
    password: "james",
    username: "seriousB",
    bio: "Just chillin mate",
    website: "https://en.wikipedia.org/wiki/Sirius_Black",
    profileAvatar:
      "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
    backgroundImage:
      "https://images.ctfassets.net/usf1vwtuqyxm/2CWoySex9G28IwmqQ0IDyS/1fe2e83357f72de21246422322cebf03/fact-file-marauders-deleted-scene-crop.jpg?h=416&w=600&fit=pad",
    createdAt: "2005-05-17T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
  },
  {
    _id: "qq8zWjEeXd",
    firstName: "Hermoine",
    lastName: "Granger",
    password: "yay10",
    username: "hermoineGW",
    bio: "Working at the Ministry of magic",
    website: "https://www.hermoineG.co.uk/",
    profileAvatar:
      "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
    backgroundImage:
      "https://imgix.bustle.com/2016/8/4/hermione-f29e2f1b-d443-4424-b19a-7c0a2f0567ac.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
    createdAt: "2008-07-21T01:06:00+05:30",
    updatedAt: formatDate(),
    following: [
      {
        _id: "t7cZfWIp-q",
        firstName: "Harry",
        lastName: "Potter",
        username: "harryP",
        profileAvatar:
          "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
      },
    ],
    followers: [],
    bookmarks: [],
  },
];
