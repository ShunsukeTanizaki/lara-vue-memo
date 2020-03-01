<template>
    <div>
        <Header/>
        <!-- // 中略 -->
    </div>
</template>

<script>
import Header from '../../components/header'
import axios from 'axios'

const BASE_URL = 'http://localhost:8000'

export default {
    components: {
        Header
    },
        data() {
    },
    methods: {
        axiosGetContacts() {
            let endpoint = BASE_URL + '/api/contact'
            axios.get(endpoint)
                .then(res => {
                    console.log(res)
                })
                .catch(error => {
                    console.warn(error)
                })
        }
    },
    mounted() {
        this.axiosGetContacts()
    }
}
</script>