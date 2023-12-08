import Button from 'react-bootstrap/Button';
import './AdminStyle.css'

function Adminfrontpage() {
  return (
    <div className='Background '>
        
        <div className= 'Button_div'>
          
            <div className="d-grid gap-5  ">
            <Button className='mt-5 logbtn' style={{backgroundColor:"black"}} size="lg"> ADMIN</Button>
            <Button className='mt-4 logbtn'style={{backgroundColor:"black"}}  size="lg">  USER </Button>
            </div>
      </div>
      <div className='noaccess'>
          <h1>No access from mobiles</h1>
        </div>
    </div>
  );
}

export default Adminfrontpage;