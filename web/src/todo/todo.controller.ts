import TodoModel, { Todo } from './todo.model';

const TodoController = {
	async save(newTodo: Todo): Promise<Todo> {
		try {
			const todo = await TodoModel.create(newTodo);
			return todo;
		} catch (err) {
			console.log(err);
			return err;
		}
	},

	//to be removed
	async getAll(): Promise<Todo[]> {
		try {
			const todos = await TodoModel.find();
			return todos;
		} catch (err) {
			console.log(err);
			return err;
		}
	},

	async get(id: string): Promise<Todo | null> {
		try {
			const todo = await TodoModel.findById(id);
			return todo;
		} catch (err) {
			console.log(err);
			return err;
		}
	},

	async update(id: string, update: Partial<Todo>): Promise<Todo | null> {
		try {
			const updatedTodo = await TodoModel.findByIdAndUpdate(id, update, { new: true });
			return updatedTodo;
		} catch (err) {
			console.log(err);
			return err;
		}
	},

	async delete(id: string): Promise<Todo | null> {
		try {
			const deletedTodo = await TodoModel.findByIdAndRemove(id);
			return deletedTodo;
		} catch (err) {
			console.log(err);
			return err;
		}
	}
};

export default TodoController;
