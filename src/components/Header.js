import PropTypes from 'prop-types'

//rafce precica
import Button from './Button'
const Header = ({ title }) => {
    const onClick=()=>{
        console.log('Click')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button  text='Add' onClick=
            {onClick}/>
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
