import { SAVEITEM,ADDTOCART,INCREASE_QUANTITY,DECREASE_QUANTITY,DELETE_Quantity} from "../Action/TypeAction";
import img1 from './1.png'
 export const initProduct = {

    numberCart:0,
    saveitem:0,
    Carts:[],
    SavedItem:[],
    product:[
        {
            id_product:'22',
            img:img1,
            main_category:"EBook",
            title:"It Ends with Us: A Novel",
            author:'John man',
            format:"Digital",
            price:200,
            category:"Action",
            quantity:1,
            numrate:3,
            startrate:""
       },
    ]
    
}


const Reducer =( state=initProduct ,action )=>{
    switch(action.type)
    {
       case(ADDTOCART) :
       {
        if(state.numberCart=== 0){
            let cart = {
                id_product:action.payload.id_product,
                img:action.payload.img,
                title:action.payload.title,
                format:action.payload.format,
                author:action.payload.author,
                quantity:1,
                price:action.payload.price,
                main_category:action.payload.main_category,
                category:action.payload.category,
            } 
            state.Carts.push(cart); 
        }
        else{
            let check = false;
            state.Carts.map((item,key)=>{
                if(item.id_product===action.payload.id_product){
                    state.Carts[key].quantity++;
                    check=true;
                }
            });
            if(!check){
                let _cart = {
                    id_product:action.payload.id_product,
                    quantity:1,
                    title:action.payload.title,
                    img:action.payload.img,
                    price:action.payload.price,
                    main_category:action.payload.main_category,
                    category:action.payload.category,
                    format:action.payload.format

                }
                state.Carts.push(_cart);
            }
        }
        return{
            ...state,
            numberCart:state.numberCart+1
        }
           } 

        case(SAVEITEM) :
       {
        if(state.saveitem===0){
            let saved = {
                id_product:action.payload.id_product,
                img:action.payload.img,
                title:action.payload.title,
                format:action.payload.format,
                author:action.payload.author,
                quantity:1,
                price:action.payload.price,
                main_category:action.payload.main_category,
                category:action.payload.category,


            } 
            state.SavedItem.push(saved); 
        }
        else{
            let check = false;
            state.SavedItem.map((item,key)=>{
                if(item.id_product===action.payload.id_product){
                    state.SavedItem[key].quantity++;
                    check=true;
                }
            });
            if(!check){
                let saved = {
                    id_product:action.payload.id_product,
                    quantity:1,
                    title:action.payload.title,
                    img:action.payload.img,
                    price:action.payload.price,
                    main_category:action.payload.main_category,
                    category:action.payload.category,
                    format:action.payload.format

                }
                state.SavedItem.push(saved);
            }
        }
        return{
            ...state,
            saveitem:state.saveitem+1
        }
           }   


        case(INCREASE_QUANTITY):
        {
            state.numberCart++
            
            state.Carts[action.payload].quantity++;
          
           return {
                     ...state,
                     
                  }
        }
            
           
        case DECREASE_QUANTITY:
            let quantity = state.Carts[action.payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }
          
            return{
                ...state
            }

        case DELETE_Quantity:
            let quantity_ = state.Carts[action.payload].quantity;
            return{
                ...state,
                numberCart:state.numberCart - quantity_,
                Carts:state.Carts.filter(item=>{
                    return item.id_product!==state.Carts[action.payload].id_product
                })
               
            }    
        
        
         
         default:
      return state;
    }

}

 
export default Reducer;