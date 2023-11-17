import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "15e5bc45-f341-4287-97f3-d9a1f845ff69",
    content: "Havent used it in a long time...",
    mediaURL:
      "https://img.wattpad.com/76f54e4574936a3db3523c39fa7d10ac61b49609/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f76544239565a5f305548526d58773d3d2d3330302e313537366338303363633362633032353130343131343039353333372e6a7067?s=fit&w=720&h=720",
    mediaAlt: "Map",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "t7cZfWIp-q",
          firstName: "Harry",
          lastName: "Potter",
          username: "harryP",
          profileAvatar:
            "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg",
        },
        {
          _id: "79Gksh9otl",
          firstName: "Albus",
          lastName: "Dumbledore",
          username: "AlbusD",
          profileAvatar:
            "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
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
          _id: "qq8zWjEeXd",
          firstName: "Hermoine",
          lastName: "Granger",
          username: "hermoineGW",
          profileAvatar:
            "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "seriousB",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "t7cZfWIp-q",
        commentData: "Dont worry I'll use it",
        firstName: "Harry",
        lastName: "Potter",
        username: "harryP",
        profileAvatar:
          "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "1T6Be1QpLm",
        commentData: "That's a nice piece of art right there!",
        firstName: "Draco",
        lastName: "Malfoy",
        username: "dracoMalfoy",
        profileAvatar:
          "https://i.pinimg.com/originals/2c/f8/19/2cf8190c62b3027bed25741e5b3b8e69.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "508f7462-a891-4d73-987e-ad030fa40fcd",
    content:
      "Studied some extra subjects in my free time",
    mediaURL:
      "https://imagedelivery.net/9sCnq8t6WEGNay0RAQNdvQ/UUID-cl90fx0y31665916vmqy3ckihjm7/public",
    mediaAlt: "Library",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "qq8zWjEeXd",
          firstName: "Hermoine",
          lastName: "Granger",
          username: "hermoineGW",
          profileAvatar:
            "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Severus",
          lastName: "Snape",
          username: "theHalfBloodPrince",
          profileAvatar:
            "https://i.insider.com/5f47e7c9cd2fec00296a497a?width=1000&format=jpeg&auto=webp",
        },
      ],
      dislikedBy: [],
    },
    username: "hermoineGW",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: "2023-03-15T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "175ece04-a8b3-4cf5-a9f1-4de2c84c8b7c",
    content: "Got new glasses",
    mediaURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSa3gM8U_a8BqrJxRuD6GDVmfaMdEdqQT2wQ&usqp=CAU",
    mediaAlt: "Harry Image",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "qq8zWjEeXd",
          firstName: "Hermoine",
          lastName: "Granger",
          username: "hermoineGW",
          profileAvatar:
            "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Severus",
          lastName: "Snape",
          username: "theHalfBloodPrince",
          profileAvatar:
            "https://i.insider.com/5f47e7c9cd2fec00296a497a?width=1000&format=jpeg&auto=webp",
        },
      ],
      dislikedBy: [],
    },
    username: "harryP",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "qq8zWjEeXd",
        commentData: "But your vision still seems blurry",
        firstName: "Hermoine",
        lastName: "Granger",
        username: "hermoineGW",
        profileAvatar:
          "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "o5gzWjEeX_",
        commentData: "Meet me after class for detention",
        firstName: "Severus",
        lastName: "Snape",
        username: "theHalfBloodPrince",
        profileAvatar:
          "https://i.insider.com/5f47e7c9cd2fec00296a497a?width=1000&format=jpeg&auto=webp",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "39475b82-0f43-40f1-a98f-a145c52c02db",
    content: "One of the best shops I came across",
    mediaURL:
      "https://harrypotterlife.neocities.org/Weasleys1.jpg",
    mediaAlt: "Friends",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Albus",
          lastName: "Dumbledore",
          username: "AlbusD",
          profileAvatar:
            "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Hermoine",
          lastName: "Granger",
          username: "hermoineGW",
          profileAvatar:
            "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Severus",
          lastName: "Snape",
          username: "theHalfBloodPrince",
          profileAvatar:
            "https://i.insider.com/5f47e7c9cd2fec00296a497a?width=1000&format=jpeg&auto=webp",
        },
      ],
      dislikedBy: [],
    },
    username: "weaselyRon",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79Gksh9otl",
        commentData: "You shouldn't be there during the class time! Five points from griffindor",
        firstName: "Albus",
        lastName: "Dumbledore",
        username: "AlbusD",
        profileAvatar:
          "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "203e6407-4fa8-47dc-8406-7ae2530c1461",
    content: "Trust Me, I Was Chosen.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Albus",
          lastName: "Dumbledore",
          username: "AlbusD",
          profileAvatar:
            "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Hermoine",
          lastName: "Granger",
          username: "hermoineGW",
          profileAvatar:
            "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
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
          _id: "LCrc9f0Zl0",
          firstName: "Ron",
          lastName: "Weasley",
          username: "weaselyRon",
          profileAvatar:
            "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
        },
      ],
      dislikedBy: [],
    },
    username: "dracoMalfoy",
    createdAt: "2014-11-15T01:06:00+05:30",
    updatedAt: "2014-11-15T01:06:00+05:30",
    comments: [
      {
        _id: "qq8zWjEeXd",
        commentData: "If you say so",
        firstName: "Hermoine",
        lastName: "Granger",
        username: "hermoineGW",
        profileAvatar:
          "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
        createdAt: "2014-11-15T01:06:00+05:30",
        updatedAt: "2014-11-15T01:06:00+05:30",
      },
      {
        _id: "LCrc9f0Zl0",
        commentData:
          "Shut it Malfoy ",
        firstName: "Ron",
        lastName: "Weasley",
        username: "weaselyRon",
        profileAvatar:
          "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
        createdAt: "2014-11-16T01:06:00+05:30",
        updatedAt: "2014-11-16T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "ede18080-78ab-4c3e-a3e2-aded11c1bf95",
    content:
      "Well, It May Have Escaped Your Notice, But Life Isn't Fair.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Albus",
          lastName: "Dumbledore",
          username: "AlbusD",
          profileAvatar:
            "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Hermoine",
          lastName: "Granger",
          username: "hermoineGW",
          profileAvatar:
            "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
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
          _id: "LCrc9f0Zl0",
          firstName: "Ron",
          lastName: "Weasley",
          username: "weaselyRon",
          profileAvatar:
            "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Sirius",
          lastName: "Black",
          username: "seriousB",
          profileAvatar:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        },
      ],
      dislikedBy: [],
    },
    username: "theHalfBloodPrince",
    createdAt: "2021-03-11T01:06:00+05:30",
    updatedAt: "2021-03-11T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz",
        commentData: "Wise words",
        firstName: "Sirius",
        lastName: "Black",
        username: "seriousB",
        profileAvatar:
          "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        createdAt: "2021-03-12T01:06:00+05:30",
        updatedAt: "2021-03-12T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "7f6e1427-c26d-4969-928f-ca966129a87a",
    content: "While we may come from different places and speak in different tongues, our hearts beat as one.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          firstName: "Ron",
          lastName: "Weasley",
          username: "weaselyRon",
          profileAvatar:
            "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Sirius",
          lastName: "Black",
          username: "seriousB",
          profileAvatar:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        },
      ],
      dislikedBy: [],
    },
    username: "AlbusD",
    createdAt: "2022-05-11T01:06:00+05:30",
    updatedAt: "2022-05-11T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "f0b613fb-81b4-47bc-9ca2-751a22977242",
    content: "My friends",
    mediaURL:
      "https://cdn.costumewall.com/wp-content/uploads/2019/10/death-eaters.jpg",
    mediaAlt: "Chefs",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Albus",
          lastName: "Dumbledore",
          username: "AlbusD",
          profileAvatar:
            "https://qph.cf2.quoracdn.net/main-qimg-8eb0cd2a6247c860b5af5eef6f3b126b-lq",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Hermoine",
          lastName: "Granger",
          username: "hermoineGW",
          profileAvatar:
            "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Ron",
          lastName: "Weasley",
          username: "weaselyRon",
          profileAvatar:
            "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Sirius",
          lastName: "Black",
          username: "seriousB",
          profileAvatar:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        },
      ],
      dislikedBy: [],
    },
    username: "theHalfBloodPrince",
    createdAt: "2023-06-12T01:06:00+05:30",
    updatedAt: "2023-06-12T01:06:00+05:30",
    comments: [
      {
        _id: "qq8zWjEeXd",
        commentData:
          "Saw them recently",
        firstName: "Hermoine",
        lastName: "Granger",
        username: "hermoineGW",
        profileAvatar:
          "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
        createdAt: "2023-06-12T01:06:00+05:30",
        updatedAt: "2023-06-12T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "3cd5e18d-da71-4c4a-a3e5-46d529a8e039",
    content: "Time for some butterbeer. Wanna join?",
    mediaURL:
      "https://therecipecritic.com/wp-content/uploads/2022/09/Butterbeer.jpg",
    mediaAlt: "Basketball",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "qq8zWjEeXd",
          firstName: "Hermoine",
          lastName: "Granger",
          username: "hermoineGW",
          profileAvatar:
            "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
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
          _id: "LCrc9f0Zl0",
          firstName: "Ron",
          lastName: "Weasley",
          username: "weaselyRon",
          profileAvatar:
            "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Sirius",
          lastName: "Black",
          username: "seriousB",
          profileAvatar:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        },
      ],
      dislikedBy: [],
    },
    username: "harryP",
    createdAt: "2023-06-10T01:06:00+05:30",
    updatedAt: "2023-06-10T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz",
        commentData: "Count me in!",
        firstName: "Sirius",
        lastName: "Black",
        username: "seriousB",
        profileAvatar:
          "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        createdAt: "2023-06-11T01:06:00+05:30",
        updatedAt: "2023-06-11T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "d6c1f1e8-f8f2-46f2-9a6e-1886aa019479",
    content: "Going on a vacation 🏝️",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Sirius",
          lastName: "Black",
          username: "seriousB",
          profileAvatar:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        },
      ],
      dislikedBy: [],
    },
    username: "dracoMalfoy",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "M1NR81Bzlz",
        commentData: "Enjoy nephew!",
        firstName: "Sirius",
        lastName: "Black",
        username: "seriousB",
        profileAvatar:
          "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "92faab82-f28d-4a64-8f56-14e17f27cb16",
    content: "Bloody Helllll!!",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "o5gzWjEeX_",
          firstName: "Severus",
          lastName: "Snape",
          username: "theHalfBloodPrince",
          profileAvatar:
            "https://i.insider.com/5f47e7c9cd2fec00296a497a?width=1000&format=jpeg&auto=webp",
        },
      ],
      dislikedBy: [],
    },
    username: "weaselyRon",
    createdAt: "2023-03-17T01:06:00+05:30",
    updatedAt: "2023-03-17T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "d09da77f-9613-4b0a-bc52-f24dd7bf9903",
    content: "Kids get back to hogwarts ",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "1T6Be1QpLm",
          firstName: "Draco",
          lastName: "Malfoy",
          username: "dracoMalfoy",
          profileAvatar:
            "https://i.pinimg.com/originals/2c/f8/19/2cf8190c62b3027bed25741e5b3b8e69.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "AlbusD",
    createdAt: "2022-11-02T01:06:00+05:30",
    updatedAt: "2022-11-02T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz",
        commentData: "Let's collab!",
        firstName: "Sirius",
        lastName: "Black",
        username: "seriousB",
        profileAvatar:
          "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        createdAt: "2022-11-04T01:06:00+05:30",
        updatedAt: "2022-11-04T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "1975fbb2-ddf4-45a5-a362-650ea7d56de0",
    content: "It's leviOsa, not levioSA!",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Sirius",
          lastName: "Black",
          username: "seriousB",
          profileAvatar:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        },
      ],
      dislikedBy: [],
    },
    username: "hermoineGW",
    createdAt: "2023-06-25T01:06:00+05:30",
    updatedAt: "2023-06-25T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "c6826efc-35a3-4996-a7eb-090a7b143d01",
    content: "Trust me ,Those dementors aren't nice at all",
    mediaURL:
      "https://hellogiggles.com/wp-content/uploads/sites/7/2017/03/17/Hogwarts_dementor-e1489776649820.png",
    mediaAlt: "Car",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          firstName: "Ron",
          lastName: "Weasley",
          username: "weaselyRon",
          profileAvatar:
            "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
        },
      ],
      dislikedBy: [],
    },
    username: "seriousB",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "LCrc9f0Zl0",
        commentData: "I must praise your photography skills!",
        firstName: "Ron",
        lastName: "Weasley",
        username: "weaselyRon",
        profileAvatar:
          "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "5c8b26ce-934c-4dc7-a09a-59d7a17b20f6",
    content:
      "No one would ever have me a prefect. I spent too much time in detention with James",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 7,
      likedBy: [
        {
          _id: "qq8zWjEeXd",
          firstName: "Hermoine",
          lastName: "Granger",
          username: "hermoineGW",
          profileAvatar:
            "https://compote.slate.com/images/aabe1cb3-cb25-4aee-a82f-2d295386bb15.jpg",
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
          _id: "LCrc9f0Zl0",
          firstName: "Ron",
          lastName: "Weasley",
          username: "weaselyRon",
          profileAvatar:
            "https://images.ctfassets.net/usf1vwtuqyxm/1u3RmbxLrGMysu0Smacesu/43b7405e95859ba08ea646dc16fa722e/WB_F3_Scabbers_RonClutchesScabbersOnGround_C608-13_UP_HPE3.jpg?fm=jpg&q=70&w=2560",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Sirius",
          lastName: "Black",
          username: "seriousB",
          profileAvatar:
            "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Sirius-Black.Harry-Potter-Series.webp",
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Harry",
          lastName: "Potter",
          username: "harryP",
          profileAvatar:
            "https://imgs.search.brave.com/8hSA57xuXywgCW986vhNvn55TSyfZUzS-QoT6mfd9SQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzg3LzIw/LzdlLzg3MjA3ZTQ4/OGJlOWIyZDBkODgy/YTAwZTFjMTNhNzVk/LmpwZw",
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
      dislikedBy: [],
    },
    username: "seriousB",
    createdAt: "2021-06-07T01:06:00+05:30",
    updatedAt: "2021-06-07T01:06:00+05:30",
    comments: [],
  },
];
