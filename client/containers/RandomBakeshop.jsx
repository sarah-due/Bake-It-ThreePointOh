import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import GMapLocate from './GMapLocate'
import {getBakeshops} from '../actions/bakeshops'


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
              {console.log(item)}
              return (
                <div className = "bakeshop-box">
                      <h3 className='bakeshop-intro'>GRAB YOUR WALLET AND YOUR FAT PANTS AND HEAD ON DOWN TO...</h3>
                      <a href={item.bakeshop_url} target="_blank"><img className = "bakeshop-logo" src={item.bakeshop_logo}/></a>
                      <img className = "bakeshop-image" src={item.bakeshop_img}/>
                      {renderMap({item})}
                      <p className="bakeshop-details">{item.bakeshop_info}</p>
                      <p className="bakeshop-info">Address: {item.bakeshop_address}</p>
                      <p className="bakeshop-info">Open: {item.bakeshop_hours}</p>
                </div>
              )
            })}
        </div>
      )}
    }

const mapStateToProps = (state) => {
  return {bakeshops: state.bakeshops}
}

export default connect(mapStateToProps)(RandomBakeshop)
