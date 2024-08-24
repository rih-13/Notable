import { InferSchemaType, model, Schema } from "mongoose";

/* Schema - Note
The text entries entered by the user */
const noteSchema = new Schema({
    title: { type: String, required: true},
    text: { type: String},
}, { timestamps: true});



type Note = InferSchemaType<typeof noteSchema> // creates Note type from Schema

export default model<Note>("Note", noteSchema);