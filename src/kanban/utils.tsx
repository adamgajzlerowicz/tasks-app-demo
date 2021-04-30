import * as React from 'react'

export const BoardContext = React.createContext( 'gmcMohbh9a4GSVFDivFv' );

// inspired by:
// https://stackoverflow.com/questions/25777826/onclick-works-but-ondoubleclick-is-ignored-on-react-component
//
export const useClick = (actionDoubleClick: () => void, delay = 250) => {
    const [click, setClick] = React.useState(0);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setClick(0);
        }, delay);

        if (click === 1) {
            actionDoubleClick();
        }

        return () => clearTimeout(timer);

    }, [click, actionDoubleClick]);

    return () => setClick(prev => prev + 1);
}
