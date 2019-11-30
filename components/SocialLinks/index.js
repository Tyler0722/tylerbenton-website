import React from "react";

const MediumIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="m22.085 4.733 1.915-1.832v-.401h-6.634l-4.728 11.768-5.379-11.768h-6.956v.401l2.237 2.693c.218.199.332.49.303.783v10.583c.069.381-.055.773-.323 1.05l-2.52 3.054v.396h7.145v-.401l-2.52-3.049c-.273-.278-.402-.663-.347-1.05v-9.154l6.272 13.659h.729l5.393-13.659v10.881c0 .287 0 .346-.188.534l-1.94 1.877v.402h9.412v-.401l-1.87-1.831c-.164-.124-.249-.332-.214-.534v-13.467c-.035-.203.049-.411.213-.534z"></path>
  </svg>
);

const YouTubeIcon = (props) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80              c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904              C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728              c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816              c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096              C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z"></path>
  </svg>
);

const TwitchIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="m.975 4.175v16.694h5.749v3.131h3.139l3.134-3.132h4.705l6.274-6.258v-14.61h-21.434zm3.658-2.09h17.252v11.479l-3.66 3.652h-5.751l-3.134 3.127v-3.127h-4.707z"></path>
    <path d="m10.385 6.262h2.09v6.26h-2.09z"></path>
    <path d="m16.133 6.262h2.091v6.26h-2.091z"></path>
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016              c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992              c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056              c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152              c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792              c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44              C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568              C480.224,136.96,497.728,118.496,512,97.248z"></path>
  </svg>
);

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path d="m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"></path>
  </svg>
);

const socials = [
  {
    icon: MediumIcon,
    name: "Medium",
    link: "https://medium.com/@tylerray0722"
  },
  {
    icon: YouTubeIcon,
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCtJlivoFe8Bz5tIgzqtUZAA"
  },
  {
    icon: TwitchIcon,
    name: "Twitch",
    link: "https://www.twitch.tv/tylerray0722"
  },
  {
    icon: TwitterIcon,
    name: "Twitter",
    link: "https://twitter.com/Tylerray0722"
  },
  {
    icon: GithubIcon,
    name: "Github",
    link: "https://github.com/Tyler0722"
  }
];

const SocialLinks = (props) => (
  <ul className="social-links">
    {socials.map((social, index) => {
      const Icon = social.icon;
      return (
        <li className="social-links__item" key={index}>
          <a
            rel="noopener"
            aria-label={social.name}
            className="social-links__link"
            href={social.link}
            target="_blank"
          >
            <Icon className="social-links__icon" />
            <span className="social-links__text">{social.name}</span>
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;