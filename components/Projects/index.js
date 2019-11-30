import React from "react";
import styled from "styled-components";

import { Grid, Badge } from "components";

const Project = styled.li`
  position: relative;

  .badge {
    position: absolute;
    right: 8px;
    top: 8px;
  }
`;

const Projects = ({ projects = [] }) => {
  const renderBadge = (url) => {
    const isVideo = url.includes(".mp4");
    if (isVideo) {
      return <Badge className="badge">gif</Badge>;
    } else {
      return null;
    }
  };

  const renderVideoOrPicture = (url) => {
    const isVideo = url.includes(".mp4");

    const Element = isVideo ? "video" : "picture";
    const mimeType = isVideo ? "video/mp4" : "image/png";
    const videoProps = isVideo
      ? {
          autoPlay: true,
          loop: true,
          muted: true,
          playsInline: true
        }
      : null;
    const style = {
      width: "100%"
    };

    return isVideo ? (
      <Element {...videoProps} style={style}>
        <source src={url} type={mimeType} />
      </Element>
    ) : (
      <img style={style} src={url} alt="" />
    );
  };

  return (
    <Grid>
      {projects.map(({ name, liveVersionUrl, thumb }, index) => {
        return (
          <Project key={index}>
            <a href={liveVersionUrl} style={{ display: "block" }}>
              {renderBadge(thumb)}
              {renderVideoOrPicture(thumb)}
            </a>
          </Project>
        );
      })}
    </Grid>
  );
};

export default Projects;
