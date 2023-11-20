export const loadToken = (): JSON | undefined => {
    try {
        const serializedToken = localStorage.getItem('token');
        if (serializedToken === null) {
            return undefined;
        }
        return JSON.parse(serializedToken);
    } catch (err) {
        return undefined;
    }
};
export const saveToken = (token: string): void => {
    const serializedToken = JSON.stringify(token);
    localStorage.setItem('token', serializedToken);
};

export const loadTheme = (): boolean => {
    try {
        const localTheme = sessionStorage.getItem('theme');
        if (localTheme === null) {
            return false;
        }
        return JSON.parse(localTheme);
    } catch (err) {
        return false;
    }
};
export const saveTheme = (theme: boolean): void => {
    const localTheme = JSON.stringify(theme);
    sessionStorage.setItem('theme', localTheme);
};

