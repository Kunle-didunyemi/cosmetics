import React from 'react'
import css from './Visual.module.css';
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image';
import Before from '../../assets/before.png';
import After from '../../assets/after.png';

const Visual = () => {
  return (
    <div className={css.visual}>
      <div className={css.left}>
        <span>Virtual Try-on</span>
        <span>Never Buy the wrong Shade Again!</span>
        <span>Try Now!</span>
        <img src= {Shade} alt="" />
      </div>

      <div className={css.right}>
        <div className={css.wraper}>
       <ReactCompareImage leftImage={Before} rightImage={After} />
        </div>
      </div>
    </div>
  )
}

export default Visual