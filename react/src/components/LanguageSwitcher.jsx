import React from "react";
import i18n from "../i18n"; // of waar jouw i18n config zit

export default function LanguageSwitcher() {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4 items-center justify-center mt-4">
      <button onClick={() => changeLanguage("en")}>
        <img
          src="/enflag.png"
          alt="English"
          className="w-8 h-6 hover:scale-110 transition-transform"
        />
      </button>
      <button onClick={() => changeLanguage("nl")}>
        <img
          src="/nlflag.png"
          alt="Nederlands"
          className="w-8 h-6 hover:scale-110 transition-transform"
        />
      </button>

    </div>
  );
}
