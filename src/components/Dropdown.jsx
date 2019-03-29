import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { FormGroup, Input, Spinner } from 'reactstrap'
import _ from 'lodash'
import { getAllCharacter, getAllSWFilms } from '../actions'

class Dropdown extends PureComponent {
  componentDidMount () {
    this.props.getAllSWFilms()
  }

  onFilmSelected = (e) => {
    this.props.getAllCharacter(e.target.value)
  }

  renderListDropDown () {
    const { allSWFilms } = this.props

    return _.map(allSWFilms, film => {
      return <option key={film.episode_id} value={film.url}>{film.title}</option>
    })
  }

  render () {
    const { isDropDownLoading } = this.props
    if (isDropDownLoading) {
      return (
        <div className='text-center'>
          <Spinner />
        </div>
      )
    }

    return (
      <FormGroup>
        <Input type='select' id='list-films' onChange={this.onFilmSelected}>
          <option />
          {this.renderListDropDown()}
        </Input>
      </FormGroup>
    )
  }
}

const mapStateToProps = ({ starwars }) => {
  const { allSWFilms, isDropDownLoading } = starwars

  return { allSWFilms, isDropDownLoading }
}

export default connect(mapStateToProps, { getAllCharacter, getAllSWFilms })(Dropdown)
