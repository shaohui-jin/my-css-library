const a=`.dots-loader_45 {
  --s: 28px;
  height: var(--s);
  aspect-ratio: 2.5;
  --_g: #000 90%, #0000;
  --_g0: no-repeat radial-gradient(farthest-side, var(--_g));
  --_g1: no-repeat radial-gradient(farthest-side at top, var(--_g));
  --_g2: no-repeat radial-gradient(farthest-side at bottom, var(--_g));
  background: var(--_g0), var(--_g1), var(--_g2), var(--_g0), var(--_g1), var(--_g2);
  background-size: 20% 50%, 20% 25%, 20% 25%;
  animation: dots-loader_45 1s infinite;
}

@keyframes dots-loader_45 {
  0% {
    background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) calc(50% + calc(var(--s) / 8)), calc(1 * 100% / 3) calc(50% - calc(var(--s) / 8)), calc(3 * 100% / 3) 50%, calc(2 * 100% / 3) calc(50% + calc(var(--s) / 8)), calc(2 * 100% / 3) calc(50% - calc(var(--s) / 8))
  }
  33% {
    background-position: calc(0 * 100% / 3) 50%, calc(1 * 100% / 3) 100%, calc(1 * 100% / 3) 0, calc(3 * 100% / 3) 50%, calc(2 * 100% / 3) 100%, calc(2 * 100% / 3) 0
  }
  66% {
    background-position: calc(1 * 100% / 3) 50%, calc(0 * 100% / 3) 100%, calc(0 * 100% / 3) 0, calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) 100%, calc(3 * 100% / 3) 0
  }
  90%,
  100% {
    background-position: calc(1 * 100% / 3) 50%, calc(0 * 100% / 3) calc(50% + calc(var(--s) / 8)), calc(0 * 100% / 3) calc(50% - calc(var(--s) / 8)), calc(2 * 100% / 3) 50%, calc(3 * 100% / 3) calc(50% + calc(var(--s) / 8)), calc(3 * 100% / 3) calc(50% - calc(var(--s) / 8))
  }
}
`;export{a as default};
