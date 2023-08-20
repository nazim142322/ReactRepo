import {useNavigate} from 'react-router-dom';

const CompB = () => {
  document.title='Best service center in dehradun';
  
  const navigate=useNavigate();
 
  return (
    <div className='compb'>        
        <div>CompB</div> 
         <button onClick={()=>(navigate(-1))}>Go to 
         Back</button>      
    </div>
  )
}
export default CompB