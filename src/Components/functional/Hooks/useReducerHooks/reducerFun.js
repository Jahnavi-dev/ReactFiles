const initialState={
    count:0,
    name:"Ram",
    Designation:"developer",
    subjects:["JS", "React"]
}
export default initialState;

export const ReducerFun=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return {...state, count:state.count+1}
        case "DECREMENT":
            if(state.count>0){
                return {...state, count:state.count-1}
            }
            else{
                return state
            }  
        case "RESET":
            return {...state,count:0}
        case "NAME_CHANGE":
            return {...state, name:"Vijay"}
        case "ADD_SUBJECTS":
            return{...state, subjects:[...state.subjects,"vue JS", "BackBone JS", "Ember JS"]}
        case "ADD_SUBJECTS1":
            return{...state, subjects:[...state.subjects, action.payload]}
        default:
            return state
    }

}
