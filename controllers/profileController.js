import Profile from "../models/profile";
import routes from "../routes";

export const profiles = (req, res) => {};

export const profileDetail = async (req, res) => {
  console.log(req.params);
  const {
    params: { id },
  } = req;
  const profile = await Profile.findById({ _id: id });
  res.render("profileDetail", { profile });
};

export const getEditProfile = async (req, res) => {
  const {
    params: { id },
  } = req;
  const profile = await Profile.findById({ _id: id });
  res.render("editProfile", { profile });
};
export const postEditProfile = async (req, res) => {
  const {
    body: { title, name, description },
    params: { id },
  } = req;

  await Profile.findOneAndUpdate({ _id: id }, { title, name, description });
  res.redirect(routes.profileDetail(id));
};

export const getDeleteProfile = async (req, res) => {
  console.log(req.body);
  const {
    params: { id },
  } = req;
  await Profile.findOneAndRemove({ _id: id });
  res.redirect(routes.home);
};
