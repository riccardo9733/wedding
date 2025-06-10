import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface ImageItem {
  img: string;
  title: string;
  cols?: number; // Optional: Allow individual items to span columns, matches Home.tsx logic
}

interface GalleryProps {
  images: ImageItem[];
  defaultCols?: number; // Optional: A fixed number of columns
  enableRandomCols?: boolean; // Optional: Flag to enable random column spanning for xs screens like in Home.tsx
}

const Gallery: React.FC<GalleryProps> = ({ images, defaultCols, enableRandomCols = false }) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only('xs'));
  const isSm = useMediaQuery(theme.breakpoints.only('sm'));
  const isMd = useMediaQuery(theme.breakpoints.only('md'));

  const getResponsiveCols = () => {
    if (defaultCols) return defaultCols; // Use defaultCols if provided
    if (isXs) return enableRandomCols ? 2 : 1; // Home.tsx uses 2, Programma.tsx uses 1 for xs
    if (isSm) return 2;
    if (isMd) return 3;
    return 4; // Default for lg and xl
  };

  const cols = getResponsiveCols();

  return (
    <ImageList variant="masonry" cols={cols} gap={16}>
      {images.map((item) => {
        let itemCols = item.cols || 1; // Use item-specific cols if provided
        // Apply random column span logic from Home.tsx if enabled and on xs screens
        if (enableRandomCols && isXs && !item.cols) { // and no specific col span is set for the item
          itemCols = Math.random() < 0.3 ? 2 : 1;
        }

        // If not on xs or random cols not enabled, and using responsive calculation, ensure itemCols is not > ImageList cols
        if (!defaultCols && itemCols > cols) {
            itemCols = cols;
        }


        return (
          <ImageListItem key={item.img} cols={itemCols}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                border: '1px solid #eee',
                borderRadius: '8px',
                display: 'block',
                width: '100%',
                height: 'auto', // Added for maintaining aspect ratio
              }}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
};

export default Gallery;
