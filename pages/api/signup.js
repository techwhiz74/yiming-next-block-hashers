import User from '../../models/User'
import connectDB from '../../middleware/mongoose'
import CryptoJS from "crypto-js"


const handler = async (req, res) => {
  if (req.method === 'POST') {
    // Process a POST request
    // console.log('response : '+req.body)
    let { name, email } = req.body;

    let U = new User({ name: name, email: email, password: CryptoJS.AES.encrypt(req.body.password, 'hello Guys').toString() })
    await U.save()
    res.status(200).json({ success: "success" })

  } else {

    res.status(400).json({ error: "Invailed" })
  }
}
// let Products = await Product.find()



export default connectDB(handler)
