<template>
  <v-footer class="bg-blue-grey-darken-3">
    <v-row justify="center" no-gutters>
      <v-col cols="12" sm="6" md="2">
        <img src="../../assets/images/logo.webp" alt="Company Logo" class="logo" />
        <div class="company-name title">Company Name</div>
      </v-col>

      <!-- Column 2: About Us -->
      <v-col cols="12" sm="6" md="2">
        <h3 class="title">About Us</h3>
        <ul>
          <li><a href="#">Mission</a></li>
          <li><a href="#">Vision</a></li>
          <li><a href="#">Values</a></li>
        </ul>
      </v-col>

      <!-- Column 3: Team -->
      <v-col cols="12" sm="6" md="2">
        <h3 class="title">Products</h3>
        <ul>
          <li><a href="#">Our Members</a></li>
          <li><a href="#">Join Us</a></li>
        </ul>
      </v-col>

      <!-- Column 4: Services -->
      <v-col cols="12" sm="6" md="2">
        <h3 class="title">Contact Us</h3>
        <ul>
          <li><v-icon>mdi-home</v-icon>Location goes here</li>
          <li><v-icon>mdi-phone</v-icon>+37112345678</li>
          <li><v-icon>mdi-email</v-icon>E-Mail goes here</li>
        </ul>
      </v-col>

      <!-- Column 5: Social Media Buttons -->
      <v-col cols="12" sm="6" md="2">
        <h3 class="title">Connect With Us</h3>
        <v-btn icon class="social-media-icon">
          <v-icon>mdi-facebook</v-icon>
        </v-btn>
        <v-btn icon class="social-media-icon">
          <v-icon>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon class="social-media-icon">
          <v-icon>mdi-instagram</v-icon>
        </v-btn>
      </v-col>

      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Company name</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style scoped>
.logo {
  width: 100px;
}

.company-name {
  margin-top: 10px;
}

.social-media-icon {
  margin: 5px;
}
a {
  text-decoration: none;
  color: white;
}
.title {
  font-weight: bold;
  font-size: 18px;
}
</style>
