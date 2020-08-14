const initialState={
    posts:[
        {
          "id": '1',
          "title": "Squirtle laid an egg",
          "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi aliquid iusto dolor delectus optio dicta ex adipisci obcaecati odio culpa, eum veniam aperiam nostrum, a distinctio assumenda id beatae?"
        },
        {
          "id": '2',
          "title": "Charmandar laid egg",
          "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi aliquid iusto dolor delectus optio dicta ex adipisci obcaecati odio culpa, eum veniam aperiam nostrum, a distinctio assumenda id beatae?"        },
        {
          "id": '3',
          "title": "a helix fossel was found",
          "body": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde sequi aliquid iusto dolor delectus optio dicta ex adipisci obcaecati odio culpa, eum veniam aperiam nostrum, a distinctio assumenda id beatae?"        }]
}

const rootReducer=(state=initialState,action)=>{
    
    if(action.type === 'DELETE_POST'){
        let newPost=state.posts.filter((post)=>{
            return action.id !== post.id
        })
        return{
            ...state,
            posts:newPost
        }
        
    }
    return state;
}

export default rootReducer