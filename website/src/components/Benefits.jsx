import Topline from '../assets/Topline.png';
import Bottomline from '../assets/Bottomline.png';

function Benefits() {
    return (
        <div className="benefit-container">
            <div className="ben-head">
                <h3 className='benefit-head1'>Road to</h3>
                <h2 className='ben-head2'>FUTURE</h2>
                <hr className="line2"></hr>
            </div>
            <div className="benefit">

                    <div className="box1">
                        <img className='ben-img1' src={Topline} alt="Topline"/>
                        <h2 className='ben-head1'>01</h2>
                        <p className='ben-para1'>Membership status</p>
                    </div>
                    <div className='box2'>
                        <h2 className='ben-head1'>02</h2>
                        <p className='ben-para1'>Business platform & Networking</p>
                        <img className='ben-img1' src={Bottomline} alt="Bottomline"/>
                    </div>


                    <div className="box3">
                        <img className='ben-img1' src={Topline} alt="Topline"/>
                        <h2 className='ben-head1'>03</h2>
                        <p className='ben-para1'>Enjoy privileges & Rewards</p>
                    </div>
                    <div className='box4'>
                        <h2 className='ben-head1'>04</h2>
                        <p className='ben-para1'>Enjoy Royalty & Bonus</p>
                        <img className='ben-img1' src={Bottomline} alt="Bottomline"/>
                    </div>
       
      
                    <div className="box5">
                        <img className='ben-img1' src={Topline} alt="Topline"/>
                        <h2 className='ben-head1'>05</h2>
                        <p className='ben-para1'>Increased Membership Value every year</p>
                    </div>
   
           
                    <div className='box6'>
                        <h2 className='ben-head1'>06</h2>
                        <p className='ben-para1'>6-20% Interest will be paid continuously for 10 year</p>
                        <img className='ben-img1' src={Bottomline} alt="Bottomline"/>
                    </div>
        
      
                    <div className="box7">
                        <img className='ben-img1' src={Topline} alt="Topline"/>
                        <h2 className='ben-head1'>07</h2>
                        <p className='ben-para1'>Business coaching & Training</p>
                    </div>
            </div>
        </div>
    );
}

export default Benefits;
