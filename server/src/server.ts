import dotenv from 'dotenv';
import express from 'express';
import ItemEndpoint from './Routes/item.routes.ts';
import AuthEndpoint from './Routes/auth.routes.ts';
import cors from 'cors';
import connectDB from './Database/mongoose.config.ts';
import ProtectedEndpoint from './Routes/protected.route.ts';
import CookieParser from 'cookie-parser';


dotenv.config();
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: 'GET,POST,PUT,DELETE',
}));
app.use(CookieParser());

await connectDB(); 


app.use(express.json());

app.use('/api/item', ItemEndpoint);
app.use('/api/auth', AuthEndpoint);
app.use('/protected', ProtectedEndpoint);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
