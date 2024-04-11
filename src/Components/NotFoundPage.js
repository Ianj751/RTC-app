import {Link} from 'react-router-dom'
function NotFound() {
    return ( <>
    <div>Error 404: Page Not Found</div> 
    <Link to="/" >Click Here for the Login Page</Link>
    </>);
}

export default NotFound;
