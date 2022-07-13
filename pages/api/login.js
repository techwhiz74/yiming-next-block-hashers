import User from '../../models/User'
import connectDB from '../../middleware/mongoose'
import CryptoJS from "crypto-js"
import jwt from 'jsonwebtoken'


 
const handler = async (req, res) => {
    if (req.method === 'POST') {

        let user = await User.findOne({ "email": req.body.email })
        // console.log(user);

        const bytes = CryptoJS.AES.decrypt(user.password, 'hello Guys');
        const originalText = bytes.toString(CryptoJS.enc.Utf8);
        if (user) {
            if (req.body.email == user.email && req.body.password == originalText) {

                //jwt token
                const token = jwt.sign({ success: true, email: user.email, password: user.password }, 'myjwttoken',{ expiresIn: '7d' });
                res.status(200).json({ success: true, token: token })
            }
            else {
                res.status(400).json({ success: false, error: "invailed credentials" })

            }
        }

        else {
            res.status(400).json({ success: false, error: "User Not Found" })

        }

    } else {

        res.status(400).json({ error: "Invailed" })
    }
}
// let Products = await Product.find()



export default connectDB(handler)
