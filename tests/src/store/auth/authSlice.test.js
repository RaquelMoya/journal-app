import { authSlice } from '../../../../src/store/auth/authSlice';
import { initialState, authenticatedState, notAuthenticatedState, demoUser } from '../../../fixtures/authFixtures';

describe('Pruebas en authSlice', () => {
    test('should return the initial state and be called -auth-', () => {
        expect(authSlice.name).toBe('auth');
        const state = authSlice.reducer(initialState, {});
        expect(state).toEqual(initialState);
    });

    test('should return the authenticated state', () => {
        const state = authSlice.reducer(initialState, authSlice.actions.login(demoUser));
        expect(state).toEqual(authenticatedState);
    });

    test('should return the not authenticated state', () => {
        const state = authSlice.reducer(authenticatedState, authSlice.actions.logout());
        expect(state).toEqual({ status: 'not-authenticated', uid: null, email: null, displayName: null, photoURL: null, errorMessage: undefined });
    });

    test( 'debe realizar el logout con argumentos opcionales', () => {
        const errorMessage = 'Error en el login';
        const state = authSlice.reducer(authenticatedState, authSlice.actions.logout({ errorMessage }));
        expect(state).toEqual({ status: 'not-authenticated', uid: null, email: null, displayName: null, photoURL: null, errorMessage: errorMessage });
    });

    test('should return the checking state', () => {
        const state = authSlice.reducer(initialState, authSlice.actions.checkingCredentials());
        expect(state).toEqual({ status: 'checking', uid: null, email: null, displayName: null, photoURL: null, errorMessage: null });
    });
});