import {model, Schema} from 'mongoose';
const purchaseSchema = new Schema({
    shippingAdress: {
        type: String,
        require: true
    },
    album:{
        type: Schema.Types.ObjectId,
        ref: "Album"
    }
});

const Purchase = model("Purchase", purchaseSchema);

export  default Purchase;