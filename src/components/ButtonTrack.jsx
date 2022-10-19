import { useEffect, useState } from "react";
import { Button } from "antd";
import onTrack from "../assets/onTrack.svg";
import offTrack from "../assets/offTrack.svg";
import { useDispatch, useSelector } from "react-redux";
import { onTrackCoin, deleteTrackCoin } from "../redux/factures/onTrackSlice";

export default function ButtonTrack({
  name,
  uuid,
  rank,
  price,
  marketCap,
  change,
}) {
  const [select, setselect] = useState(false);
  const dispatch = useDispatch();
  const trackedCoins = useSelector((state) => state.onTrackSlice);

  useEffect(() => {
    if (trackedCoins.find((c) => c.uuid === uuid)) {
      setselect(true);
    } else {
      setselect(false);
    }
  }, [trackedCoins, uuid]);

  const trackCoin = () => {
    dispatch(onTrackCoin({ uuid, name, rank, price, marketCap, change }));
  };
  const unTrackCoin = () => {
    dispatch(deleteTrackCoin(uuid));
  };

  return (
    <Button onClick={select ? unTrackCoin : trackCoin} className="button-track">
      <img
        src={select ? onTrack : offTrack}
        alt="iconTrackesr"
        className="icon-tracker"
      />
      {select ? `Tracked ${name}` : `Track ${name}`}
    </Button>
  );
}
