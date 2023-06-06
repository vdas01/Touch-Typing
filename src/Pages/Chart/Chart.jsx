import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import "./Chart.css"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Chart = () => {
    const {stored_arr} = useContext(StoreContext);
   const data = stored_arr

  return (
    <div className='chart'>
      <h2>Compare and improve your speed and accuracy</h2>
       <div className="container">
     
          <LineChart width={730} height={250}  data={data}  margin={{ top: 5, right: 30, left: 20, bottom: 5 }} id='linechart'>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="duration" id='xaxis'/>
          <YAxis  id='yaxis'/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="acurracyr" stroke="#8884d8" />
          <Line type="monotone" dataKey="speedr" stroke="#82ca9d" />
           </LineChart>

       </div>
     <h3>Detailed Analysis:-</h3>
     <table>
     <thead>
       <tr>
         <th>Sl.No</th>
         <th>Accuracy</th>
         <th>Speed</th>
         <th>Correct Keys</th>
         <th>Wrong Keys</th>
         <th>Duration</th>
       </tr>
       </thead>
       <tbody>
       {data.map((elem,i)=>(
        <tr>
          <td>{i+1}</td>
          <td>{elem.acurracyr}</td>
          <td>{elem.speedr}</td>
          <td>{elem.correct_keysr}</td>
          <td>{elem.wrong_keysr}</td>
          <td>{elem.duration}</td>
        </tr>
       ))

       }
       </tbody>
     </table>
    </div>
  )
}

export default Chart