<template>
    <div :class="[$style.index, 'general-background-color']">
        <div :class="$style.container">
            <div :class="$style.navigation">
                <div :class="[$style.section]">
                    <router-link :to="`/`">
                        <div :class="$style.box">
                            <div :class="$style.logo" />
                            <div :class="$style.link">GPTMind</div>
                        </div>
                    </router-link>

                    <div :class="[$style.text, $style.selectTest]">
                        {{ selectedTestName }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { watch } from "vue";
import { Component, Vue, Watch } from "vue-property-decorator";

@Component({
    components: {},
})
export default class Header extends Vue {
    selectedTestName: string = "";

    @Watch("$store.state.selectedTestName")
    seachSelectedTestName() {
        this.selectedTestName = this.$store.state.selectedTestName;
    }

    mounted() {}
}
</script>

<style lang="scss" module>
@import "@/assets/utils.scss";

.index {
    .container {
        max-width: 1080px;
        height: 80px;

        padding: 20px;

        @include setCenter;

        .title {
            display: inline-block;
        }

        .navigation {
            display: flex;

            a {
                text-decoration: none;
            }

            .section {
                display: flex;
            }
            .box {
                display: flex;
                .logo {
                    padding: 20px;

                    margin-right: 4px;

                    background-image: url("@/assets/logo.png");
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                }

                .link {
                    font-size: 32px;

                    padding: 0px 24px;

                    color: #000000;

                    @include mobile {
                        font-size: 28px;
                    }
                }
            }
            
            .selectTest {
                margin-left: 18px;
                padding: 6px;

                font-size: 26px;

                @include mobile {
                    font-size: 18px;

                    margin-left: 6px;
                }
            }
        }
    }
}
</style>
