import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';



function FullDecPizza() {
   const [pizas, setPizas] = useState();
   const navigate = useNavigate()
   const { id } = useParams();
   useEffect(() => {

      const fetch = async ()=>  {
         try {
            const {data} = await axios.get('https://6471f2906a9370d5a41adb75.mockapi.io/items/' + id)
            setPizas(data)
         } catch (error) {
            alert(error)
            navigate('/')
         }
      }
      fetch()

   }, []);

  

   if (!pizas) {
      return <h1>Loading....</h1>
   }

   return (
      <div className="contaner">
         <div>
            <img src={pizas.imageUrl} alt="" />
            <h2>{pizas.title}</h2>
            <p>{pizas.price}</p>
         </div>
      </div>
   );
}

export default FullDecPizza;
