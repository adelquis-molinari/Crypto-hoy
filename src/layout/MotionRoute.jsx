import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const MotionRoute = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <Outlet />
    </motion.div>
  );
};

export default MotionRoute;
