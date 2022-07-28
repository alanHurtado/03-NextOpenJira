import mongoose, { Model, Schema } from "mongoose";
import { Entry } from "../interface";

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: ["pedding", "in-progres", "finished"],
      message: "{VALUE} no es un estado permitido",
    },
    default: "pedding",
  },
});

const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model("Entry", entrySchema);

export default EntryModel;
