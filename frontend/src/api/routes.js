import config from "../config";

export default {
  user: {
    login: `${config.apiBaseURL}/user/login`,
    signup: `${config.apiBaseURL}/user/signup`,
    retriveInfo: `${config.apiBaseURL}/user/retriveInfo`
  }
};
