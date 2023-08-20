import { useNavigate } from "react-router-dom";
const CompC = () => {
  document.title='Thank you for visit'
  
  const navigation = useNavigate()
  const gotoHome = ()=>{
     navigation('/') 
      // alert(navigation);
  }
  return (
    <div className='compc'> 
       <div>CompC</div>  
       <button onClick={()=>gotoHome()}> Home page </button>   
     </div>
  )
}
export default CompC;