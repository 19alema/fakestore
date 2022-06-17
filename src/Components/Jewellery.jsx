import React,{useState, useEffect} from 'react'
import Card from '../Container/Card';

function Jewellery() {

    const [jwellery, setJwellery] = useState([]);
    const [loading, setLoading] = useState(true);

    const getJwellery = async () => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(data => {
                setJwellery(data);
                setLoading(false)
            })
    }

    useEffect(() => {
        getJwellery()
    }, [])

  
  return (
      <div id="jewellery">
          <div className="py-[5em]">
              <div className="bg-no-repeat bg-[url('https://media.istockphoto.com/photos/guiter-artificial-jwellery-picture-id646337622?b=1&k=20&m=646337622&s=170667a&w=0&h=35gLNlOvUqxCkNX7MClgwjnpoFZqduQLZd6bhRMueqw=')] h-[15em] bg-cover text-center flex items-center justify-center text-orange-600 text-[2em] font-[900] uppercase">
                  <h1>Jewellery</h1>
              </div>
             
              <div className="container md:grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 py-[2em] px-[20px]">
              {loading && <h1 className="text-center ">Loading ...</h1>}
                    {
                        jwellery.map((item) => {
                            return <Card key={item.id} {...item} item={item} /> 
                        })
                    }
                </div>
            
          </div>
    </div>
  )
}

export default Jewellery