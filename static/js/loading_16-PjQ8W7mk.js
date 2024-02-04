const n=`.dots-loader_16 {
  width: 40px;
  aspect-ratio: 1.154;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--_g) 50% 0,
  var(--_g) 0 100%,
  var(--_g) 100% 100%;
  background-size: 35% calc(35% * 1.154);
  animation: dots-loader_16 1s infinite;
}

@keyframes dots-loader_16 {
  50%, 100% {
    background-position: 100% 100%, 50% 0, 0 100%
  }
}
`;export{n as default};