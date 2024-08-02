import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';



const Home = () => {
  let inputref=useRef()
  // e.prventDefault()
  console.log(inputref)
    const [products, setproducts] = useState();
    const [value, setvalue] = useState("pizza");
    console.log(value)
   async function food(){
        let data= await fetch (`https://api.edamam.com/search?q=${value}&app_id=e19f5198&app_key=56e557f444c003d975bfe388114ce6b2`)
        let item= await data.json();
        console.log(item.hits)
        setproducts(item.hits)
    }
    useEffect(()=>{
       food();
    },[value])

    let handlesearch=((e)=>{
      e.preventDefault()
      let search= inputref.current.value
      // console.log(search)
      setvalue(search)
      
      
    })
    let handlerecipe=((ele)=>{
      console.log(ele)
    })
  return (

    <div className="big" >
      
        <form className="d-flex w-25 m-auto my-3"   role="search">
        <input  ref={inputref} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button onClick={handlesearch}  className="btn btn-outline-success" type="submit">Search</button>
      </form>

       <div className=' row  d-flex justify-content-center m-auto'>
       {products?.map((ele)=>{
        return <div className="card" style={{width: '18rem'}}>
  <img src={ele.recipe.image} className="card-img-top" alt="..." />
  <div className="card-body">
    {/* <h5  className="card-title text-truncate ">{ele.recipe.cautions[0]}</h5> */}
    <p style={{width:"150px"}} className="card-text  text-truncate">{ele.recipe.label}</p>
    <Link state={ele} to={"recipe"}  onClick={()=>handlerecipe(ele)} className="btn btn-primary">view Recipe</Link>
  </div>
</div>

})

     }
       </div>
 
    </div>
  )
}

export default Home
