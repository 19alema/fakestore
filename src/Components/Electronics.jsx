import React,{useState, useEffect} from 'react'
import Card from '../Container/Card';
function Electronics() {

    const [electronics, setElectronics] = useState([]);
    const [loading, setLoading] = useState(true);
    const getJwellery = async () => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(data => {
                setElectronics(data)
                setLoading(false)
            })
    }

    useEffect(() => {
        getJwellery()
    }, [])
  return (
      <div id="electronics">
          <div className="py-[5em]">
              <div className="bg-no-repeat bg-[url('https://media.istockphoto.com/photos/charged-mobile-phones-and-tablets-picture-id1269127423?b=1&k=20&m=1269127423&s=170667a&w=0&h=wWQDHyCKDRuL_jocSwO7G3Xpe0bPqwqRREwIAVDpenk=')] h-[15em] bg-cover text-center flex items-center justify-center text-orange-600 text-[2em] font-[900] uppercase">
                  <h1>Electronics</h1>
              </div>
              <div className="container md:grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-8 py-[2em] px-[20px]">
                 {loading && <h1 className="text-center">Loading ...</h1>}
                  {
                      electronics.map((item) => {
                          return <Card key={item.id} {... item} item={item} /> 
                      })
                  }
              </div>
          </div>
    </div>
  )
}

export default Electronics