import React, { useState } from 'react';

function DefaultValue({color}) {
    

    return(
        <div className='w-full'>
        <label className="form-label ">
          <input
            className="form-input rounded-lg border-2 border-gray-300 w-2/3 py-2"
            type="text"
            name="label"

          />
        </label>
      </div>        
    );
}
export default DefaultValue;