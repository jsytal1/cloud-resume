"use client";

import { useState, useEffect } from "react";

const visitorIncrementUrl = process.env.NEXT_PUBLIC_VISITOR_INCREMENT_URL;

interface VisitorCounterData {
  visitors: number;
}

export default function VisitorCounter() {
  const [data, setData] = useState<VisitorCounterData | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof visitorIncrementUrl !== "string") {
      return;
    }
    console.log("fetching visitor count");
    fetch(visitorIncrementUrl, { method: "POST" })
      .then((res) => res.json())
      .then((data: VisitorCounterData) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading || !data) return <></>;

  return (
    <p className="text-white">
      Visitors: <span data-testid="visitor-count">{data.visitors}</span>
    </p>
  );
}
