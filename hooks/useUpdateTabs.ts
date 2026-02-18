import { useAuth } from "@/contexts/auth";
import { useCallback, useState } from "react";

export const useUpdateTabs = () => {
    const { refreshUserData } = useAuth()
    const [refreshing, setRefreshing] = useState(false);
    const [refreshKey, setRefreshKey] = useState(0)

    const onRefresh = useCallback(async () => {
        setRefreshing(true);

        try {
            await refreshUserData()
            setRefreshKey(prev => prev + 1)
        } finally {
            setRefreshing(false)
        }
    }, [refreshUserData])


    return {
        onRefresh,
        refreshing,
        refreshKey
    }
}