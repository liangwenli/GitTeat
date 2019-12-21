// import axios from 'axios';
export default {
    actions: {
        async aa(context, gid) {
            // let gid = 9;
            // window.console.log(999);
            let {
                data
            } = await this.$axios.get("http://localhost:1912/goods", {
                params: {
                    gid: gid
                }
            });
            if (data.code === 1) {
                context.commit('login', data);
            } else {
                context.commit('logout');
                return 400
            }
            window.console.log(data);

        }
    }



}