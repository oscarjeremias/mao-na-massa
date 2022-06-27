import { createContext } from "react";

interface IconetxtType {
	activeMenu: string;
	setActiveMenu: (arg:string) => void;
}

export const ContextMenu = createContext<IconetxtType>({
	activeMenu: "not-active",
	setActiveMenu: (arg) => void {
	}
})
