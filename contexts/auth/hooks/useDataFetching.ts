import { useCallback } from 'react';
import { MockAPI } from '../api';
import { TournamentsData, CatalogData, BookingsData, Computer } from '../types';

export const useDataFetching = () => {
    const fetchAllTournaments = useCallback(async (): Promise<TournamentsData> => {
        try {
            return await MockAPI.fetchTournaments();
        } catch (error) {
            console.log('Error fetching tournaments:', error);
            return { future: [], past: [] };
        }
    }, []);

    const fetchAllCatalogCards = useCallback(async (): Promise<CatalogData> => {
        try {
            return await MockAPI.fetchCatalog();
        } catch (error) {
            console.log('Error fetching catalog:', error);
            return { computers: [], PSAndVR: [], bar: [] };
        }
    }, []);

    const fetchAllBookings = useCallback(async (): Promise<BookingsData> => {
        try {
            return await MockAPI.fetchBookings();
        } catch (error) {
            console.log('Error fetching bookings:', error);
            return {};
        }
    }, []);

    const createBooking = useCallback(async (userId: number, computerId: number, bookingTime: string): Promise<{ success: boolean; computer?: Computer; error?: string }> => {
        try {
            return await MockAPI.createBooking(userId, computerId, bookingTime);
        } catch (error) {
            console.log('Error creating booking:', error);
            return { success: false, error: 'Ошибка при создании брони' };
        }
    }, []);

    const cancelBooking = useCallback(async (userId: number, computerId: number): Promise<{ success: boolean; computer?: Computer; error?: string }> => {
        try {
            return await MockAPI.cancelBooking(userId, computerId);
        } catch (error) {
            console.log('Error canceling booking:', error);
            return { success: false, error: 'Ошибка при отмене брони' };
        }
    }, []);

    const checkBookingAvailability = useCallback(async (computerId: number, time: string): Promise<{ available: boolean; message?: string }> => {
        try {
            return await MockAPI.checkBookingAvailability(computerId, time);
        } catch (error) {
            console.log('Error checking availability:', error);
            return { available: false, message: 'Ошибка при проверке доступности' };
        }
    }, []);

    const refreshBookings = useCallback(async (): Promise<BookingsData> => {
        try {
            return await MockAPI.refreshBookings();
        } catch (error) {
            console.log('Error refreshing bookings:', error);
            return {};
        }
    }, []);

    // Новые методы для турниров
    const signUpForTournament = useCallback(async (userId: number, tournamentId: number, teamName: string, teamPlayers: string): Promise<{ success: boolean; error?: string }> => {
        try {
            return await MockAPI.signUpForTournament(userId, tournamentId, teamName, teamPlayers);
        } catch (error) {
            console.log('Error signing up for tournament:', error);
            return { success: false, error: 'Ошибка при регистрации на турнир' };
        }
    }, []);

    const refreshTournaments = useCallback(async (): Promise<TournamentsData> => {
        try {
            return await MockAPI.refreshTournaments();
        } catch (error) {
            console.log('Error refreshing tournaments:', error);
            return { future: [], past: [] };
        }
    }, []);

    return {
        fetchAllTournaments,
        fetchAllCatalogCards,
        fetchAllBookings,
        createBooking,
        cancelBooking,
        checkBookingAvailability,
        refreshBookings,
        signUpForTournament,
        refreshTournaments
    };
};