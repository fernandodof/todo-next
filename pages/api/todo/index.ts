import { NextApiRequest, NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';

export default function todoHandler(req: NextApiRequest, res: NextApiResponse): void {
	const { method } = req;

	switch (method) {
		case 'GET':
			return res.status(StatusCodes.OK).send({ id: 1, content: 'content' });
	}
}
