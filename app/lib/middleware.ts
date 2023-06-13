import db from './db';

async function database(req: any, res: any, next: any) {
    try {
        await db();
        next();
    } catch (error) {
        res.status(500).json({ error: 'Unable to connect to database' });
    }
}

export { database };