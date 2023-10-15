import React, { useState } from 'react';

function DefaultValue() {

    return(
        <div className='h-[50px] pt-3'>
        <label className="form-label">
          <text className='ml-5 mr-[6%]'>Default Value:</text>
          <input
            className="form-input rounded-lg border-2 border-gray-500 opacity-10"
            type="text"
            name="label"

          />
        </label>
      </div>        
    );
}
export default DefaultValue;