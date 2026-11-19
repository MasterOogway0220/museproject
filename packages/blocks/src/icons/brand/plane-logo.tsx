/**
 * Copyright (c) 2023-present Plane Software, Inc. and contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 * See the LICENSE file for details.
 */

import * as React from "react";

export type PlaneLogoProps = React.ComponentPropsWithoutRef<"svg">;

// MuseProject brand mark (component name kept so existing imports keep working).
export function PlaneLogo({ width = "52", height = "52", className, color = "currentColor" }: PlaneLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 52 52"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="MuseProject"
    >
      <path
        d="M0 8C0 3.58 3.58 0 8 0h2.5c2.9 0 5.57 1.57 6.98 4.1L26 19.5l8.52-15.4C35.93 1.57 38.6 0 41.5 0H44c4.42 0 8 3.58 8 8v36c0 4.42-3.58 8-8 8h-2c-4.42 0-8-3.58-8-8V26.5l-4.5 8.1a4 4 0 0 1-7 0L18 26.5V44c0 4.42-3.58 8-8 8H8c-4.42 0-8-3.58-8-8V8Z"
        fill={color}
      />
    </svg>
  );
}
