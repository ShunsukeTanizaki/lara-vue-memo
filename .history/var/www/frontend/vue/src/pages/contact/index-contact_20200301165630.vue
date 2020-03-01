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
    }
}
</script>