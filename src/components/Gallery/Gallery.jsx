import { useRef } from "react";
import { useScrollBottom } from "../../hooks/useScrollBottom";
import { CardItem } from "./CardItem";
import "./Gallery.css";

export const Gallery = ({
  viewMode,
  displayedCards,
  isLoading,
  onLoadMore,
  hasMoreToLoad,
}) => {
  const galleryRef = useRef(null);
  const { isScrolledToBottom, handleScroll } = useScrollBottom(galleryRef);

  return (
    <>
      <div className={`gallery-wrap ${isScrolledToBottom ? "at-bottom" : ""}`}>
        <section
          ref={galleryRef}
          onScroll={handleScroll}
          className={`cards-gallery ${viewMode === "tiles" ? "view-tiles" : "view-rows"} ${isLoading ? "gallery-loading-fade" : ""}`}
        >
          {isLoading ? (
            <div className="gallery-loader-container">
              <div className="loading-spinner" />
              <p>Loading publications...</p>
            </div>
          ) : displayedCards.length === 0 ? (
            <div className="no-results-message">
              No publications found in database.
            </div>
          ) : (
            displayedCards.map((card) => <CardItem key={card.id} card={card} />)
          )}
        </section>
      </div>

      {!isLoading && hasMoreToLoad && (
        <div className="load-more-container">
          <button className="load-more-btn" onClick={onLoadMore}>
            LOAD MORE
          </button>
        </div>
      )}
    </>
  );
};
