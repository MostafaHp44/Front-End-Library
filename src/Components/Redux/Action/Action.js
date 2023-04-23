import { ADDTOCART,SAVEITEM,PROCESSPAYMENT,INCREASE_QUANTITY,DECREASE_QUANTITY,DELETE_Quantity} from "./TypeAction"

export const AddToCart=(payload)=>{
return{
    type:ADDTOCART,
    payload
}
}

export const SaveItem=(payload)=>{
return{
    type:SAVEITEM,
    payload
}
}

export const FinalPayment=(payload)=>{
    return{
        type:PROCESSPAYMENT,
        payload
    }

}

export function DeleteQuantity(payload){
    return{
        type:DELETE_Quantity,
        payload
    }
}

export function IncreaseQuantity(payload){
    return{
        type:INCREASE_QUANTITY,
        payload
    }
}

export function DecreaseQuantity(payload){
    return{
        type:DECREASE_QUANTITY,
        payload
    }
}