import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Spinner, ListGroup, ListGroupItem } from 'reactstrap'
import ListStarships from './ListStarships'
import { getAllStarships } from '../actions'

class ListCharacters extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      modal: false
    }
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal })
  }

  onCharacterSelected = (starships) => () => {
    this.toggleModal()
    this.props.getAllStarships(starships)
  }

  renderListCharacters () {
    const { allCharacters } = this.props
    return _.map(allCharacters, data => {
      return <ListGroupItem key={data.name} style={{ cursor: 'pointer' }} onClick={this.onCharacterSelected(data.starships)}>{data.name}</ListGroupItem>
    })
  }

  render () {
    const { isListCharacterLoading } = this.props
    if (isListCharacterLoading) {
      return (
        <div className='text-center'>
          <Spinner />
        </div>
      )
    }

    return (
      <>
        <ListGroup>
          {this.renderListCharacters()}
        </ListGroup>
        <ListStarships isOpen={this.state.modal} toggleModal={this.toggleModal} />
      </>
    )
  }
}

const mapStateToProps = ({ starwars }) => {
  const { allCharacters, isListCharacterLoading } = starwars

  return { allCharacters, isListCharacterLoading }
}

export default connect(mapStateToProps, { getAllStarships })(ListCharacters)
