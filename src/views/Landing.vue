<template>
  <div>
    <b-jumbotron class="mb-0 px-5 pb-5 pt-3" style="background-color: #fafcff">
      <b-img class="wave" :src="require('../assets/landing/wave.png')" />
      <b-container>
        <b-row class="align-items-center">
          <b-col xl="2" cols="4">
            <b-img
              fluid
              sizes="10rem"
              :src="require('../assets/landing/nepays.png')"
            />
          </b-col>
          <b-col xl="10" cols="8" class="text-right">
            <router-link to="/login">
              <b-button class="login">Login</b-button>
            </router-link>
            <router-link to="/register">
              <b-button class="register">Sign Up</b-button>
            </router-link>
          </b-col>
          <b-col cols="12" xl="7" class="title-banner pl-5">
            <h1>Awesome App</h1>
            <h1 class="m-0">For Saving <span>Time.</span></h1>
            <p class="my-4">
              We bring you a mobile app for banking problems that <br />oftenly
              wasting much of your times
            </p>
            <router-link to="/login">
              <b-button class="py-2 px-4 btn-hero">Try it Free</b-button>
            </router-link>
          </b-col>
          <b-col cols="12" xl="5" class="text-center">
            <img src="@/assets/landing/png-phone.png" class="landing-img" />
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>

    <b-jumbotron class="mb-0 py-5" style="background-color: #eff0fc">
      <b-container>
        <div cols="12" class="text-center mb-5 landing-testi">
          <h1 class="mb-3"><span>About</span> the Application.</h1>
          <small>
            We Have some great features from the application and it's totally
            free <br />to use by all users around the world
          </small>
        </div>
        <b-row>
          <b-col cols="12" xl="4" class="my-2">
            <b-card class="text-center py-4" style="border-radius: 20px">
              <b-avatar class="p-2 avatar" size="4rem">
                <b-icon icon="telephone" scale="2" variant="primary"></b-icon>
              </b-avatar>
              <h4 class="my-4"><strong>24/7 Support</strong></h4>
              <b-card-text>
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" xl="4" class="my-2">
            <b-card class="text-center py-4" style="border-radius: 20px">
              <b-avatar class="p-2 avatar" size="4rem">
                <b-icon icon="lock" scale="2" variant="primary"></b-icon>
              </b-avatar>
              <h4 class="my-4"><strong>Data Privacy</strong></h4>
              <b-card-text>
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </b-card-text>
            </b-card>
          </b-col>
          <b-col cols="12" xl="4" class="my-2">
            <b-card class="text-center py-4" style="border-radius: 20px">
              <b-avatar class="p-2 avatar" size="4rem">
                <b-icon icon="download" scale="2" variant="primary"></b-icon>
              </b-avatar>
              <h4 class="my-4"><strong>Easy Download</strong></h4>
              <b-card-text>
                Nepays is 100% totally free to use it's now available on Google
                Play Store and App Store
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>

    <b-jumbotron class="mb-0" style="background-color: #fafcff; padding: 60px">
      <b-container>
        <b-row>
          <b-col cols="12" xl="4" class="title-section pl-5 align-self-center">
            <h1>100+ <span>Trusted</span></h1>
            <h1>Partners.</h1>
            <small
              >We have reached global level and have 100+ <br />
              brand partners around the globe</small
            >
          </b-col>
          <b-col cols="12" xl="8" class="text-center my-3">
            <b-row>
              <b-col xl="4" cols="6">
                <b-img fluid :src="require('../assets/landing/airbnb.png')" />
              </b-col>
              <b-col xl="4" cols="6">
                <b-img fluid :src="require('../assets/landing/canon.png')" />
              </b-col>
              <b-col xl="4" cols="6">
                <b-img fluid :src="require('../assets/landing/dell.png')" />
              </b-col>
              <b-col xl="4" cols="6">
                <b-img
                  fluid
                  :src="require('../assets/landing/microsoft.png')"
                />
              </b-col>
              <b-col xl="4" cols="6">
                <b-img fluid :src="require('../assets/landing/dropbox.png')" />
              </b-col>
              <b-col xl="4" cols="6">
                <b-img fluid :src="require('../assets/landing/hnm.png')" />
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </b-jumbotron>

    <b-jumbotron class="mb-0 py-5" style="background-color: #eff0fc">
      <b-container>
        <b-row class="align-items-center">
          <b-col cols="12" xl="5" class="text-center">
            <img src="@/assets/landing/phone3.png" class="landing-img" />
          </b-col>
          <b-col cols="12" xl="6" class="landing-feature">
            <h1 class="mb-3">All The <span>Greet</span></h1>
            <h1 class="mb-5">NePays Features.</h1>
            <b-row>
              <b-col cols="12" class="bg-white p-3 point-feature">
                <h5><span>1. </span> Small Fee</h5>
                <p class="mb-0">
                  We Only charge 5% of every success transaction done in NePays
                  App
                </p>
              </b-col>
              <b-col cols="12" class="bg-white p-3 point-feature">
                <h5><span>2.</span> Data Secured</h5>
                <p class="mb-0">
                  All your data is secured properly in our system and it's
                  encrypted
                </p>
              </b-col>
              <b-col cols="12" class="bg-white p-3 point-feature">
                <h5><span>3. </span>User Friendly</h5>
                <p class="mb-0">
                  NePays come up with modern and sleek design and not
                  complicated
                </p>
              </b-col>
            </b-row>
          </b-col>
          <b-col cols="12" xl="1"></b-col>
        </b-row>
      </b-container>
    </b-jumbotron>

    <b-jumbotron class="mb-0 py-5" style="background-color: #fafcff">
      <b-container>
        <div cols="12" class="text-center mb-5 landing-testi">
          <h1 class="mb-3">What Users are <span>Saying.</span></h1>
          <small>
            We Have some great features from the application and it's totally
            free <br />to use by all users around the world
          </small>
        </div>
        <!-- CAROUSEL -->
        <b-carousel
          id="carousel-1"
          controls
          indicators
          background="#e5e5e5"
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide img-blank>
            <b-avatar size="6rem" class="mb-1 opinion-people">
              <img
                src="@/assets/landing/testi.png"
                style="width: 7.5rem"
                class="mt-4"
              />
            </b-avatar>
            <h4 class="mb-0">Muhammad Nur Hidayat</h4>
            <small class="text-muted">Backend Developer</small>
            <b-card-text class="mt-2 px-4"
              >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
              ea nisi magni accusamus. Saepe sequi, culpa suscipit aut nam
              doloremque doloribus? Soluta laboriosam vitae odit!</b-card-text
            >
          </b-carousel-slide>
        </b-carousel>
      </b-container>
    </b-jumbotron>

    <b-jumbotron class="mb-0 py-5" style="background-color: #6379f4">
      <b-container class="footer">
        <div class="my-4">
          <img src="../assets/landing/nepays_auth.png" alt="nepays" />
        </div>
        <p class="foot-text my-3">
          Simplify financial needs and saving <br />
          much time in banking needs with <br />one single app.
        </p>
        <br />
        <hr />
        <div class="btm-text">
          <p>2020 Nepays. All right reserved</p>
          <div class="phone-email">
            <p class="mx-5">Phone: 919191919191</p>
            <p>Email: nepays@gmail.com</p>
          </div>
        </div>
      </b-container>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;800&display=swap');
