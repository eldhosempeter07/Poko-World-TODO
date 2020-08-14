import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Pokeball from '../pokeball.png'
class Home extends Component {

    render(){
        console.log(this.props)
        const{posts}=this.props;

        const postLists= posts.length ? (
            posts.map((post)=>{
                return(
                    <div className="post card" key={post.id}>
                    <img src={Pokeball} alt='Hey pokeball' sizes='2px'/>
                     <div className="card-content"></div>
                      <Link to={'/'+post.id}>  
                        <span className="card-title red-text">{post.title}</span>  </Link>
                        <p>{post.body}</p>
                    </div>
                )
            })
        ):(
            <div className='center'> No Posts</div>
        )
    return (
        <div className='container home'>
            <h3 className='center'>Home</h3>
            
            {/*<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur porro aliquid non labore! Porro omnis in magnam aliquam ipsa dicta consequatur explicabo soluta culpa. Alias fugiat cumque doloribus ab. Placeat?</p>            
       */}
            <div>{postLists}</div> 
        </div>
    )
}
}

const mapStateToProps=(state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home)
