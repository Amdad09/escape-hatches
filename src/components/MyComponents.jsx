import { useState } from 'react';
import VideoPlayer from './VideoPlayer';

export default function MyComponent() {
    const [isPlaying, setIsplaying] = useState(false);
    const [text, setText] = useState('');
    return (
        <div>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                type="text"
            />
            <button onClick={() => setIsplaying((pre) => !pre)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <br />
            <br />
            <VideoPlayer
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </div>
    );
}
