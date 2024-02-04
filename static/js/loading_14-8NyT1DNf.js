const a=`.dots-loader_14 {
  --s: 64px;
  width: var(--s);
  aspect-ratio: 2;
  --_g: #000 90%, #0000;
  background: radial-gradient(farthest-side, var(--_g)) 0 50%/25% 50%,
  radial-gradient(farthest-side at bottom, var(--_g)) 50% calc(50% - var(--s) / 16)/25% 25%,
  radial-gradient(farthest-side at top, var(--_g)) 50% calc(50% + var(--s) / 16)/25% 25%,
  radial-gradient(farthest-side at bottom, var(--_g)) 100% calc(50% - var(--s) / 16)/25% 25%,
  radial-gradient(farthest-side at top, var(--_g)) 100% calc(50% + var(--s) / 16)/25% 25%;
  background-repeat: no-repeat;
  animation: dots-loader_14 1s infinite;
}

@keyframes dots-loader_14 {
  25% {
    background-position: 0 50%, 50% 0, 50% 100%, 100% 0, 100% 100%
  }
  50% {
    background-position: 100% 50%, 0 0, 0 100%, 50% 0, 50% 100%
  }
  75%,
  100% {
    background-position: 100% 50%, 0 calc(50% - var(--s) / 16), 0 calc(50% + var(--s) / 16), 50% calc(50% - var(--s) / 16), 50% calc(50% + var(--s) / 16)
  }
}
`;export{a as default};
