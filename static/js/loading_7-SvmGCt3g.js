const n=`.dots-loader_7 {
  width: 60px;
  aspect-ratio: 4;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background: var(--_g) 0% 50%,
  var(--_g) 50% 50%,
  var(--_g) 100% 50%;
  background-size: calc(100% / 3) 100%;
  animation: dots-loader_7 1s infinite linear;
}

@keyframes dots-loader_7 {
  33% {
    background-size: calc(100% / 3) 0%, calc(100% / 3) 100%, calc(100% / 3) 100%
  }
  50% {
    background-size: calc(100% / 3) 100%, calc(100% / 3) 0%, calc(100% / 3) 100%
  }
  66% {
    background-size: calc(100% / 3) 100%, calc(100% / 3) 100%, calc(100% / 3) 0%
  }
}
`;export{n as default};
