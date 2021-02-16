import { NextApiRequest, NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';

import TodoController from '../../../src/todo/todo.controller';
import dbConnect from '../../../utils/dbConnect';
import { Todo } from '../../../src/todo/todo.model';

export default async function todoHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	await dbConnect();

	const { method, query } = req;
	const id = query.id.toString();

	switch (method) {
		case 'GET': {
			const todos = await TodoController.get(id);
			return res.status(StatusCodes.OK).json(todos);
		}
		case 'PUT': {
			const update: Partial<Todo> = { description: req.body.description };
			const updatedTodo = await TodoController.update(id, update);
			return res.status(StatusCodes.OK).json(updatedTodo);
		}
		case 'DELETE': {
			const deleteTodo = await TodoController.delete(id);
			return res.status(StatusCodes.OK).json(deleteTodo);
		}
	}
}
