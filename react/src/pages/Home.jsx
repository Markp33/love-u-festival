import React, { useEffect, useState } from "react";
import LogoBlack from '../assets/LogoBlack.png';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    const target = new Date("2025-09-06T12:00:00");
    const now = new Date();
    const diff = target - now;
    if (diff <= 0) return null;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    return { days, hours, minutes, seconds };
  }

  return (
    <div className="flex flex-col items-center justify-start pt-6 px-4 relative">
      <div className="absolute top-4 right-4">
        <div className="w-6 h-4 border" />
      </div>

      <div className="bg-[#fefcf9] p-4 mt-8">
        <img src={LogoBlack} alt="Logo" className="w-40 h-40 object-contain" />
      </div>

      <p className="text-center text-black text-lg mt-6">
        {t('homedate')}
      </p>

      <button className="mt-4 w-64 py-2 bg-gray-200 text-black text-lg rounded-md cursor-default">
        {timeLeft
          ? `${timeLeft.days}d ${timeLeft.hours}u ${timeLeft.minutes}m ${timeLeft.seconds}s`
          : "Het festival is begonnen!"}
      </button>

      <button className="mt-4 w-64 py-2 bg-red-600 text-white text-lg rounded-full font-bold">
        {t('ticket')}
      </button>
    </div>
  );
}