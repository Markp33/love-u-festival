import React, { useState } from "react";
import { timeToMinutes } from "../utils.js";

const startTime = timeToMinutes("10:00");
const endTime = timeToMinutes("23:45");
const totalMinutes = endTime - startTime;

export default function LineupGrid({ acts = [] }) {
  let stagesMap = {};
  let uniqueStages = [];

  if (acts.length && acts[0].artist) {
    acts.forEach((act) => {
      if (!stagesMap[act.stage]) {
        stagesMap[act.stage] = [];
        uniqueStages.push(act.stage);
      }
      stagesMap[act.stage].push(act);
    });
  } else {
    acts.forEach((stage) => {
      if (!stagesMap[stage.stage]) {
        stagesMap[stage.stage] = [];
        uniqueStages.push(stage.stage);
      }
      if (Array.isArray(stage.performances)) {
        stagesMap[stage.stage].push(...stage.performances);
      }
    });
  }

  const [hearted, setHearted] = useState({});
  const [infoOpen, setInfoOpen] = useState({});

  const toggleHeart = (key) => {
    setHearted((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const toggleInfo = (key) => {
    setInfoOpen((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="overflow-auto w-full h-[full] border rounded bg-white">
      <div
        className="min-w-[1500px] relative grid"
        style={{ gridTemplateColumns: "100px repeat(56,1fr)" }}
      >
        <div
          className="sticky top-0 bg-white z-10 border-b border-r"
          style={{ gridColumn: 1, gridRow: 1 }}
        ></div>
        {Array.from({ length: 56 }, (_, i) => {
          const hour = 10 + Math.floor(i / 4);
          const minute = (i % 4) * 15;
          const label = `${hour.toString().padStart(2, "0")}:${minute
            .toString()
            .padStart(2, "0")}`;
          return (
            <div
              key={i}
              className="text-xs text-center border-r border-b h-8 sticky top-0 z-10"
              style={{ gridColumn: i + 2, gridRow: 1 }}
            >
              {label}
            </div>
          );
        })}

        {uniqueStages.map((stageName, stageIdx) => {
          const row = stageIdx + 2;
          return (
            <React.Fragment key={stageName}>
              <div
                className="border-b border-r flex items-center justify-end pr-2"
                style={{ gridColumn: 1, gridRow: row }}
              >
                {stageName}
              </div>
              {Array.from({ length: 56 }, (_, i) => (
                <div
                  key={i}
                  className="border-b border-r h-12"
                  style={{ gridColumn: i + 2, gridRow: row }}
                ></div>
              ))}
            </React.Fragment>
          );
        })}

        {uniqueStages.map((stageName, stageIdx) =>
          stagesMap[stageName].map((act, index) => {
            const start = timeToMinutes(act.start);
            const end = timeToMinutes(act.end);
            const colStart =
              Math.floor(((start - startTime) / totalMinutes) * 56) + 2;
            const colEnd =
              Math.ceil(((end - startTime) / totalMinutes) * 56) + 2;
            const row = stageIdx + 2;
            const key =
              stageName + "-" + (act.artist || act.name || index) + "-" + index;

            return (
              <React.Fragment key={key}>
                <div
                  className="bg-red-500 text-white text-sm flex items-center justify-center gap-2 rounded border-2 border-black"
                  style={{
                    gridColumn: `${colStart} / ${colEnd}`,
                    gridRow: row,
                    zIndex: 30,
                    margin: "2px 0",
                  }}
                >
                  <span>{act.artist || act.name}</span>
                  <button
                    onClick={() => toggleHeart(key)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.2em",
                      lineHeight: 1,
                    }}
                    aria-label="Toggle favorite"
                    tabIndex={0}
                  >
                    {hearted[key] ? "❤️" : "🤍"}
                  </button>
                  <button
                    onClick={() => toggleInfo(key)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "1.2em",
                      lineHeight: 1,
                    }}
                    aria-label="Meer info"
                    tabIndex={0}
                  >
                    ℹ️
                  </button>
                </div>
                {infoOpen[key] && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6 relative">
                      <button
                        onClick={() => toggleInfo(key)}
                        className="absolute top-3 right-4 text-2xl font-bold text-gray-500 hover:text-gray-800"
                        aria-label="Sluit info"
                      >
                        ❌
                      </button>
                      <h2 className="text-xl font-bold mb-2">
                        {act.artist || act.name}
                      </h2>
                      <p className="text-sm text-gray-700 mb-1">
                        <b>Tijd:</b> {act.start} - {act.end}
                      </p>

                      {act.description && (
                        <p className="text-sm text-gray-600 mt-2 mb-2">
                          <b>Beschrijving:</b> {act.description}
                        </p>
                      )}

                      {act.image && (
                        <img
                          src={act.image}
                          alt={act.artist || act.name}
                          className="w-32 h-32 object-cover rounded-full mb-4 mx-auto border-4 border-red-200 shadow"
                          style={{ display: "block" }}
                        />
                      )}

                      {act.video && (
                        <video
                          src={act.video}
                          controls
                          className="w-full h-64 rounded"
                        />
                      )}
                    </div>
                  </div>
                )}
              </React.Fragment>
            );
          })
        )}
      </div>
    </div>
  );
}
