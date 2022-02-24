import React, { memo, Fragment } from 'react';
import { exact, string, arrayOf } from 'prop-types';
import { ThemeHeaderWrapper } from './style';
import { Link } from "react-router-dom";

const LThemeHeaderRCM = memo(function LThemeHeaderRCM(props) {
  const {title, keywords, more} = props
  
  return (
    <ThemeHeaderWrapper>
      <div className="left">
        <h3>
          <i className="sprite_02"/>
          <Link to={title.to}>{title.text}</Link>
        </h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <Fragment key={item.text}>
                  <Link to={item.to}>{item.text} </Link>
                  {
                    keywords.length - 1 > index ? <span className="divider">|</span> : ''
                  }
                </Fragment>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <Link to={more.to}>{more.text}</Link>
        <span className="sprite_02"/>
      </div>
    
    </ThemeHeaderWrapper>
  )
})

LThemeHeaderRCM.propTypes = {
  title: exact({
    text: string.isRequired,
    to: string
  }).isRequired,
  keywords: arrayOf(exact({
    text: string.isRequired,
    to: string
  })),
  more: exact({
    text: string.isRequired,
    to: string
  })
}

LThemeHeaderRCM.defaultProps = {
  keywords: [],
  more: {
    text: "更多",
    to: "#"
  }
}
export default LThemeHeaderRCM
