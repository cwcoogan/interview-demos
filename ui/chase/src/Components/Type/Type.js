function Type({ customText, isRequired, setIsRequired }) {
  return (
    <div className='flex items-center'>
      <div className='items-center font-semibold' >
        <label className='text-lg'> Multi-Select</label>
        <input className='w-10 scale-125 outline-none'
          type="checkbox"
          checked={isRequired}
          onChange={(e) => setIsRequired(e.target.checked)}

        />
        {isRequired && <span className='text-lg text-gray-500'>{customText}</span>}
      </div>
    </div>
  );    
}

export default Type;
