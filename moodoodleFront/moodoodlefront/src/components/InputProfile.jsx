import React from 'react';

export default function InputProfile({
  content,
  placeholder,
  modifiedProfile,
  setModifiedProfile,
  type,
  defaultValue,
}) {
  const handleSetValue = (e) => {
    if (e.target.value.length > 0) {
      setModifiedProfile({ ...modifiedProfile, [type]: e.target.value });
    } else {
      setModifiedProfile({ ...modifiedProfile, [type]: '' });
    }
  };

  return (
    <div className='flex flex-row w-[280px] h-[27px] justify-between items-start border-b border-b-darkGray/40ss'>
      <p className='text-[14px] font-semibold text-darkNavy tracking-[-0.98px]'>{content}</p>
      <input
        type='text'
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChange={(e) => handleSetValue(e)}
        className='w-[203px] h-[20px] text-[13px] font-medium text-darkGray tracking-[-0.5px] outline-none'></input>
    </div>
  );
}
