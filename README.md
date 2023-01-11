# DroneCo

This is a fronted web applications for a startup that focuses on creating drones to complete last-mile delivery

## Tailwind

- go to tailwind website, and follow instructions for download with Next.js
- @layer base (how to apply global styles in tailwind)

## NPM Install List

- npm install react-icons --save
- npm i react-intersection-observer --save
- npm install react-scroll
- npm i framer-motion
- npm i typewriter-effect

## Styling

- rounded-md
- tracking-widest

## Notes For Myself

```
const { ref, inView } = useInView({
    threshold: 0.2,
});
const animation = useAnimation();useEffect(() => {
    if (inView) {
        animation.start({
        y: 0,
        opacity: 1,
        transition: {
        type: "spring",
        duration: 2, },
    });
    }
    else {
        animation.start({ y: 200, opacity: 0 });
    }
}, [inView]);
```
