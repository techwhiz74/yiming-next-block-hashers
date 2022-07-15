const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  userId:{type:String,required:true},
  slug:{type:String,required:true,unique:true},
  desc:{type:String,required:true},
  img:{type:String,required:true},
  category:{type:String,required:true},
  size:{type:String},
  color:{type:String},
  prise:{type:Number,required:true},
  availableQty:{type:Number,required:true}

},{timestamps:true});
mongoose.models = {}
// export default mongoose.model("product",productSchema)
let UserModel = mongoose.model("product",productSchema);

module.exports = UserModel;