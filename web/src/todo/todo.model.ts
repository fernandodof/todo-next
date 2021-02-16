import { prop, getModelForClass } from '@typegoose/typegoose';

export class Todo {
	@prop({ type: () => String })
	public description?: string;
}

const TodoModel = getModelForClass(Todo, { schemaOptions: { timestamps: true } });

export default TodoModel;
