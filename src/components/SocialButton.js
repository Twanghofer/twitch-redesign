import React from "react";

function SocialButton({ title, icon }) {
  return (
    <a
      className="flex flex-row items-center gap-1.5 text-xl hover:text-link"
      href={`https://${title.toLowerCase()}.com`}
      target="_blank"
      rel="noreferrer"
    >
      {icon}
      <p className="text-base font-medium">{title}</p>
    </a>
  );
}

export default SocialButton;
