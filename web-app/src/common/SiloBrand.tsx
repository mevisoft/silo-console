// Copyright (c) 2026 Pigsty
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

import React from "react";
import { useSelector } from "react-redux";
import { baseUrl } from "../history";
import { AppState } from "../store";

const SILO_EMBLEM_URL = `${baseUrl}silo.svg`;
const SILO_WORDMARK_URL = `${baseUrl}silo-word.svg`;
const SILO_WORDMARK_DARK_URL = `${baseUrl}silo-word-dark.svg`;
const SILO_TEXT_URL = `${baseUrl}silo-text.svg`;
const SILO_TEXT_DARK_URL = `${baseUrl}silo-text-dark.svg`;

// Brand palette (S3 LuisML): Red #EF171D, Charcoal #424242, Warm Gray #EFEBE9.
// Key names are kept from the S3 LuisML palette so consumers need no changes.
export const SILO_COLORS = {
  night: "#424242",
  steel: "#EF171D",
  sky: "#EFEBE9",
  copper: "#EF171D",
  text: "#EFEBE9",
  muted: "#C9C2BD",
  faint: "#8C8581",
} as const;

type SiloBrandProps = Omit<React.ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  variant?: "emblem" | "wordmark" | "text";
};

export const SiloBrand = ({
  variant = "wordmark",
  alt = "S3 LuisML",
  ...props
}: SiloBrandProps) => {
  const darkMode = useSelector((state: AppState) => state.system.darkMode);
  const wordmark = darkMode ? SILO_WORDMARK_DARK_URL : SILO_WORDMARK_URL;
  const text = darkMode ? SILO_TEXT_DARK_URL : SILO_TEXT_URL;
  return (
    <img
      src={
        variant === "emblem"
          ? SILO_EMBLEM_URL
          : variant === "text"
            ? text
            : wordmark
      }
      alt={alt}
      {...props}
    />
  );
};
