import { Href, useRouter } from "expo-router";
import { useState } from "react";


export const useChangePage = () => {
    const router = useRouter();
    const [isChangingPage, setIsChangingPage] = useState(false);

    const changePageTo = (path: Href) => {
        if (isChangingPage) return;
        setIsChangingPage(true)
        router.push(path);
        setTimeout(() => setIsChangingPage(false), 1000)
    }
    return { changePageTo }
}