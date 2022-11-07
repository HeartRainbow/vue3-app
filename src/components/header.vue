<template>
    <nav class="navbar-header">
        <ul class="nav">
            <li class="dropdown">
                <a href="#">project</a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="#">aaa</a>
                    </li>
                    <li class="dropdown-submenu">
                        <a href="#">bbb</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">ccc</a>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="#">ddd</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="#">fff</a>
                                    </li>
                                    <li>
                                        <a href="#">ggg</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">eee</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#">project</a>
                <ul class="dropdown-menu">
                    <li>
                        <a href="#">aaa</a>
                    </li>
                    <li class="dropdown-submenu">
                        <a href="#">bbb</a>
                        <ul class="dropdown-menu">
                            <li>
                                <a href="#">ccc</a>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="#">ddd</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <a href="#">fff</a>
                                    </li>
                                    <li>
                                        <a href="#">ggg</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">eee</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator';

interface IRoute {
    // [key: string]: any
    path: string,
    name: string,
    children?: IRoute[]
}

@Options({
    name: '',
    components: {
    }
})
export default class Header extends Vue {

    routesList: IRoute[] = [
        {
            path: '/',
            name: 'Home',
            children: [
                {
                    path: '/sub-1',
                    name: '子菜单1',
                    children: [
                        {
                            path: '/sub-1-1',
                            name: '子菜单1-1',
                        },
                        {
                            path: '/sub-1-2',
                            name: '子菜单1-2',
                        },
                    ]
                },
                {
                    path: '/sub-2',
                    name: '子菜单2',
                },
            ]
        },
        {
            path: '/chartBox',
            name: 'ChartBox',
        },
        {
            path: '/about',
            name: 'About',
        },
        {
            path: '/counter',
            name: 'Counter',
        },
        {
            path: '/login',
            name: 'Login',
        },
        {
            path: '/upload',
            name: 'Upload',
        }
    ];

}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

.navbar-header {
    width: 100%;
}

nav {
    background-color: #eaeaea;
}

ul,
li {
    margin: 0;
    list-style: none;
}

ul.nav {
    display: flex;
    align-items: flex-start;
    padding-left: 10px;
    background-color: lightblue;
}

ul.nav>li {
    float: left;
    display: block;
    position: relative;
    background-color: white;
    min-width: 160px;
}

ul.nav li:hover {
    background-color: #e6e6e6;
}

.nav>li>a {
    position: relative;
    padding: 10px 15px;
    display: block;
    color: lightskyblue;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 160px;
    padding: 5px 0;
    text-align: left;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: 6px;
    -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
    box-shadow: 0 6px 12px rgba(0, 0, 0, .175);
}

a {
    text-decoration: none;
    background-color: transparent;
    color: #337ab7;
}

.dropdown-menu>li>a {
    display: block;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}

.dropdown-submenu {
    position: relative;
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
}

.dropdown:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #aaa;
}
</style>