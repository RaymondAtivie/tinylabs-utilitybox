<template>
    <div class="input-box mt-4">
        <label v-if="label" class="label">{{ label }}</label>
        <div class="input-holder">
            <input :type="typeToShow" v-model="myValue" :placeholder="placeholder" :style="customInputStyle" />

            <icon v-if="icon" :name="icon" :size="iconSize" />
            <span v-if="type == 'password'" @click="togglePasswordVisible()" class="icon">
                <icon :name="!passwordVisible ? 'eye-outline' : 'eye-off-outline' " size="1.2" />
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {
            type: [Boolean, String],
            default: false,
        },
        icon: {
            type: [Boolean, String],
            default: false,
        },
        iconSize: {
            type: String,
            default: "1.2",
        },
        type: {
            type: String,
            default: "text",
        },
        value: {
            type: String,
            default: "",
        },
        placeholder: {
            type: String,
            default: "",
        },
        customInputStyle: {
            type: String
        }
    },
    data(){
        return {
            myValue: this.value,
            passwordVisible: false,
        }
    },
    computed: {
        typeToShow(){
            if(this.type == 'password' && this.passwordVisible){
                return 'text';
            }

            return this.type;
        }
    },
    watch: {
        myValue(v){
            this.$emit("input", v);
        },
        value(v){
            this.myValue = v;
        }
    },
    methods: {
        togglePasswordVisible(){
            this.passwordVisible = !this.passwordVisible;
        },
    }
}
</script>

<style lang="scss" scoped>
.input-box {
    .input-holder {
        display: flex;
        flex-direction: row;
        position: relative;
        button{
            border: none;
            background-color: transparent;
            color: $text-color;
        }

        .icon {
            position: absolute;
            top: 17px;
            right: 20px;
        }
    }

    input {
      width: 100%;
      border-radius: 45.5px;
      border: 1px solid #CDCDCD;
      padding-top: 15px;
      padding-bottom: 15px;
      padding-left: 30px;

      &::placeholder {
          padding-left: 15px;
          font-weight: 300;
          font-size: 20px;
          line-height: 22px;
      }
    }
}
</style>