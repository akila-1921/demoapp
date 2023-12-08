import React from 'react'
import './reactbstask.css';
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'

export default function ReactBsTask() {
  return (
    <div className='Main_box'>
    <div className='First_box'>   
        <Card style={{ width: '20rem' }}>
          <Card.Body>
          <Card.Img variant="center" src="https://static.wixstatic.com/media/c30427_2d47dfc5f84e4c51bccb498f2c4d6f57~mv2.webp" style={{width:'100px',height:'100px'}} />
            <Card.Title style={{color:'blue'}}> EXPERIENCED TRAINERS</Card.Title>
            <Card.Text>
            The trainers here are certified working professionals, with years of experience in the industry.
            Get maximum benefits from their vast knowledge of the subject.
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
    
    </div>
    <div className='Second_box'>  
            <Card style={{ width: '20rem' }}>
              <Card.Body >
              <Card.Img variant="top" src="https://static.wixstatic.com/media/c30427_d8ca5e5774c54f4d8cbffbcfe3bf14a3~mv2.png/v1/fill/w_124,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/placement%20vector.png"  style={{width:'100px',height:'100px', }} />
                <Card.Title style={{color:'blue'}}>100 % placement Assistances</Card.Title>
                <Card.Text>
                Once the course is completed, our active placement cell will help you with mock interviews,
                resume preparations and guidances,  recruitment drives and so on.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

    </div>
    <div className='Third_box'>  
            <Card style={{ width: '20rem' }}>
              <Card.Body>
              <Card.Img variant="top" src="https://static.wixstatic.com/media/c30427_2d47dfc5f84e4c51bccb498f2c4d6f57~mv2.webp"  style={{width:'100px',height:'100px', }} />
                <Card.Title style={{color:'blue'}}>One to one training session</Card.Title>
                <Card.Text>
                We offer one-to-one training sessions to our students, where they can work closely with our instructors
                and get individual attention. Lab sessions are also conducted.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

    </div>
    <div className='Fourth_box'>  
            <Card style={{ width: '20rem' }}>
              <Card.Body>
              <Card.Img variant="top" src="https://static.wixstatic.com/media/3021ec_5c87fa8c638f47f68c4bf32c3f7e3341~mv2.png/v1/fill/w_124,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/presentation.png"  style={{width:'100px',height:'100px', }} />
                <Card.Title style={{color:'blue'}}>FLEXIBLE BATCH TIMING</Card.Title>
                <Card.Text>
                We started with 2 trainers, now we are 10+ and it’s still increasing. 
                So we can give the students flexibility and flexible timings.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

    </div>
    <div className='Fifth_box'>  
            <Card style={{ width: '20rem' }}>
              <Card.Body>
              <Card.Img variant="top" src="https://static.wixstatic.com/media/c30427_f29da79778a14a6e9c430acdaa326a63~mv2.jpg/v1/fill/w_124,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20943633.jpg"  style={{width:'100px',height:'100px', }} />
                <Card.Title style={{color:'blue'}}>WORK IN LIVE PROJECTS</Card.Title>
                <Card.Text>
                Have the rare opportunity to work on more than one live project and learn how actual 
                industry works under the guidance of the trainer
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

    </div>
    <div className='Sixth_box'>  
            <Card style={{ width: '20rem' }}>
              <Card.Body>
              <Card.Img variant="top" src="https://static.wixstatic.com/media/c30427_d8a2b5c139084486ba3bcc65b8f21248~mv2.jpg/v1/fill/w_124,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20943447.jpg"  style={{width:'100px',height:'100px', }} />
                <Card.Title style={{color:'blue'}}>COURSE MATERIALS</Card.Title>
                <Card.Text>
                Related e-books and practical course materials are provided for the students promptly. 
                Video recordings of lectures are also sent, if needed.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>

    </div>
    </div>
  )
}

// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';

// function GroupExample() {
//   return (
//     <CardGroup>
      
//        <Card>
//            <Card.Body>
//            <Card.Img variant="top" src="https://static.wixstatic.com/media/c30427_2d47dfc5f84e4c51bccb498f2c4d6f57~mv2.webp" />
//              <Card.Title>EXPERIENCED TRAINERS</Card.Title>
//              <Card.Text>
//              The trainers here are certified working professionals, with years of experience in the industry.
//              Get maximum benefits from their vast knowledge of the subject.
//              </Card.Text>
//              {/* <Button variant="primary">Go somewhere</Button> */}
//            </Card.Body>
//          </Card>
//          <Card >
//                <Card.Body>
//                <Card.Img variant="top" src="https://static.wixstatic.com/media/c30427_d8ca5e5774c54f4d8cbffbcfe3bf14a3~mv2.png/v1/fill/w_124,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/placement%20vector.png" />
//                  <Card.Title>100 % placement Assistances</Card.Title>
//                  <Card.Text>
//                  Once the course is completed, our active placement cell will help you with mock interviews,
//                  resume preparation guidance, recruitment drives and so on.
//                  </Card.Text>
//                  {/* <Button variant="primary">Go somewhere</Button> */}
//                </Card.Body>
//              </Card>
//              <Card >
//                <Card.Body>
//                <Card.Img variant="top" src="https://static.wixstatic.com/media/c30427_2d47dfc5f84e4c51bccb498f2c4d6f57~mv2.webp" />
//                  <Card.Title>One to one training session</Card.Title>
//                  <Card.Text>
//                  We offer one-to-one training sessions to our students, where they can work closely with our instructors
//                  and get individual attention. Lab sessions are also conducted.
//                  </Card.Text>
//                  {/* <Button variant="primary">Go somewhere</Button> */}
//                </Card.Body>
//              </Card>
//              <Card >
//               <Card.Body>
//               <Card.Img variant="top" src="https://static.wixstatic.com/media/3021ec_5c87fa8c638f47f68c4bf32c3f7e3341~mv2.png/v1/fill/w_124,h_93,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/presentation.png" />
//                 <Card.Title>FLEXIBLE BATCH TIMING</Card.Title>
//                 <Card.Text>
//                 We started with 2 trainers, now we are 10+ and it’s still increasing. 
//                 So we can give the students flexibility timings.
//                 </Card.Text>
//                 {/* <Button variant="primary">Go somewhere</Button> */}
//               </Card.Body>
//             </Card>
//             <Card >           
//                <Card.Body>
//                 <Card.Img variant="top" src="https://static.wixstatic.com/media/c30427_f29da79778a14a6e9c430acdaa326a63~mv2.jpg/v1/fill/w_124,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20943633.jpg" />
//                  <Card.Title>WORK IN LIVE PROJECTS</Card.Title>
//                  <Card.Text>
//                  Have the rare opportunity to work on more than one live project and learn how actual 
//                  industry works under the guidance of the trainer
//                  </Card.Text>
//                  {/* <Button variant="primary">Go somewhere</Button> */}
//                </Card.Body>
//              </Card>
//              <Card >
//                <Card.Body>
//                <Card.Img variant="top" src="https://static.wixstatic.com/media/c30427_d8a2b5c139084486ba3bcc65b8f21248~mv2.jpg/v1/fill/w_124,h_93,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20943447.jpg" />
//                  <Card.Title>COURSE MATERIALS</Card.Title>
//                  <Card.Text>
//                  Related e-books and practical course materials are provided for the students promptly. 
//                  Video recordings of lectures are also sent, if needed.
//                  </Card.Text>
//                  {/* <Button variant="primary">Go somewhere</Button> */}
//                </Card.Body>
//              </Card>
//     </CardGroup>
//   );
// }

// export default GroupExample;