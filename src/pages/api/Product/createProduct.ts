import { NextApiRequest, NextApiResponse } from 'next'
import Axios from 'axios'

async function createProduct(req: NextApiRequest, res: NextApiResponse) {

    const url = `${process.env.POST_CREATE_PRODUCT}`
    
    const params = {
        nomeProduto: req.body.nomeProduto,
        quantidade: req.body.quantidade
    }

    try {
        const { data } = await Axios.post(url, params)
        res.status(201).json(data)
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' })
    }
}

export default createProduct