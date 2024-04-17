<template>
  <v-banner color="deep-purple-accent-4">
    <template v-slot:prepend>
      <v-avatar size="80" icon="mdi-cookie"></v-avatar>
    </template>
    <v-banner-text>
      {{ $t('cookies.cookie-description') }}
    </v-banner-text>

    <v-banner-actions>
      <v-btn>{{ $t('cookies.accept-all') }}</v-btn>

      <v-btn>{{ $t('cookies.accept-suggested') }}</v-btn>

      <v-btn>{{ $t('cookies.accept-none') }}</v-btn>
    </v-banner-actions>
  </v-banner>
</template>
