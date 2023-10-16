import React, { useState } from 'react';


function InputBox({className}) {

    return (
        <div className={'w-full ' + className}>
            <label className="form-label">
                <input
                    className="form-input rounded-lg border-2 border-gray-300 w-2/3 py-2 px-4 text-lg outline-none"
                    type="text"
                    name="label"

                />
            </label>
        </div>

    );
}

export default InputBox;