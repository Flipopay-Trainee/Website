import horse from '../assets/Horse.png'


function Footer(){
 
    return(
        <div className="footer-container">
            <div className="foot-left">
                <ul>
                    <li className='list'>Home</li>
                    <li className='list'>About us</li>
                    <li className='list'>Our mission</li>
                    <li className='list'>Our Venture</li>
                    <li className='list'>Contact us</li>
                </ul>
            </div>
            <div className="foot-mid">
                <img className='img-foot' src={horse} alt='logo'/>
                <h3 className='head1-foot'>FOOT GLOBAL NETWORK SDN BHD</h3>
                <h5 className='head2-foot'>BUSINESS NETWORKING CLUB</h5>
                <p className='para1-foot'>www.keyglobalnetwork.com</p>
            </div>
            <div className='foot-right'>
                <p className='para2-foot'>+123 456 789</p>
                <p className='para2-foot'>03,Abc road, kuala lumpur Malasiya</p>
            </div>
        </div>
    )

}





export default Footer