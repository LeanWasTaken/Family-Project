<template>
  <div class="full">
    <div class="overlay">
      <div class="content">
        <div class="text">
          <h1 class="welcome">{{ $t('banner.welcome') }}</h1>
          <p>{{ $t('banner.description') }}</p>
        </div>
        <v-btn class="button">{{ $t('banner.button') }}</v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.full {
  min-height: calc(100vh - 64px);
  background-image: url('../../assets/images/house1.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative; /* DO NOT CHANGE THE POSITIONING ON ANY OF THESE */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  text-align: left;
  color: white;
}

.text {
  max-width: 800px;
}

.welcome {
  font-size: 36px;
  font-weight: bold;
}

.button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 0px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
}

/* Do not touch this either please */
@media (max-width: 840px) {
  .content {
    text-align: center;
  }
  .text {
    padding: 0px 12px;
  }
  .welcome {
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
