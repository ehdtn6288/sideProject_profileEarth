// Home
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";
const UPLOAD = "/upload";

//Users
const USERS = "/users";
const USER_DETAIL = "/:id";
const EIDT_USER_PROFILE = "/:id/edit";
const CHANGE_PASSWORD = "/change-password";

// Profiles
const PROFILES = "/profiles";

const PROFILE_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit";
const DELET_PROFILE = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  upload: UPLOAD,

  users: USERS,
  userDetail: USER_DETAIL,
  editUserProfile: EIDT_USER_PROFILE,
  changePassword: CHANGE_PASSWORD,

  profiles: PROFILES,
  profileDetail: (id) => {
    if (id) {
      return `/profiles/${id}`;
    } else {
      return PROFILE_DETAIL;
    }
  },
  editProfile: (id) => {
    if (id) {
      return `/profiles/${id}/edit`;
    } else {
      return EDIT_PROFILE;
    }
  },
  deleteProfile: (id) => {
    if (id) {
      return `/profiles/${id}/delete`;
    } else {
      return DELET_PROFILE;
    }
  },
};

export default routes;
