// export const dynamic = 'force-dynamic'
"use client";
import { CustomMapIcon } from "@/assets/icons";
import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";
import { renderToString } from "react-dom/server";

const MapContainer = dynamic(
  () => import("react-leaflet").then((m) => m.MapContainer),
  { ssr: false },
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((m) => m.TileLayer),
  { ssr: false },
);
const Marker = dynamic(() => import("react-leaflet").then((m) => m.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((m) => m.Popup), {
  ssr: false,
});
// const useMapEvents = dynamic(() => import('react-leaflet').then(m => m.useMapEvents), { ssr: false });

let L: typeof import("leaflet") | null = null;
if (typeof window !== "undefined") {
  L = await import("leaflet");
}

interface CustomMapProps extends ComponentPropsWithoutRef<"div"> {
  center: [number, number];
  zoom?: number;
  className?: string;
  isChange?: boolean;
  onSelectLocation?: (coords: [number, number], address?: string) => void;
}

const CustomMap: React.FC<CustomMapProps> = ({
  center,
  zoom = 13,
  className,
  onSelectLocation,
  isChange,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [customDivIcon, setCustomDivIcon] = useState<any>(null);

  useEffect(() => {
    if (!L) return;
    const icon = L.divIcon({
      html: renderToString(<CustomMapIcon className="w-7 h-7 text-dark" />),
      className: "",
      iconSize: [32, 32],
      iconAnchor: [16, 32],
    });
    setCustomDivIcon(icon);
  }, []);

  const LocationMarker: React.FC<{
    onSelectLocation?: (coords: [number, number], address?: string) => void;
  }> = ({ onSelectLocation }) => {
    const [position, setPosition] = useState<[number, number] | null>(null);
    const [title, setTitle] = useState<string>("");

    const MapEvents = dynamic(
      () =>
        import("react-leaflet").then((m) => {
          const Component = () => {
            m.useMapEvents({
              async click(e) {
                const coords: [number, number] = [e.latlng.lat, e.latlng.lng];
                setPosition(coords);
                try {
                  const res = await fetch(
                    `https://nominatim.openstreetmap.org/reverse?format=json&lat=${coords[0]}&lon=${coords[1]}`,
                    { cache: "no-store" },
                  );
                  const data = await res.json();
                  const addr = data.display_name || "مکان ناشناس";
                  setTitle(addr);
                  if (onSelectLocation) onSelectLocation(coords, addr);
                } catch (err) {
                  console.error("❌ خطا در دریافت آدرس:", err);
                }
              },
            });
            return null;
          };
          return Component;
        }),
      { ssr: false },
    );

    if (!customDivIcon) return null;

    return (
      <>
        <MapEvents />
        {position && (
          <Marker position={position} icon={customDivIcon}>
            <Popup>
              {title ||
                `Lat: ${position[0].toFixed(5)}, Lng: ${position[1].toFixed(
                  5,
                )}`}
            </Popup>
          </Marker>
        )}
      </>
    );
  };

  if (!customDivIcon) return null;

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      className={className}
      scrollWheelZoom={isChange}
      dragging={isChange}
      doubleClickZoom={isChange}
      touchZoom={isChange}
      zoomControl={isChange}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {isChange && <LocationMarker onSelectLocation={onSelectLocation} />}
      {!isChange && customDivIcon && (
        <Marker
          position={center}
          icon={customDivIcon}
          eventHandlers={{
            click: () =>
              window.open(
                "https://maps.app.goo.gl/NSpxWUEqxAeVZB4q6",
                "_blank",
              ),
          }}
          title="کلیک کنید تا به گوگل مپ بروید"
        />
      )}
    </MapContainer>
  );
};

export default CustomMap;
