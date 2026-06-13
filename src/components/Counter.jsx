import { useRef, useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const ref = useRef(0);
    // no re-render
    console.log('rendering ...');
    console.log('count: ', count)
    const handleClick = () => {
        console.log('after clicking :',count)
        console.log('update value ...')
        console.log(ref.current++);
        // ref.current.style.color = 'red';
        setCount(count+1);
    }

    return <button onClick={handleClick}>Click me! {count}</button>;
}
