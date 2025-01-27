import React, { useState, useEffect, useCallback } from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import { MapService } from '@/services/MyMap';
import styles from './MyMap.module.scss';

interface PlacemarkType {
  id: number;
  latitude: number;
  longitude: number;
  caption: string;
}

function MyMap(): React.ReactElement {
  const [placemarks, setPlacemarks] = useState<PlacemarkType[]>([]);
  const mapService = new MapService();

  const loadPlacemarks = useCallback(async () => {
    try {
      const marks = await mapService.getAllPlacemarks();
      setPlacemarks(marks);
    } catch (error) {
      console.error('Error loading placemarks:', error);
    }
  }, [mapService]);

  useEffect(() => {
    loadPlacemarks();
  }, [loadPlacemarks]);

  const handleMapClick = async (event: any) => {
    const [latitude, longitude] = event.get('coords');
    const caption = prompt('Введите текст для надписи:');

    if (caption) {
      try {
        const newPlacemark = await mapService.createPlacemark({
          latitude,
          longitude,
          caption
        });
        setPlacemarks([...placemarks, newPlacemark]);
      } catch (error) {
        console.error('Error creating placemark:', error);
      }
    }
  };

  return React.createElement(
    'div',
    { className: styles.mapContainer },
    React.createElement(
      YMaps,
      null,
      React.createElement(
        Map,
        {
          className: styles.map,
          defaultState: { center: [43.1156, 131.8727], zoom: 13 },
          onClick: handleMapClick,
        },
        placemarks.map((placemark) =>
          React.createElement(Placemark, {
            key: placemark.id,
            geometry: [placemark.latitude, placemark.longitude],
            properties: {
              iconContent: placemark.caption,
            },
          })
        )
      )
    )
  );
}

export default MyMap;