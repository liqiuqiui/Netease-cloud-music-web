import React, { memo, Fragment } from 'react';
import propTypes from 'prop-types';
import { ThemeHeaderWrapper } from './style';

 const LThemeHeaderRCM = memo(function LThemeHeaderRCM(props) {
  const { title, keywords } = props

  return (
    <ThemeHeaderWrapper >
      <div className="left">
        <h3>
          <i className="sprite_02"></i>
          <a href="">{title}</a>
        </h3>
        <div className="keyword">
          {
            keywords.map((item, index) => {
              return (
                <Fragment key={item.title}>
                  <a href='todo'>{item.title} </a>
                  {
                    keywords.length -1 > index ? <span className="divider">|</span> : ''
                  }
                  
                </Fragment>
              )
            })
          }
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <span className="sprite_02"></span>
      </div>

    </ThemeHeaderWrapper>
  )
 })

LThemeHeaderRCM.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array
}

LThemeHeaderRCM.defaultProps = {
  keywords: []
}
export default LThemeHeaderRCM