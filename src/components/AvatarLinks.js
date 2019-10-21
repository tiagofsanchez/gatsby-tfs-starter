import React from "react";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import mail from "../images/mail.svg";
import siteConfig from "../../data/SiteConfig";

const icons = [
  { label: "linkedin", icon: { linkedin } },
  { label: "github", icon: { github } },
  { label: "email", icon: { mail } }
];

const AvatarLinks = () => {
  const { userLinks } = siteConfig;

  const newUserLinks = [];
  icons.forEach(element => {
    const { icon } = element;
    userLinks.forEach(link => {
      const { label } = link;
      const { url } = link;
      if (label === element.label) {
        newUserLinks.push({
          label: label,
          url: url,
          icon: icon
        });
      }
    });
  });

  return (
    <div>
      {newUserLinks.map(element => {
        return <img src={element.icon}/>;
      })}
      <div>something is working</div>
      <img src={mail} />
    </div>
  );
};
export default AvatarLinks;
