import mongoose from "mongoose";
import config from 'config';
import log from '../logger';

function connect() {
  const dbUri = config.get('dbUri') as string;

  return mongoose.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    log.info('Database Connected...');
  }).catch(err => {
    log.error('Error', err);
    process.exit(1);
  })
}

export default connect;
