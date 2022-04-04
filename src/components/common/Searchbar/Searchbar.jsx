import React from 'react'
import { Search } from '../../icons'
import './Searchbar.css'

const Searchbar = ({ ...props }) => {
  const {
    placeholder = '',
    iconPlacement,
    variant,
    id,
    className,
    width,
  } = { ...props }
  return (
    <div className={'app-c-searchbar__root ' + className}>
      <label className="hidden" htmlFor={id}>
        Search
      </label>
      <input
        id={id}
        className={
          'app-c-searchbar__input w-full' +
          ' ' +
          (variant && 'app-c-searchbar__input--' + variant) +
          (width && ' md:' + width)
        }
        // style={{ width: width ? width : "" }}
        placeholder={placeholder}
        // defaultValue={router.query.q}
        // onKeyUp={handleKeyUp}
      />
      <div
        className={
          iconPlacement === 'start'
            ? 'app-c-searchbar__icon-container--start'
            : 'app-c-searchbar__icon-container'
        }
      >
        <Search className="icon" />
      </div>
    </div>
  )
}

export default Searchbar
