<script>
import { Link, Head } from '@inertiajs/vue3';
export default {
  methods: {
    getInputElement(index) {
      return document.getElementById('digit' + index + '-input');
    },

    moveToNext(index) {
      if (this.getInputElement(index).value.length === 1) {
        if (index !== 4) {
          this.getInputElement(index + 1).focus();
        } else {
          this.getInputElement(index).blur();
          // Submit code
          console.log('submit code');
        }
      }
    }
  },
  components: {
    Link, Head
  }
};
</script>

<template>

  <Head title="Two Step Verification" />

  <div class="auth-page-wrapper pt-5">
    <div class="auth-one-bg-position auth-one-bg" id="auth-particles">
      <div class="bg-overlay"></div>
      <div class="shape">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
          <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
        </svg>
      </div>
    </div>

    <div class="auth-page-content">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="text-center mt-sm-5 mb-4 text-white-50">
              <div>
                <Link href="/" class="d-inline-block auth-logo">
                  <img src="@assets/images/logo-light.png" alt="" height="20">
                </Link>
              </div>
              <p class="mt-3 fs-15 fw-medium">Premium Admin & Dashboard Template</p>
            </div>
          </BCol>
        </BRow>

        <BRow class="justify-content-center">
          <BCol md="8" lg="6" xl="5">
            <BCard no-body class="mt-4 card-bg-fill">

              <BCardBody class="p-4">
                <div class="mb-4">
                  <div class="avatar-lg mx-auto">
                    <div class="avatar-title bg-light text-primary display-5 rounded-circle">
                      <i class="ri-mail-line"></i>
                    </div>
                  </div>
                </div>

                <div class="p-2 mt-4">
                  <div class="text-muted text-center mb-4 mx-lg-3">
                    <h4 class="">Verify Your Email</h4>
                    <p>Please enter the 4 digit code sent to <span class="fw-semibold">example@abc.com</span></p>
                  </div>

                  <form>
                    <BRow>
                      <BCol cols="3">
                        <div class="mb-3">
                          <label for="digit1-input" class="visually-hidden">Dight 1</label>
                          <input type="text" class="form-control form-control-lg bg-light border-light text-center" v-on:keyup="moveToNext(1)" maxLength="1" id="digit1-input">
                        </div>
                      </BCol>

                      <BCol cols="3">
                        <div class="mb-3">
                          <label for="digit2-input" class="visually-hidden">Dight 2</label>
                          <input type="text" class="form-control form-control-lg bg-light border-light text-center" v-on:keyup="moveToNext(2)" maxLength="1" id="digit2-input">
                        </div>
                      </BCol>

                      <BCol cols="3">
                        <div class="mb-3">
                          <label for="digit3-input" class="visually-hidden">Dight 3</label>
                          <input type="text" class="form-control form-control-lg bg-light border-light text-center" v-on:keyup="moveToNext(3)" maxLength="1" id="digit3-input">
                        </div>
                      </BCol>

                      <BCol cols="3">
                        <div class="mb-3">
                          <label for="digit4-input" class="visually-hidden">Dight 4</label>
                          <input type="text" class="form-control form-control-lg bg-light border-light text-center" v-on:keyup="moveToNext(4)" maxLength="1" id="digit4-input">
                        </div>
                      </BCol>
                    </BRow>
                  </form>

                  <div class="mt-3">
                    <BButton type="button" variant="success" class="w-100">Confirm</BButton>
                  </div>
                </div>
              </BCardBody>
            </BCard>

            <div class="mt-4 text-center">
              <p class="mb-0">Didn't receive a code ? <Link href="/auth/reset-pwd-basic" class="fw-semibold text-primary text-decoration-underline">Resend</Link>
              </p>
            </div>

          </BCol>
        </BRow>
      </BContainer>
    </div>

    <footer class="footer">
      <BContainer>
        <BRow>
          <BCol lg="12">
            <div class="text-center">
              <p class="mb-0 text-muted">&copy; {{ new Date().getFullYear() }} Velzon. Crafted with <i class="mdi mdi-heart text-danger"></i> by Themesbrand</p>
            </div>
          </BCol>
        </BRow>
      </BContainer>
    </footer>
  </div>
</template>