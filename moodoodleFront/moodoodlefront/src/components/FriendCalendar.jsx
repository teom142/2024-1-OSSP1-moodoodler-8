import React from 'react';
import Calendar from './Calendar';

export default function FriendCalendar({
  to_user,
  handleColorChipToggle,
  selectedDate,
  setSelectedDate,
  handleShowCalendar,
}) {
  const style = {
    transform: 'scale(0.9)',
    transformOrigin: 'center', // 크기 조절 기준점을 중심으로 설정
    width: '100%',
    height: '100%',
  };
  return (
    <div className='fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-30'>
      <div className='flex flex-col items-center w-[342px] h-[370px] relative rounded-[20px] gap-[10px] bg-white'>
        <div className='flex justify-between w-[280px] h-[80px]'>
          <p className='self-end w-full font-extrabold text-center text-darkNavy'>{to_user.nickname}님의 감정 달력</p>
          <button className='self-end cursor-pointer' type='button' onClick={handleShowCalendar}>
            <img src='/assets/close.svg' alt='닫기' />
          </button>
        </div>
        <div style={style}>
          <Calendar
            handleColorChipToggle={handleColorChipToggle}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            to_user_id={to_user.id}
          />
        </div>
      </div>
    </div>
  );
}
