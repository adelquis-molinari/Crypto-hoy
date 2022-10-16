import { configureStore } from "@reduxjs/toolkit";
import cryptoApi from "../../services/cryptoApi";
import cryptoNewsApi from "../../services/newsApi";
import onTrackSlice from "../factures/onTrackSlice";
import userDataSlice from "../factures/userDataSlice";

export default configureStore({
  reducer: {
    cryptoApi,
    cryptoNewsApi,
    onTrackSlice,
    userDataSlice,
  },
});
