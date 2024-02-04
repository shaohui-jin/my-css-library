const n=`.classic-loader_35 {
  font-weight: bold;
  font-family: monospace;
  display: inline-grid;
  font-size: 30px;
}

.classic-loader_35:before,
.classic-loader_35:after {
  content: "Loading...";
  grid-area: 1/1;
  -webkit-mask-size: 100% 5px, 100% 100%;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  animation: classic-loader_35-1 1s infinite;
}

.classic-loader_35:before {
  -webkit-mask-image: linear-gradient(#000 0 0),
  linear-gradient(#000 0 0);
}

.classic-loader_35:after {
  -webkit-mask-image: linear-gradient(#000 0 0);
  animation: classic-loader_35-1 1s infinite,
  loading_35-2 .2s infinite cubic-bezier(0.5, 200, 0.5, -200);
}

@keyframes classic-loader_35-1 {
  0% {
    -webkit-mask-position: 0 20px, 0 0
  }
  20% {
    -webkit-mask-position: 0 8px, 0 0
  }
  40% {
    -webkit-mask-position: 0 100%, 0 0
  }
  60% {
    -webkit-mask-position: 0 3px, 0 0
  }
  80% {
    -webkit-mask-position: 0 15px, 0 0
  }
  100% {
    -webkit-mask-position: 0 0, 0 0
  }
}

@keyframes classic-loader_35-2 {
  100% {
    transform: translate(0.1px)
  }
}
`;export{n as default};
