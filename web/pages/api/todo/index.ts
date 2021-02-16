import { NextApiRequest, NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';

import TodoController from '../../../src/todo/todo.controller';
import dbConnect from '../../../utils/dbConnect';
import { Todo } from '../../../src/todo/todo.model';

export default async function todoHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	await dbConnect();

	const { method } = req;

	switch (method) {
		case 'POST': {
			const newTodo: Todo = { description: req.body.description };
			const savedTodo = await TodoController.save(newTodo);
			return res.status(StatusCodes.CREATED).json(savedTodo);
		}
		case 'GET': {
			const todos = await TodoController.getAll();
			return res.status(StatusCodes.OK).json(todos);
		}
	}
}
