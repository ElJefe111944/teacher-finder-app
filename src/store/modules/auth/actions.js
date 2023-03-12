let timer;

export default {
    async login(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },
    async signup(context, payload) {
        return context.dispatch('auth', {
            ...payload,
            mode: 'signup'
        });
    },
    async auth(context, payload){
        const mode = payload.mode;
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDAOnFltCqny9y1aUBS5EQKS9sBFRgG5hQ';
        
        if(mode === 'signup'){
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDAOnFltCqny9y1aUBS5EQKS9sBFRgG5hQ';
        }

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            })
        });

        const responseData = await response.json();

        if(!response.ok){
            const error = new Error(responseData.message || 'Failed to authenticate. Check your login details');
            throw error;
        }

        const expiresIn = Number(responseData.expiresIn * 1000);
        // const expiresIn = 5000;
        const expirationDate = new Date().getTime() + expiresIn;

        // store user token on page reloads
        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        // log user out when token expires
        timer = setTimeout(function(){
            context.dispatch('autoLogout');
        }, expiresIn);

        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId,
        });
    },
    autoLogin(context){
        // check local storage
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');

        // difference between tokenExpiration & current time stamp
        const expiresIn = Number(tokenExpiration) - new Date().getTime();

        if(expiresIn < 0){
            return; // token invalid
        }

        timer = setTimeout(function(){
            context.dispatch('autoLogout');
        }, expiresIn);

        if(token && userId){
            context.commit('setUser', {
                token: token,
                userId: userId,
            });
        }
    },
    logout(context){
        // clear local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        // clear timer when logged out
        clearTimeout(timer);

        context.commit('setUser', {
            token: null,
            userId: null,
        });
    },
    autoLogout(context){
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};