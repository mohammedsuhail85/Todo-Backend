import mongoose from 'mongoose';

export interface TodoDocument extends mongoose.Document {
  title: string,
  active: boolean,
  state: string,
  endDate: Date,
  createdAt: Date,
  updatedAt: Date,
}

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  active: { type: Boolean },
  state: { type: String },
  endDate: { type: Date },
}, { timestamps: true });

const Todo = mongoose.model<TodoDocument>("Todo", TodoSchema);

export default Todo;