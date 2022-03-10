'stick use'

const supertokens = require("supertokens-node");
const Session = require("supertokens-node/recipe/session");
const Passwordless = require("supertokens-node/recipe/passwordless");
const utilSendEmail = require("../utils/nodemailer");

module.exports = {
  intiFn: supertokens.init({
    framework: "express",
    supertokens: {
      connectionURI: "https://try.supertokens.com",
    },
    appInfo: {
      appName: "OPTApplication",
      apiDomain: "http://localhost:3000",
      websiteDomain: "http://localhost:3000",
      apiBasePath: "/auth",
      websiteBasePath: "/login",
    },
    recipeList: [
      Passwordless.init({
        flowType: "USER_INPUT_CODE",
        contactMethod: "EMAIL_OR_PHONE",
        createAndSendCustomEmail: async (input: any, context: any) => {
          await utilSendEmail.sendOTPCodeEmail(input);
        },
        createAndSendCustomTextMessage: async (input: any, context: any) => {
          /* See next step */
        },
      }),
      Session.init(), // initializes session features
    ],
  }),
};
