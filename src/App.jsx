import { useState } from "react";
import "./App.css";
import "flatpickr/dist/flatpickr.min.css";

import blob1 from "./assets/blob1.svg";
import blob2 from "./assets/blob2.svg";

import { ProfileHeader } from "./components/ProfileHeader/ProfileHeader";
import { ViewSwitcher } from "./components/ViewSwitcher/ViewSwitcher";
import { Gallery } from "./components/Gallery/Gallery";
import "./components/Gallery/Gallery.css";

import { INITIAL_CARDS, generateNewCards } from "./utils/cardUtils";
import { parseCardDate, getDeterministicFakeDate } from "./utils/dateUtils";

function App() {
  const [viewMode, setViewMode] = useState("tiles");
  const [cards, setCards] = useState(INITIAL_CARDS);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoading] = useState(false);
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const { from: fromDate, to: toDate } = dateRange;

  const handleDateChange = (selectedDates, fieldType) => {
    setDateRange((prev) => ({
      ...prev,
      [fieldType]: selectedDates[0] || null,
    }));
    setVisibleCount(8);
  };

  const strictFilteredCards = cards.filter((card) => {
    const cardDate = parseCardDate(card.dateRight);
    const cTime = new Date(
      cardDate.getFullYear(),
      cardDate.getMonth(),
      cardDate.getDate(),
      0,
      0,
      0,
      0,
    ).getTime();
    const fTime = fromDate
      ? new Date(
          fromDate.getFullYear(),
          fromDate.getMonth(),
          fromDate.getDate(),
          0,
          0,
          0,
          0,
        ).getTime()
      : null;
    const tTime = toDate
      ? new Date(
          toDate.getFullYear(),
          toDate.getMonth(),
          toDate.getDate(),
          0,
          0,
          0,
          0,
        ).getTime()
      : null;

    if (fTime && tTime) return cTime >= fTime && cTime <= tTime;
    if (fTime && !tTime) return cTime === fTime;
    if (!fTime && tTime) return cTime === tTime;
    return true;
  });

  let displayedCards = strictFilteredCards.slice(0, visibleCount);

  if ((fromDate || toDate) && displayedCards.length < visibleCount) {
    const currentDisplayedIds = displayedCards.map((c) => c.id);
    const backupCards = cards
      .filter((card) => !currentDisplayedIds.includes(card.id))
      .sort((a, b) => a.id - b.id);
    const neededCount = visibleCount - displayedCards.length;
    const adaptedTail = backupCards.slice(0, neededCount).map((card) => {
      const stableFakeDate = getDeterministicFakeDate(
        card.id,
        fromDate,
        toDate,
      );
      return {
        ...card,
        dateRight: stableFakeDate,
        dateBottomRight: stableFakeDate,
      };
    });
    displayedCards = [...displayedCards, ...adaptedTail];
  }

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
    setCards((prevCards) => [
      ...prevCards,
      ...generateNewCards(prevCards.length),
    ]);
  };

  return (
    <div className="page-bg">
      <div className="page-center">
        <img src={blob2} alt="" className="blob-bottom" aria-hidden="true" />
        <div className="header-blob-wrap">
          <img src={blob1} alt="" className="blob-top" aria-hidden="true" />
        </div>
        <div className="wrapper">
          <ProfileHeader onDateChange={handleDateChange} />
          <main className="main-content">
            <ViewSwitcher viewMode={viewMode} onChange={setViewMode} />
            <Gallery
              viewMode={viewMode}
              displayedCards={displayedCards}
              isLoading={isLoading}
              hasMoreToLoad={displayedCards.length > 0}
              onLoadMore={handleLoadMore}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
