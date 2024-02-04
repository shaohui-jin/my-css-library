const n=`.dots-loader_46 {
  width: 32px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(farthest-side, #000 90%, #0000);
  background: var(--_g), var(--_g), var(--_g), var(--_g);
  background-size: 40% 40%;
  animation: dots-loader_46 1s infinite;
}

@keyframes dots-loader_46 {
  0% {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%
  }
  40%,
  50% {
    background-position: 100% 100%, 100% 0, 0 0, 0 100%
  }
  90%,
  100% {
    background-position: 100% 100%, 0 100%, 0 0, 100% 0
  }
}
`;export{n as default};
