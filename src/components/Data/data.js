import animationData from "../../assets/lottie/loading2.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const urls = [
  {
    youtubeUrl: "https://youtubedownloadserver.onrender.com/api/youtube",
  },
  {
    jioUrl: "https://saavn.dev/api/search/songs?",
  },
];

export { urls, defaultOptions };
