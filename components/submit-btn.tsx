"use client";

import React, { useState } from "react";
import { FiSend } from "react-icons/fi";

export default function SubmitBtn() {
  const [pending, setPending] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setPending(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setPending(false);
  };

  return (
    <button
      type="button"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-gray-950 dark:hover:bg-gray-800 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
      onClick={handleClick}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FiSend className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </>
      )}
    </button>
  );
}
