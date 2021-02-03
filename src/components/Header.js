import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
//rafce precica
import Button from './Button'
const Header = ({ title ,onAdd,showAdd}) => {
    const location=useLocation()
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname==='/' && (<Button  text={showAdd ? 'Close':'Add'} onClick=
            {onAdd}/>)}
        </header>
    )
}
Header.defaultProps = {
    title: 'Shopping App',
    

}
Header.propTypes = {
    //isRequired mora da se upise al mi imamo default
    title: PropTypes.string.isRequired,

}
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',

// }

export default Header
