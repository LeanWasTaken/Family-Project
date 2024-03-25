<template>
  <v-bottom-sheet inset rounded="6">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Open cookie settings"></v-btn>
    </template>
    <v-card>
      <v-card-title
        ><v-avatar size="80" icon="mdi-cookie"></v-avatar>
        {{ $t('cookies.cookie-title') }}
      </v-card-title>
      <v-card-text>{{ $t('cookies.cookie-description') }}</v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="success">{{ $t('cookies.accept-all') }}</v-btn>
        <v-btn color="warning">{{ $t('cookies.accept-essential') }}</v-btn>
        <v-btn color="error">{{ $t('cookies.accept-none') }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-bottom-sheet>
</template>
