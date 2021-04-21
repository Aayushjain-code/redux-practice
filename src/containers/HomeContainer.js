import { connect } from 'react-redux'
import { addToCart } from '../Services/Actions/actions'
import Home from '../components/Home'


const mapStateToProps = state => ({
	cardData: state
})

const mapDispatchToProps = dispach => ({
	addToCartHandler: data => dispach(addToCart(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
// export default Home
