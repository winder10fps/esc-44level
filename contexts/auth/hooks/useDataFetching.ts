import { useCallback } from 'react';
import { MockAPI } from '../api';
import { TournamentsData, CatalogData } from '../types';

export const useDataFetching = () => {
    const fetchAllTournaments = useCallback(async (): Promise<TournamentsData> => {
        try {
            return await MockAPI.fetchTournaments();
        } catch (error) {
            console.error('Error fetching tournaments:', error);
            return { future: [], past: [] };
        }
    }, []);

    const fetchAllCatalogCards = useCallback(async (): Promise<CatalogData> => {
        try {
            return await MockAPI.fetchCatalog();
        } catch (error) {
            console.error('Error fetching catalog:', error);
            return { computers: [], PSAndVR: [], bar: [] };
        }
    }, []);

    return {
        fetchAllTournaments,
        fetchAllCatalogCards
    };
};