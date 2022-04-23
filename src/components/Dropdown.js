import React from 'react'
import DropdownContent from './DropdownContent'

const Dropdown = (props,ref) => {
    return (
        <div className="w-pageWidth block mx-auto bg-gray-700"  ref={ref}>
            {props.show?
            <div className="w-full bg-gray-900 ">
                <DropdownContent content={props.content} />
            </div>:null
            }
        </div>
    )
}

export default React.forwardRef(Dropdown)
