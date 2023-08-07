"use client";

import React, { useEffect, useState } from "react";
import { useGradesContext } from "../context/grades";
import { calculateCR } from "../utils/calculateCR";

export const Information = () => {
  const { grades } = useGradesContext();

  const [CR, setCR] = useState(0);

  useEffect(() => {
    if (grades?.size) {
      setCR(calculateCR(grades));
    }
  }, [grades]);

  return (
    <div>
      <div>
        <div>N° de matérias consideradas:</div>
        <div>{grades?.size ?? 0}</div>
      </div>
      <div>
        <div>CR</div>
        <div>{CR}</div>
      </div>
    </div>
  );
};
