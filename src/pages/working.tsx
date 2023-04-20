import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/map"), { ssr: false });

function Working() {
  return <MapComponent />;
}

export default Working;
