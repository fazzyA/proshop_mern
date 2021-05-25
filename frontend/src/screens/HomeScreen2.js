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
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'
import logo1 from './images/medicine-banner.jpg'
import logo2 from './images/xray.jpg'

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
            id: 1,
            link: process.env.REACT_APP_SER1,
            image: logo1,
            name: 'Medical Store'
        },
        {
            id: 2,
            link: process.env.REACT_APP_SER2,
            name: 'Radiology',
            image: logo2
        }
    ]
    const keyword = false
    return (
        <>
            <Meta title='Gift Store'/>
            {!keyword ? (
                <ProductCarousel />
            ) : (
                <Link to='/' className='btn btn-light'>
                    Go Back
                </Link>
            )}
            <h1>Our Services</h1>
            {/* {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <> */}
            <Row>
                {products.map((product) => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Card className='my-3 p-3 rounded'>
                            <a href={product.link} target="_blank" rel="noreferrer">
                                <Card.Img src={product.image} variant='top' />
                            </a>

                            <Card.Body>
                            <a href={product.link} target="_blank" rel="noreferrer">
                                    <Card.Title as='div'>
                                        <strong>{product.name}</strong>
                                    </Card.Title>
                                </a>

                                <Card.Text as='div'>
                                    <Rating
                                        value={5}
                                        text={`Deptarment ${product.id}`}
                                    />
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen2
