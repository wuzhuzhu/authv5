"use client";

import { useEffect, useState } from "react";

const TestPage = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("/api/test").then((res) =>
      res.json().then((d) => {
        setData(d);
      })
    );
  }, []);
  return (
    <div className="flex flex-col text-center py-4 gap-4">
      <h1>Speed test </h1>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default TestPage;
