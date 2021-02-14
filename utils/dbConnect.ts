import mongoose from 'mongoose';

async function dbConnect(): Promise<typeof mongoose | undefined> {
	if (mongoose.connection.readyState >= 1) {
		return;
	}

	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	return mongoose.connect(process.env.MONGODB_URI!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true
	});
}

export default dbConnect;
