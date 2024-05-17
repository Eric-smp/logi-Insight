import { NextApiResponse, NextApiRequest} from 'next'
import Axios from 'axios'

async function getProduct(req: NextApiRequest, res: NextApiResponse) {
    const url = `${process.env.GET_PRODUCT}`
    const config = {
        headers: {
            
        }
    }

  try {
    const { data } = await Axios.get(url)
    res.status(200).json(data)
  } catch (error) {
    // res.status(500).json({ message: error.message });
  }
}