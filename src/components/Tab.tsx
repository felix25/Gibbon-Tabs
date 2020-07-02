import React, { useState } from "react";

interface Tab {
  title: string;
  url: string;
  iconUrl: string | undefined;
  active: boolean;
}

export default function Tab({
  title,
  url,
  iconUrl,
  active,
}: Tab): React.ReactElement {
  return (
    <div className="pt-4 pb-4 pl-1 pr-1 m-1 mb-2 text-white bg-gray-800 flex flex-row">
      <div className="flex flex-col pl-2 pr-2 justify-center w-8">
        {iconUrl ? (
          <img className="object-contain max-w-none" src={iconUrl}></img>
        ) : null}
      </div>
      <div className="flex-grow overflow-hidden">
        <p className="text-sm truncate">{title}</p>
        <p className="text-xs truncate">{url}</p>
      </div>
    </div>
  );
}