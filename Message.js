const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
    {
        adminid: { type: String },
        userid: { type: String },
        documentid: { type: String },
        documenttype: { type: String },
        documentidentity: { type: String },
        message: { type: String },
        type: { type: String, required: true,  enum: ["user", "admin"] },
    },
    {
        timestamps: true,
        collection: "messageboxnews",
    }
);

mongoose.model("messageboxnews", MessageSchema);
