const mongoose = require("mongoose");

module.exports = {
  databaseContectivity: async (database: String) => {
    switch (database) {
      case "mongodb":
        try {
          const database = await mongoose.connect(
            "mongodb+srv://zain_ahmed_nisum:zain_ahmed_nisum@cluster0.l280j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
          );
          console.log("Database connected");
        } catch (error: any) {
          throw new Error(error);
        }
        break;

      default:
        break;
    }
  },
};
