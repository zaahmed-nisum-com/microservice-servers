module.exports = {
  login: async (req: any, res: any) => {
    console.log("login");
    res.status(200).send();
  },
  signUp: async (req: any, res: any) => {
    console.log("signUp");
    res.status(200).send();
  },
};
