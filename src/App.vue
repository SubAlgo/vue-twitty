<template>
  <div id="app">
    <tr>
      <td><router-link to='/'>Home</router-link></td>
      <td><router-link to='/profile'>Profile</router-link></td>
      <td><router-link to="/user/1">User 1</router-link></td>
      <td><router-link to='/singin'>Singin</router-link></td>
    </tr>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
   name: 'app'
}
</script>
