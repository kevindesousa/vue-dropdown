<template>
    <li><slot></slot></li>
</template>

<script>

export default {
  name: 'dropdown-option'
}
</script>

<style lang="scss" scopped>
.group-actions {
    position: relative;
    display: flex;
    vertical-align: baseline;
    line-height: 24px;

    .trigger {
        align-self: center;
        padding: 0;
        cursor: pointer;
    }

    .group-actions-menu {
        z-index: 1000;
        position: absolute;
        top: 100%;
        right: 0;
        margin-top: 6px;

        li {
        list-style: none;
        display: block !important;
        margin:0;
        padding: 0 18px 0 0!important;
        width: 100%;
        border-bottom:1px solid #ededed;
        cursor: pointer;
        text-align: left;
        &:last-child {
            border-bottom: inherit;
        }
        &:hover {
            background: #fafafa;
        }
        a, span {
            display: inline-block;
            padding:  18px !important;
            color: #484848;
            font-weight: 600;
            white-space: nowrap;
            width: inherit;
            cursor: pointer;
        }
        }
    }

    &.group-actions-embedded {
        .embedded button {
            cursor: pointer;
            font-weight: bold;
            font-size: 13px;
            height: 32px;
            line-height: 32px;
            white-space: nowrap;
            overflow: hidden;
            padding: 0 18px;
            text-align: center;
            vertical-align: middle;
            text-transform: capitalize;
            color: #484848;
            background-color: #fff;
            border-top:1px solid #eaeaea;
            border-bottom:1px solid #eaeaea;
            border-left:1px solid #eaeaea;
            border-right:0;
            &:hover {
                background: #fafafa;
            }
            &:first {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }
        }
        .trigger {
            color: #484848;
            border-left: 1px solid #cacaca;
            background-color: #fff;
            padding: 0 10px;
            height: 32px;
            border-radius: 0;
            border:1px solid #eaeaea;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
            line-height: 32px;
        }
    }
}
</style>
