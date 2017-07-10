import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import GMapLocate from './GMapLocate'
import {getBakeshops} from '../actions/bakeshops'


const renderBakeshop = (bakeshop, key) => (
    <div className = "bakeshop-box">
          <h3 className='bakeshop-intro'>GRAB YOUR WALLET AND YOUR FAT PANTS AND HEAD ON DOWN TO...</h3>
          <img className = "bakeshop-logo" src={`${bakeshop.bakeshop_logo}`}/>
          <img className = "bakeshop-image" src={`${bakeshop.bakeshop_img}`}/>
          {renderMap(bakeshop)}
          <p className="bakeshop-details">{bakeshop.bakeshop_info}</p>
          <p className="bakeshop-info">Address: {bakeshop.bakeshop_address}</p>
          <p className="bakeshop-info">Open: {bakeshop.bakeshop_hours}</p>
    </div>
)

const renderMap = (bakeshop) =>  <GMapLocate address={bakeshop.bakeshop_address}/>

class RandomBakeshop extends React.Component {

  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.dispatch(getBakeshops())
  }

    render () {
      let bakeshops = this.props.bakeshops
      return (
        <div>
          {bakeshops.filter(bakeshop => {
              return bakeshop.bakeshop_id == this.props.match.params.bakeshop_id
            }).map((item, key) => {
              return renderBakeshop(item, key)
            })}
        </div>
      )}
    }

const mapStateToProps = (state) => {
  return {bakeshops: state.bakeshops}
}

export default connect(mapStateToProps)(RandomBakeshop)
