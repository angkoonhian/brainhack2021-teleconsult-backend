import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        "mongodb+srv://brainhack:brainhack2021@cluster0.p6fhj.mongodb.net/brainhack?retryWrites=true&w=majority",
      ),
  },
];
