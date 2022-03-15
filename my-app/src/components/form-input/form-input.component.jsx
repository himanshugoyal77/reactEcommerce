import React from "react";
import './form-input.styles.scss'

const FormInput = ({hanldeChange, label, ...otherprops}) => (
    <div className="group">
          <input  className="form-input" onChange={hanldeChange} {...otherprops}/>
        {
            label ? 
            (<label className={`${otherprops.value.length ? 'shrink': ''} form-input-label`}
            >
                {label}

            </label>
            ): null
        }
      
    </div>
)

export default FormInput;