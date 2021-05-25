import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'

const HomeScreen2 = ({ match }) => {
//   const keyword = match.params.keyword

//   const pageNumber = match.params.pageNumber || 1

//   const dispatch = useDispatch()

//   const productList = useSelector((state) => state.productList)
//   const { loading, error, products, page, pages } = productList

//   useEffect(() => {
//     dispatch(listProducts(keyword, pageNumber))
//   }, [dispatch, keyword, pageNumber])
const products = [
    {  
        id:1,
        link:'http://localhost:3000',
        name: 'Medical Store' },
        {  id:2,link:'http://localhost:3000',
        name: 'Radiology' }
]
  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <> */}
          <Row>
            {products.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                ddd
              </Col>
            ))}
          </Row>
    </>
  )
}

export default HomeScreen2
