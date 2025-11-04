"use client";
import { useEffect, useState } from "react";

export default function DateStateVariable() {
  // start empty so the server and client match during hydration
  const [iso, setIso] = useState<string>("");

  // compute the current time on the client after mount
  useEffect(() => {
    setIso(new Date().toISOString());
  }, []);

  const refresh = () => setIso(new Date().toISOString());

  return (
    <div id="wd-date-state-variables">
      <h2>Date State Variable</h2>
      {/* suppressHydrationWarning avoids a warning if iso changes right after mount */}
      <h3 suppressHydrationWarning>{JSON.stringify(iso)}</h3>
      <button className="btn btn-primary" onClick={refresh} id="wd-date-now-click">
        Now
      </button>
      <hr />
    </div>
  );
}
