import React, {useState, useEffect} from 'react'
import axios from '../../api'
import Banner from '../../components/banner/Banner'
import Products from '../../components/products/Products';
import '../../App.css'

function Home() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [count , setCount] = useState(1)
  const [categories , setCategories] = useState([])

  const [categoryName , setCategoryName] = useState("all")
  useEffect(()=>{
    axios
      .get(`/products/categories`)
      .then(res => setCategories(res))
      .catch(err => console.log(err))
  },[])

  
  let options = categories?.data?.map((el , inx) =>
  <option key={inx}  value={el}>{el}</option>

)
  





  useEffect(()=>{
    setLoading(true)
    axios
      .get(`/products${categoryName === "all" ? "" : `/category/${categoryName}`}?limit=${count * 4 }`)
      .then(res => setData(res.data.products))
      .catch(res => console.log(res))
      .finally(()=> setLoading(false))
  },[count , categoryName])


 
  return (
    <div className='home'>
        <Banner />
        
        <select name="" value={categoryName} onChange={((e) => setCategoryName(e.target.value))} id="">
             <option value="all">All</option>
              {options}
          </select>

        <Products loading={loading} data={data}/>  
        <button className='see-btn' onClick={()=>setCount(p => p + 1)}>SEE MORE</button>
    </div>
  )
}

export default Home

