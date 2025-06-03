import React, { useEffect, useState } from "react";
import LogoBlack from "../assets/LogoBlack.png";
import { useTranslation } from "react-i18next";

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
    <div className="flex flex-col items-center justify-start pt-6 px-4 pb-28 relative">

      <div className="absolute top-4 right-4">
        <div className="w-6 h-4 border" />
      </div>

      <div className="bg-[#fefcf9] p-4 mt-8 animate-bounce">
        <img src={LogoBlack} alt="Logo" className="w-40 h-40 object-contain" />
      </div>

      <p className="text-center text-black text-lg mt-6 transition-opacity duration-1000 opacity-100">
        {t("homedate")}
      </p>

      <button className="mt-4 w-64 py-2 bg-gray-200 text-black text-lg rounded-md transition-all duration-500">
        {timeLeft
          ? `${timeLeft.days}d ${timeLeft.hours}u ${timeLeft.minutes}m ${timeLeft.seconds}s`
          : "Het festival is begonnen!"}
      </button>

      <button className="mt-4 w-64 py-2 bg-red-600 hover:bg-red-700 text-white text-lg rounded-full font-bold transition-transform duration-300 hover:scale-105">
        {t("ticket")}
      </button>

      <div className="mt-10 w-full max-w-2xl space-y-6">
        <h2 className="text-2xl font-bold text-black text-center mb-4">
          {t("news")}
        </h2>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-xl font-semibold mb-2">{t("news1_title")}</h3>
          <p className="text-sm text-gray-600 mb-3">{t("news1_text")}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-xl font-semibold mb-2">{t("news2_title")}</h3>
          <p className="text-sm text-gray-600 mb-3">{t("news2_text")}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-4">
          <h3 className="text-xl font-semibold mb-2">{t("news3_title")}</h3>
          <p className="text-sm text-gray-600 mb-3">{t("news3_text")}</p>
        </div>
      </div>
    </div>
  );
}
