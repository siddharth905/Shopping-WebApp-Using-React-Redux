import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';
import Spinner from '../Components/Spinner';
import { products } from '../data';

export const Home = () => {
    
    const [loading,setLoading] = useState(false);
    const[posts,setPosts]= useState([]);

    async function featchProductData(){
        setLoading(true);
         try{
            let API_URL="https://fakestoreapi.com/products"; //Problem in API
            const res= await fetch(API_URL);
            const data=res.json();
           // setPosts(data);
           setPosts(products);
         }
         catch(error){
            console.log("Error aaya he");
         }
        setLoading(false);

    }
    useEffect(()=>{
         featchProductData();
    },[])

    //console.log("Home Page");
    console.log({posts});
    

  return (
    <div>
           
          {
            loading ? (<Spinner></Spinner>):
            posts.length > 0 ?
            ( <div>
                    {
                        posts.map((post)=>(
                            <ProductCard key={post.id} post={post}></ProductCard>
                        ))
                    }
                </div>
            ):
            <div>
                
                <p>NO Data Found</p>
            </div> 
            
          }
    </div>
  );
};
export default Home;