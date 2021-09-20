function delay(duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}


export default {
    async login(loginId, loginPwd) {
        delay(1000);
        if (loginId == 'admin' && loginPwd == 'admin') {
            const user = {
                loginId,
                name: '管理员',
            }
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        }
        return null;

    },

    async loginOut() {
        delay(1000);
        localStorage.removeItem('user');
    },


    async whoAmi() {
        delay(1000);
        const user = localStorage.getItem('user')
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

}



