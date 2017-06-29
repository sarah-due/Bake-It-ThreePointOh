import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {getBakeshops} from '../actions/bakeshops'


const renderBakeshop = (bakeshop, key) => (
    <div className = "col-md-4 bakeshop-box">
      {console.log(bakeshop)}
          <img className = "bakeshop-logo" src={`${bakeshop.bakeshop_logo}`}/>
          <img className = "bakeshop-image" src={`${bakeshop.bakeshop_img}`}/>
          <p className="bakeshop-info">{bakeshop.bakeshop_hours}</p>
          <p className="bakeshop-info">{bakeshop.bakeshop_info}</p>
    </div>
)

class RandomBakeshop extends React.Component {

  componentDidMount () {
    window.scrollTo(0, 0)
    this.props.dispatch(getBakeshops())
  }

    render () {
      let bakeshops= this.props.bakeshops
      console.log(bakeshops);
      return (
        <div>
          {bakeshops.filter(bakeshop => {
              return bakeshop.bakeshop_id == this.props.match.params.bakeshop_id
            }).map((item, key) => {
              console.log(item);
              return renderBakeshop(item, key)
            })}
        </div>
      )}
    }

const mapStateToProps = (state) => {
  return {bakeshops: state.bakeshops}
}

export default connect(mapStateToProps)(RandomBakeshop)
