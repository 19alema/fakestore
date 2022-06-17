import React,{useState, useEffect} from 'react'
import Card from '../Container/Card';
function  Men() {

    const [men, setMen] = useState([]);
    const [loading, setLoading] = useState(true);
    const getJwellery = async () => {
        fetch("https://fakestoreapi.com/products/category/men's clothing")
            .then(res=>res.json())
            .then(data => {
                setMen(data);
                setLoading(false)
            })
    }

    useEffect(() => {
        getJwellery()
    }, [])
  return (
      <div id="men">
          <div className="py-[5em]">
              <div className="bg-no-repeat bg-[url('https://media.istockphoto.com/photos/clothing-store-male-visual-merchandising-professional-uses-tablet-to-picture-id1347626118?b=1&k=20&m=1347626118&s=170667a&w=0&h=1ugWUJJMZeMQ1RRjVnHAL2aoif3GXex-B4DCDRY0BIQ=')] h-[15em] bg-cover text-center flex items-center justify-center text-orange-600 text-[2em] font-[900] uppercase">
                  <h1>Men's Fashion</h1>
              </div>
              <div className="container md:grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 py-[2em] px-[20px]">
                  {loading && <h1 className="text-center">Loading ...</h1>}
                  {
                      men.map((item) => {
                          return <Card key={item.id} {... item} item={item} /> 
                      })
                  }
              </div>
          </div>
    </div>
  )
}

export default Men