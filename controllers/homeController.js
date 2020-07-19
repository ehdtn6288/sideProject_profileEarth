import Profile from "../models/profile";
import routes from "../routes";

export const home = async (req, res) => {
  const profiles = await Profile.find({});
  res.render("home", { profiles });
};

export const getUpload = (req, res) => {
  res.render("upload");
};
export const postUpload = async (req, res) => {
  const {
    body: { title, description, name },
    file: { path },
  } = req;

  const newProfile = await Profile.create({
    title,
    description,
    name,
    fileUrl: path,
  });
  console.log(newProfile);
  res.redirect(routes.profileDetail(newProfile.id));
};

export const join = (req, res) => {
  res.render("join");
};
export const login = (req, res) => {
  res.render("login");
};
export const logout = (req, res) => {
  res.render("logout");
};
export const search = async (req, res) => {
  const {
    query: { term: searchingBy },
  } = req;

  const profiles = await Profile.find({
    title: { $regex: searchingBy, $options: "i" },
  });
  res.render("search", { searchingBy, profiles });
};
