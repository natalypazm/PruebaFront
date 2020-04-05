<template>
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand class="logo-wrapper" href="https://mdbootstrap.com/docs/vue/" target="_blank"
        ><img width="100" alt="" class="img-fluid" src="./assets/geor.png"
      /></mdb-navbar-brand
      >
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
        </mdb-navbar-nav>
        <mdb-navbar-nav right>
          <mdb-nav-item>
            <mdb-dropdown>
              <mdb-dropdown-toggle class="toggle-user p-1" slot="toggle">
              <mdb-icon fa icon="user-alt" class="mr-2 icon-of-user"/>
              <span>
              <strong>Nombre Apellido</strong>
              <p class="email-user">geor@gmail.com</p>
              </span>
              </mdb-dropdown-toggle>
                <mdb-dropdown-menu>
                  <mdb-dropdown-item>Action</mdb-dropdown-item>
                  <mdb-dropdown-item>Another action</mdb-dropdown-item>
                  <mdb-dropdown-item>Something else here</mdb-dropdown-item>
                  <div class="dropdown-divider"></div>
                  <mdb-dropdown-item>Separated link</mdb-dropdown-item>
                </mdb-dropdown-menu>
            </mdb-dropdown>
          </mdb-nav-item>
          <mdb-nav-item class="my-auto" href="#!" waves-fixed
            ><mdb-icon fa class="pr-3" icon="cog"
          /><small class="d-sm-none">Configuración</small></mdb-nav-item>
          <mdb-nav-item class="my-auto" href="#!" waves-fixed
            ><mdb-icon class="pr-3" fa icon="envelope"
          /><small class="d-sm-none">Mensaje</small></mdb-nav-item>
          <mdb-nav-item class="my-auto" href="#!" waves-fixed
            ><mdb-icon class="pr-3" fa icon="bell"
          /><small class="d-sm-none">Notificación</small></mdb-nav-item>
          <mdb-nav-item class="my-auto pl-lg-4 indicador" href="#!" waves-fixed
            ><mdb-icon fa icon="power-off"
          /><small class="d-sm-none pl-2">Salir</small></mdb-nav-item>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed pt-5">
      <mdb-list-group class="list-group-flush mt-5">
      <a class="ml-auto"><mdb-icon icon="chevron-circle-left fa-lg" class="mr-3 mb-4 icon-display-menu"/></a>
        <router-link to="/" @click.native="activeItem = 1">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 1 && 'active'"
            >Indicadores<mdb-icon
              icon="chart-pie" class="float-right pr-3"
            /></mdb-list-group-item
          >
        </router-link>
        <router-link to="Ventas" @click.native="activeItem = 2">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 2 && 'active'"
            >Ventas<mdb-icon
              icon="coins" class="float-right pr-3"
            /></mdb-list-group-item
          >
        </router-link>
        <router-link to="Compras" @click.native="activeItem = 3">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 3 && 'active'"
            >Compras<mdb-icon
              icon="shopping-cart" class="float-right pr-3"
            /></mdb-list-group-item
          >
        </router-link>
        <router-link to="Inventarios" @click.native="activeItem = 4">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 4 && 'active'"
            >Inventarios<mdb-icon
              icon="warehouse" class="float-right pr-3"
            /></mdb-list-group-item
          >
        </router-link>
        <router-link to="Finanzas" @click.native="activeItem = 5">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 5 && 'active'"
            >Finanzas<mdb-icon
              icon="comment-dollar" class="float-right pr-3"
            /></mdb-list-group-item
          >
        </router-link>
        <router-link to="Personas" @click.native="activeItem = 6">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 5 && 'active'"
            >Personas<mdb-icon
              icon="user-friends" class="float-right pr-3"
            /></mdb-list-group-item
          >
        </router-link>
        <router-link to="Planificacion" @click.native="activeItem = 7">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 5 && 'active'"
            >Planificacion<mdb-icon
              icon="edit" class="float-right pr-3"
            /></mdb-list-group-item
          >
        </router-link>
        <router-link to="Informes" @click.native="activeItem = 8">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 5 && 'active'"
            >Informes<mdb-icon
              icon="user-friends" class="float-right pr-3"
            /></mdb-list-group-item
          >
        </router-link>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbIcon,
  mdbListGroup,
  mdbListGroupItem,
  waves,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle
} from "mdbvue";

export default {
  name: "AdminTemplate",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
  },
  data() {
    return {
      activeItem: 1
    };
  },
  beforeMount() {
    this.activeItem = this.$route.matched[0].props.default.page;
  },
  mixins: [waves]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>

<style scoped>
main {
  background-color: #ededee;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  //padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  //z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}
.list-group-item.active{
  background:transparent;
  box-shadow:none !important;
  color:#e73132;
}
.toggle-user strong{
  text-transform:Capitalize;
}
.email-user{
    text-transform: lowercase;
    margin: 0;
    line-height: 1;
    font-weight: lighter;
    color: #8f8f8f;
}
.toggle-user{
  display: flex;
  align-items: center;
  box-shadow:none;
}
.indicador i, .icon-display-menu{
  color:#e73132;
}
.toggle-user .icon-of-user{
    background: #ededee;
    border-radius: 100%;
    padding: 6px !important;
}



@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
