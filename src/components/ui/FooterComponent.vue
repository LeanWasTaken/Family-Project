<template>
  <v-footer class="bg-blue-grey-darken-3 footer">
    <v-container class="wrapper">
      <v-row justify="center" no-gutters class="text-center main-row">
        <!-- Logo and Company Name -->
        <v-col cols="12" sm="12" md="3">
          <img class="logo" src="/logo1-noBG.png" alt="logo" />
          <div class="company-name title">SATIS HOUSE</div>
        </v-col>

        <!-- Products Section -->
        <v-col cols="12" sm="4" md="3">
          <h3 class="title">{{ $t('footer.useful-info.title') }}</h3>
          <ul class="no-bullet-list">
            <li>
              <a href="#">{{ $t('footer.useful-info.privacy') }}</a>
            </li>
            <li>
              <a href="#">{{ $t('footer.useful-info.terms') }}</a>
            </li>
          </ul>
        </v-col>

        <!-- Contact Us Section -->
        <v-col cols="12" sm="4" md="3">
          <h3 class="title">{{ $t('footer.contact') }}</h3>
          <ul class="no-bullet-list">
            <li>
              <v-icon>mdi-home</v-icon>Gaujas 24/21, Vangaži, Inčukalna novads, Latvija, LV2136.
            </li>
            <li><v-icon>mdi-phone</v-icon><a href="tel:+37125521166">+371 25521166</a></li>
            <li><v-icon>mdi-email</v-icon><a href="mailto:info@satis.lv">info@satis.lv</a></li>
          </ul>
        </v-col>

        <!-- Social Media Section -->
        <v-col cols="12" sm="4" md="3">
          <h3 class="title">{{ $t('footer.socials') }}</h3>
          <v-btn icon class="social-media-icon">
            <v-icon>mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon class="social-media-icon">
            <v-icon>mdi-plane</v-icon>
          </v-btn>
          <v-btn icon class="social-media-icon">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
        </v-col>

        <!-- Copyright Section -->
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>SATIS HOUSE</strong>
        </v-col>
      </v-row>
    </v-container>
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

.footer {
  padding: 24px 0; /* Add padding to the footer */
  width: 100%;
}

.no-bullet-list {
  list-style: none; /* Remove default list style */
  padding-left: 0; /* Remove default list padding */
}
.wrapper {
  max-width: 1480px;
}
</style>
