const appRoutes = {
    home: { index: (): string => '/' },
    auth: {
        register: (): string => '/auth/register',
        login: (): string => '/auth/login',
        forgotPassword: (): string => '/auth/forgot_password',
        resetPassword: (): string => '/auth/reset_password',
    },
    profile: {
        index: (): string => '/profile',
        edit: (): string => '/profile/edit',
        changePassword: (): string => '/profile/change_password',
    },
};

export default appRoutes;
