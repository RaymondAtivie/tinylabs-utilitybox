<template>
    <div class="floating-tab">
        <div class="tabs py-3">
            <div>
                <img src="../assets/images/paperclip.svg" />
            </div>
            <div class="flex-fill px-2">
                <tl-input placeholder="Message" class="custom-input" customInputStyle="padding-top: 0px !important; padding-bottom: 0px !important;" type="text"/>
            </div>
            <div>
                <icon name="send"  />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .floating-tab{
        position: fixed;
        width: 100%;
        margin: auto;
        // min-height: 60px;
        bottom: 0;
        text-align: center;
        max-width: $full-width;
        border-top: 1px solid rgba(53, 51, 87, 0.117269);
        
        .tabs{
            //background-color: red !important;
            margin: auto;
            width: 100%;
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0px 25px;
            // padding-top: 10px;

            .custom-input {
                margin-top: 0px !important;
            }
            .tab{
                cursor: pointer;
                padding: 0px 5px 7px 5px;
                border-bottom: 4px solid white;
                .text{
                    font-size: 12px;
                    color: #ABABB9;
                    font-weight: bold;
                }
                .mdi{
                    color: #ABABB9;
                }

                &.active{
                    border-bottom-color: $primary;
                    .text{
                        color: $primary;
                    }
                    .mdi{
                        color: $primary;
                    }
                }
            }
        }
    }
</style>