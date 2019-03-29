import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import Dropdown from '../components/Dropdown'
import ListCharacters from '../components/ListCharacters'

class Main extends Component {
  render () {
    return (
      <Row>
        <Col xs={{ size: 8, offset: 2 }} className='my-5'>
          <h3 className='text-center'>Star Wars Films</h3>
          <Dropdown />
          <ListCharacters />
        </Col>
      </Row>
    )
  }
}

export default Main
