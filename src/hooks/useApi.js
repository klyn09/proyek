
import { useState, useEffect } from 'react';
import { fetchVillageActivities, fetchVillageAssets, fetchVillageNews, fetchVillageProfile, fetchVillageUMKM } from '../helpers/service';

export const useVillageAssets = (page = 1, limit = 10) => {
    const [assets, setAssets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadAssets = async () => {
            try {
                const data = await fetchVillageAssets(page, limit);
                setAssets(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadAssets();
    }, [page, limit]);

    return { assets, loading, error };
};

export const useVillageActivities = (page = 1, limit = 10) => {
    const [activities, setActivities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadActivities = async () => {
            try {
                const data = await fetchVillageActivities(page, limit);
                setActivities(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadActivities();
    }, [page, limit]);

    return { activities, loading, error };
};

export const useVillageUMKM = (page = 1, limit = 10) => {
    const [umkm, setUMKM] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUMKM = async () => {
            try {
                const data = await fetchVillageUMKM(page, limit);
                setUMKM(data.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadUMKM();
    }, [page, limit]);

    return { umkm, loading, error };
};

export const useVillageNews = (page = 1, limit = 10) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadNews = async () => {
            try {
                const data = await fetchVillageNews(page, limit);
                setNews(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadNews();
    }, [page, limit]);

    return { news, loading, error };
};

export const useVillageProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProfile = async () => {
            try {
                const data = await fetchVillageProfile();
                setProfile(data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadProfile();
    }, []);

    return { profile, loading, error };
};