import {
  MapContainer,
  Marker,
  Popup,
  ImageOverlay,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link, useNavigate } from "react-router"; // <-- use 'react-router' for Link

const createIcon = (filename, size = [40, 40]) =>
  L.icon({
    iconUrl: `/map/${filename}`,
    iconSize: size,
    iconAnchor: [size[0] / 2, size[1]],
    popupAnchor: [0, -size[1]],
  });


const icons = {
  entrance: createIcon('marker_entrance_exit.svg', [100, 100]),
  locker: createIcon("marker_locker.svg"),
  stage1: createIcon("marker_stage1_ponton.svg"),
  stage2: createIcon("marker_stage2_the_lake.svg"),
  stage3: createIcon("marker_stage3_the_club.svg"),
  stage4: createIcon("marker_stage4_hangar.svg"),
  bar: createIcon("marker_bar.svg"),
  food: createIcon("marker_food.svg"),
  icecream: createIcon("marker_ice_cream.svg"),
  merch: createIcon("marker_merchandise.svg"),
  toilet: createIcon("marker_toilet.svg"),
  fa: createIcon("marker_first_aid.svg"),
};

const attractions = [
  {
    name: "Entrance",
    position: [130, 1160],
    description: "Main entrance of the festival",
    icon: icons.entrance,
  },
  {
    name: "Locker",
    position: [180, 400],
    description: "Put your personal belongings away.",
    icon: icons.locker,
  },
  {
    name: "Stage 1",
    position: [370, 350],
    description: "Ponton",
    icon: icons.stage1,
  },
  {
    name: "Icecreams",
    position: [320, 450],
    description: "Get your icecream here!",
    icon: icons.icecream,
  },
  {
    name: "Merchandise",
    position: [210, 300],
    description: "Get your U-Merch here!",
    icon: icons.merch,
  },
  {
    name: "Toilet",
    position: [210, 135],
    description: "Make sure to stay fresh!",
    icon: icons.toilet,
  },
  {
    name: "Bar",
    position: [255, 205],
    description: "You can get your drinks here!",
    icon: icons.bar,
  },
  {
    name: "Food",
    position: [360, 205],
    description: "Grab a bite to eat!",
    icon: icons.food,
  },
  {
    name: "First Aid",
    position: [680, 311],
    description: "If you need help, go here!",
    icon: icons.fa,
  },
  {
    name: "Merchandise",
    position: [590, 535],
    description: "Get your U-Merch here!",
    icon: icons.merch,
  },
  {
    name: "Food",
    position: [545, 595],
    description: "Grab a bite to eat!",
    icon: icons.food,
  },
  {
    name: "Icecreams",
    position: [575, 665],
    description: "Get your icecream here!!",
    icon: icons.icecream,
  },
  {
    name: "Toilet",
    position: [695, 826],
    description: "Make sure to stay fresh!",
    icon: icons.toilet,
  },
  {
    name: "Bar",
    position: [570, 865],
    description: "You can get your drinks here!",
    icon: icons.bar,
  },
  {
    name: "Stage 2",
    position: [536, 920],
    description: "The Lake",
    icon: icons.stage2,
  },
  {
    name: "Icecreams",
    position: [653, 1050],
    description: "Get your icecream here!!",
    icon: icons.icecream,
  },
  {
    name: "Merchandise",
    position: [590, 1105],
    description: "Get your U-Merch here!",
    icon: icons.merch,
  },
  {
    name: "Stage 3",
    position: [600, 1165],
    description: "The Club",
    icon: icons.stage3,
  },
  {
    name: "Bar",
    position: [695, 1215],
    description: "You can get your drinks here!",
    icon: icons.bar,
  },
  {
    name: "Bar",
    position: [695, 1370],
    description: "You can get your drinks here!",
    icon: icons.bar,
  },
  {
    name: "Icecreams",
    position: [795, 1400],
    description: "Get your icecream here!!",
    icon: icons.icecream,
  },
  {
    name: "Stage 4",
    position: [810, 1515],
    description: "Hangar",
    icon: icons.stage4,
  },
  {
    name: "Toilet",
    position: [730, 1565],
    description: "Make sure to stay fresh!",
    icon: icons.toilet,
  },
];


const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function ResetView({ center }) {
  const map = useMap();
  map.setView(center, 1);
  return null;
}

export default function Map() {
  const imageBounds = [
    [0, 0],
    [980, 1680],
  ];
  const defaultCenter = [490, 840];
  const navigate = useNavigate();

  // Helper to check if marker is a stage
  const isStage = (name) =>
    ["Stage 1", "Stage 2", "Stage 3", "Stage 4"].includes(name);

  return (
    <div style={{ width: "100%", height: "80vh", position: "relative" }}>
      <MapContainer
        crs={L.CRS.Simple}
        center={defaultCenter}
        zoom={1}
        minZoom={-2}
        maxZoom={4}
        scrollWheelZoom={true}
        dragging={true}
        doubleClickZoom={true}
        touchZoom={true}
        style={{ width: "100%", height: "100%" }}
        maxBounds={imageBounds}
        maxBoundsViscosity={1.0}
      >
        <ResetView center={defaultCenter} />

        <ImageOverlay
          url="/kaart_festival_no_markers.svg"
          bounds={imageBounds}
          zIndex={1}
        />

        {attractions.map((a, i) => (
          <Marker key={i} position={a.position} icon={a.icon || customIcon}>
            <Popup>
              <strong>{a.name}</strong>
              <br />
              {a.description}
              {isStage(a.name) && (
                <Link
                  to="/event"
                  className="mt-2 px-3 py-1 bg-red-600 text-white rounded font-bold block"
                  style={{
                    marginTop: "8px",
                    cursor: "pointer",
                    textAlign: "center",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  Bekijk Line-up
                </Link>
              )}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
