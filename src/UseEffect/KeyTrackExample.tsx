import React, {useEffect, useState} from 'react';

export const KeyTrackExample = () => {
    const [text, setText] = useState('')

    console.log('Key text' + text)

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(text + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])
    return <>
        Typed text: {text}
    </>

};

export default KeyTrackExample;