const n=`.dots-loader_1 {
  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, #000 90%, #0000) 0/calc(100% / 3) 100% space;
  clip-path: inset(0 100% 0 0);
  animation: dots-loader_1 1s steps(4) infinite;
}

@keyframes dots-loader_1 {
  to {
    clip-path: inset(0 -34% 0 0)
  }
}

`;export{n as default};
