import PropTypes from 'prop-types'

//rafce precica
const Header = ({ title }) => {
    return (
        <header>
        <h1>{title}</h1>
        </header>
    )
}
Header.defaultProps={
title:'Shopping App',

}
    Header.propTypes={
        //isRequired mora da se upise al mi imamo default
    title:PropTypes.string.isRequired,

    }

export default Header
