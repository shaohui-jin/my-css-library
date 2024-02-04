const n=`.dots-loader_11 {
  width: 35px;
  aspect-ratio: 1;
  --_g: no-repeat radial-gradient(circle closest-side, #000 90%, #0000);
  background: var(--_g) 0 0,
  var(--_g) 0 100%,
  var(--_g) 100% 100%;
  background-size: 40% 40%;
  animation: dots-loader_11 1s infinite linear;
}

@keyframes dots-loader_11 {
  25% {
    background-position: 100% 0, 0 100%, 100% 100%
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%
  }
}
`;export{n as default};
