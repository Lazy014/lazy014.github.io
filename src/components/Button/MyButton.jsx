import { Button } from "@material-ui/core";
import React from "react";

import "./MyButton.css";

const MyButton = ({ title, icon, downloadLink }) => {
  const onDownload = (downloadLink) => {
    if (downloadLink === undefined || downloadLink == null) {
      return;
    }
    const link = document.createElement("a");
    link.download = downloadLink;
    link.href = downloadLink;
    link.click();
  };

  return (
    <Button
      className="site_btn"
      onClick={() => onDownload(downloadLink)}
      variant="contained"
      endIcon={icon ? <div className="icon_container">{icon}</div> : null}
    >
      <span className="btn_text">{title}</span>
    </Button>
  );
};

export default MyButton;
