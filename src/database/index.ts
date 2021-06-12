import mongoose from 'mongoose';

// Conecta no banco
mongoose.connect(process.env.MONGODB_HOST || 'mongodb://localhost/db_chamada');
mongoose.Promise = global.Promise;

export default mongoose;