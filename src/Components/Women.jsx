import React,{useState, useEffect} from 'react'
import Card from '../Container/Card';
function Women() {

    const [women, setWomen] = useState([]);
    const [loading, setLoading] = useState(true);
    const getJwellery = async () => {
        fetch("https://fakestoreapi.com/products/category/women's clothing")
            .then(res=>res.json())
            .then(data => {
                setLoading(false)
                setWomen(data)
            })
    }

    useEffect(() => {
        getJwellery()
    }, [])
  return (
      <div id="women">
          <div className="py-[5em">
              <div className="bg-no-repeat bg-[url('https://media.istockphoto.com/photos/asian-chinese-female-boutique-shop-clothing-store-owner-checking-picture-id1307512096?b=1&k=20&m=1307512096&s=170667a&w=0&h=ooUd9gy8VPs6U5WR_EwH9SqtPG1drP7AidYY-f5BSwU=')] h-[15em] bg-cover text-center flex items-center justify-center text-orange-600 text-[2em] font-[900] uppercase">
                  <h1>Women Clothes</h1>
              </div>
              <div className="container md:grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 py-[2em] px-[20px]">
                  {loading &&<h1 className="text-center">Loading ...</h1>}
                  {
                      women.map((item) => {
                          return <Card key={item.id} {... item} item={item} /> 
                      })
                  }
              </div>
          </div>
    </div>
  )
}

export default Women