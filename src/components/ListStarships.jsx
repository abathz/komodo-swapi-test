import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
  Modal as ModalDialog,
  ModalHeader,
  ModalBody,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Spinner
} from 'reactstrap'
import _ from 'lodash'

class ListStarships extends PureComponent {
  renderListStarships () {
    const { allStarships, isListStarshipLoading } = this.props
    if (isListStarshipLoading) {
      return (
        <Col>
          <Spinner />
        </Col>
      )
    }

    if (allStarships.length === 0) {
      return (
        <Col>
          <p>No starship message</p>
        </Col>
      )
    }

    return _.map(allStarships, data => {
      return (
        <Col key={data.name} xs='4' className='text-center mb-3'>
          <Card>
            <CardBody>
              <CardTitle>{data.name}</CardTitle>
              <CardText>{data.model}</CardText>
            </CardBody>
          </Card>
        </Col>
      )
    })
  }

  render () {
    return (
      <ModalDialog style={{ maxWidth: 900 }} isOpen={this.props.isOpen} toggle={this.props.toggleModal}>
        <ModalHeader toggle={this.props.toggleModal}>List of Starships</ModalHeader>
        <ModalBody>
          <Row className='text-center'>
            {this.renderListStarships()}
          </Row>
        </ModalBody>
      </ModalDialog>
    )
  }
}

const mapStateToProps = ({ starwars }) => {
  const { allStarships, isListStarshipLoading } = starwars

  return { allStarships, isListStarshipLoading }
}

export default connect(mapStateToProps)(ListStarships)
