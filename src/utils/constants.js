export const DefaultUserAvatar =
  "https://images.ctfassets.net/usf1vwtuqyxm/3SQ3X2km8wkQIsQWa02yOY/8801d7055a3e99dae8e60f54bb4b1db8/HarryPotter_WB_F4_HarryPotterMidshot_Promo_080615_Port.jpg?w=914&q=70&fm=jpg";

export const defaulCoverPic =
  "https://en.idei.club/uploads/posts/2023-06/thumbs/1686302182_en-idei-club-p-hogwarts-aesthetic-dizain-krasivo-42.jpg";

export const socialLogo =
  "https://imgs.search.brave.com/aJ7eouVN1rItBXWARolUxAYHFyWq8GGNgiLax633pqE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MjkyNTY3NC92ZWN0/b3Ivc2h1cmlrZW4t/bmluamEtaWNvbi1p/bGx1c3RyYXRpb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PURPcERjVEFURXRl/QnF5R01FY2N5YUhB/aEthcU9oQ3NZOVJY/NmtXMlVTWTQ9";

  export const wizardLogo="https://cdn-icons-png.flaticon.com/512/867/867926.png"

export const ActionTypes = {
  //user actions
  GetAllUsers: "GET_ALL_USERS",
  GetSingleUser: "GET_SINGLE_USER",
  EditUserProfile: "EDIT_USER_PROFILE",
  GetBookmarkPostsByUser: "GET_BOOKMARK_POSTS_BY_USER",
  UpdateBookmark: "UPDATE_BOOKMARK",
  UpdateFollow: "UPDATE_FOLLOW",
  SearchUser: "SEARCH_USER",
  // post actions
  GetAllPosts: "GET_ALL_POSTS",
  GetSinglePost: "GET_SINGLE_POST",
  GetPostsByUser: "GET_POSTS_BY_USER",
  LikePost: "LIKE_POST",
  DislikePost: "DISLIKE_POST",
  CreateNewPost: "CREATE_NEW_POST",
  DeletePost: "DELETE_POST",
  EditPost: "EDIT_POST",
  AddNewComment: "ADD_NEW_COMMENT",
  DeleteComment: "DELETE_COMMENT",
  EditComment: "EDIT_COMMENT",
  FilterPosts: "FILTER_POSTS",
};
