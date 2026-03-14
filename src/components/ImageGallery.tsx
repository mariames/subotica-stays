import { useState } from "react";
import { X, ChevronLeft, ChevronRight, Grid2X2 } from "lucide-react";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

const ImageGallery = ({ images, title }: ImageGalleryProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "";
  };

  const prev = () => setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  // Show up to 5 in the grid
  const gridImages = images.slice(0, 5);
  const extraCount = images.length - 5;

  return (
    <>
      {/* Airbnb-style 5-image grid */}
      <div className="grid h-[420px] gap-2 overflow-hidden rounded-2xl md:grid-cols-4 md:grid-rows-2">
        {/* Main large image */}
        <button
          onClick={() => openLightbox(0)}
          className="relative col-span-2 row-span-2 overflow-hidden md:col-span-2"
        >
          <img
            src={gridImages[0]}
            alt={title}
            className="h-full w-full object-cover transition-opacity hover:opacity-90"
          />
        </button>

        {/* 4 smaller images */}
        {gridImages.slice(1).map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i + 1)}
            className="relative hidden overflow-hidden md:block"
          >
            <img
              src={img}
              alt={`${title} view ${i + 2}`}
              className="h-full w-full object-cover transition-opacity hover:opacity-90"
              loading="lazy"
            />
            {/* "Show all" overlay on last image */}
            {i === 3 && extraCount > 0 && (
              <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 transition-colors hover:bg-foreground/40">
                <span className="flex items-center gap-2 rounded-lg bg-background/90 px-4 py-2 text-sm font-medium text-foreground shadow-sm backdrop-blur-sm">
                  <Grid2X2 size={16} />
                  Show all {images.length} photos
                </span>
              </div>
            )}
          </button>
        ))}

        {/* Mobile: show all button */}
        <button
          onClick={() => openLightbox(0)}
          className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-lg bg-background/90 px-3 py-2 text-xs font-medium text-foreground shadow-sm backdrop-blur-sm md:hidden"
        >
          <Grid2X2 size={14} />
          {images.length} photos
        </button>
      </div>

      {/* Fullscreen Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-4 py-3 md:px-8">
            <span className="text-sm text-muted-foreground">
              {currentIndex + 1} / {images.length}
            </span>
            <button
              onClick={closeLightbox}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X size={20} />
            </button>
          </div>

          {/* Image area */}
          <div className="relative flex flex-1 items-center justify-center px-4 py-4 md:px-20">
            <button
              onClick={prev}
              className="absolute left-2 z-10 rounded-full border border-border bg-background p-2 shadow-sm transition-colors hover:bg-secondary md:left-6"
            >
              <ChevronLeft size={20} />
            </button>

            <img
              src={images[currentIndex]}
              alt={`${title} photo ${currentIndex + 1}`}
              className="max-h-full max-w-full rounded-lg object-contain"
            />

            <button
              onClick={next}
              className="absolute right-2 z-10 rounded-full border border-border bg-background p-2 shadow-sm transition-colors hover:bg-secondary md:right-6"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Thumbnail strip */}
          <div className="border-t border-border px-4 py-3 md:px-8">
            <div className="flex justify-center gap-2 overflow-x-auto">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-14 w-20 flex-shrink-0 overflow-hidden rounded-md transition-all ${
                    i === currentIndex
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "opacity-50 hover:opacity-80"
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageGallery;
