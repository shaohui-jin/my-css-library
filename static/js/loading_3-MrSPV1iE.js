const n=`.dots-loader_3 {
  width: 60px;
  aspect-ratio: 2;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background: var(--_g) 0% 50%,
  var(--_g) 50% 50%,
  var(--_g) 100% 50%;
  background-size: calc(100% / 3) 50%;
  animation: dots-loader_3 1s infinite linear;
}

@keyframes dots-loader_3 {
  20% {
    background-position: 0% 0%, 50% 50%, 100% 50%
  }
  40% {
    background-position: 0% 100%, 50% 0%, 100% 50%
  }
  60% {
    background-position: 0% 50%, 50% 100%, 100% 0%
  }
  80% {
    background-position: 0% 50%, 50% 50%, 100% 100%
  }
}
`;export{n as default};
