|<template>
    <div>
        <router-link class="link-base" to="/login">
            <div>
                <p>LOG IN</p>

                <img src="@/assets/Images/Icons/login-icon.png" alt="Home button" />
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Login Button'
};
</script>

<style lang="scss">
.link-base {
    div {
        display: inline-block;
        margin-top: 75px;
        width: 250px;
        height: 70px;
        background-color: #423048;
        position: relative;
        border-radius: 5px;

        p {
            color: #ffffff;
            font-weight: bold;
            font-size: 30px;
            text-align: left;
            padding: 10px 20px;
        }

        img {
            position: absolute;
            top: 0;
            right: 0;
            margin: 15px;
            width: 40px;
        }
    }
}
</style>
