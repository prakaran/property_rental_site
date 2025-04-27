import Link from "next/link";
import React from "react";

interface InfoBoxProps {
  heading: string;
  backgroundColor: string;
  backgroundColorDark: string;
  textColor?: string;
  buttonInfo: {
    text: string;
    link: string;
    backgroundColor: string;
  };
  children?: React.ReactNode;
}

const InfoBox = ({
  heading,
  backgroundColor,
  backgroundColorDark,
  textColor = "text-gray-800",
  buttonInfo,
  children,
}: InfoBoxProps) => {
  return (
    <div
      className={`${backgroundColor} dark:${backgroundColorDark} p-6 rounded-lg shadow-md`}
    >
      <h2 className={`text-2xl font-bold ${textColor} dark:text-white`}>
        {heading}
      </h2>
      <p className={`mt-2 mb-4 ${textColor} dark:text-gray-300`}>{children}</p>
      <Link
        href={buttonInfo.link}
        className={`inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700 dark:${buttonInfo.text} dark:hover:bg-gray-600`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
