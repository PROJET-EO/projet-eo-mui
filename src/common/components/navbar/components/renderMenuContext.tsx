import { createContext, ReactNode, useState } from "react";

export const AnchorContext = createContext<null | HTMLElement>(null);

type IAnchorProvider = {
    children: ReactNode;
}

const AnchorProvider = ({children}:IAnchorProvider) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLEmbedElement>(null);
    return (
        <AnchorContext.Provider value={[anchorEl, setAnchorEl]}>
            {children}
        </AnchorContext.Provider>
    );
};

export default AnchorProvider;
