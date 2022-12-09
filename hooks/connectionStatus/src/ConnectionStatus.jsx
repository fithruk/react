import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState("online");

  const setOnline = () => {
    setStatus("online");
  };

  const setOffline = () => {
    setStatus("offline");
  };

  const onCheckStatus = () => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
  };

  useEffect(() => {
    onCheckStatus();

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, [status]);

  const classNames = status === "online" ? "status" : "status status_offline";
  return <div className={classNames}>{status}</div>;
};

export default ConnectionStatus;
