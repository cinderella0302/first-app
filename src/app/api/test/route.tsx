import { NextApiRequest, NextApiResponse } from "next";


async function handler(req: NextApiRequest, res: NextApiResponse){
    console.log("----- debug: test");

    if (req.method === 'GET') {
        res.status(200).json({ name: 'John Doe' });
    }
}

export default handler;