* {
  font-family: 'Nunito Sans', sans-serif;
}

.login {
  padding: 1% 4%;
  border-radius: 12px;
  background: #6379f4;
  color: #fff;
  border: solid 2px #fff;
  font-weight: bold;
  margin-right: 4%;
}

.login:hover,
.login:focus {
  border: solid 2px #6379f4;
  background: #fff;
  color: #6379f4;
}

.register {
  padding: 1% 3%;
  border-radius: 12px;
  background: #fff;
  color: #6379f4;
  border: solid 2px #fff;
  font-weight: bold;
}

.register:hover {
  border: solid 2px #fff;
  background: #6379f4;
  color: #fff;
  opacity: 0.9;
}

.wave {
  position: absolute;
  top: 0;
  right: 0;
  width: 44%;
}

.landing-img {
  width: 70%;
  height: 70%;
}
.title-banner h1 {
  font-size: 65px;
  line-height: 65px;
  font-weight: bold;
}

.title-banner span {
  color: #6379f4;
}

.title-banner p {
  line-height: 35px;
}

.btn-hero {
  background-color: #6379f4;
  border-radius: 12px;
  border: solid 2px #6379f4;
}

.landing-feature h1 {
  font-weight: bold;
}

.landing-feature span {
  color: #6379f4;
}

.point-feature {
  border-radius: 20px;
  margin-bottom: 25px;
}

.point-feature h5 {
  font-weight: bold;
}

.landing-testi h1 {
  font-weight: bold;
}

.landing-testi span {
  color: #6379f4;
}

.avatar {
  background-color: rgba(71, 58, 209, 0.1);
}

.title-section h1 {
  font-weight: bold;
}

.title-section span {
  color: #6379f4;
}

.foot-text {
  width: 381px;
  height: 84px;
  color: white;
  font-size: 17px;
  font-weight: normal;
}

hr {
  background-color: white;
  width: 100%;
}

.btm-text {
  display: flex;
  color: white;
  justify-content: space-between;
}

.phone-email {
  display: flex;
  justify-content: space-between;
}
</style>
