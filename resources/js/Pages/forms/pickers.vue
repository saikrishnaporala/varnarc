<script>
import { Link, Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import PageHeader from "@/Components/page-header.vue";

import flatPickr from "vue-flatpickr-component";
import Pickr from "@simonwep/pickr";

import "flatpickr/dist/flatpickr.css";
import "@simonwep/pickr/dist/themes/classic.min.css"; // 'classic' theme
import "@simonwep/pickr/dist/themes/monolith.min.css"; // 'monolith' theme
import "@simonwep/pickr/dist/themes/nano.min.css";


export default {
  data() {
    return {
      date: null,
      date1: null,
      date2: null,
      date3: null,
      date4: null,
      date5: null,
      date6: null,
      date7: null,
      date9: null,
      date10: null,
      time: null,
      time1: null,
      time2: null,
      time3: null,
      time4: null,
      config: {
        wrap: true, // set wrap to true only when using 'input-group'
        altFormat: "M j, Y",
        altInput: true,
        dateFormat: "d M, Y",
      },
      dateTimeConfig: {
        enableTime: true,
        dateFormat: "d.m.y H:i",
      },
      humanfriendlyConfig: {
        dateFormat: "F j, Y",
      },
      minmaxdateConfig: {
        dateFormat: "d M, Y",
        minDate: "25 12, 2021",
        maxDate: "29 12,2021",
      },
      defaultDateConfig: {
        dateFormat: "d M, Y",
        defaultDate: "25 Dec, 2021",
      },
      disbleDateConfig: {
        dateFormat: "Y-m-d",
        disable: [
          "2021-12-25",
          "2021-12-26",
          "2021-12-27",
          "2021-12-28",
          "2021-12-29",
          "2021-12-30",
          "2021-12-31",
        ],
      },
      multipleDateConfig: {
        mode: "multiple",
        dateFormat: "d M, Y",
      },
      rangeDateconfig: {
        mode: "range",
        dateFormat: "d M, Y",
      },
      inlineConfig: {
        inline: true,
        dateFormat: "d M, Y",
        defaultDate: "25 12, 2021",
      },
      timePicker: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
      },
      hourtimePicker: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H",
      },
      limittimePicker: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        minTime: "13:00",
        maxTime: "16:00",
      },
      preloadingTime: {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        defaultDate: "13:00",
      },
      inlineTime: {
        enableTime: true,
        noCalendar: true,
        defaultDate: "11:42",
        inline: true,
      },
    };
  },
  components: {
    Layout,
    PageHeader,
    flatPickr,
    Head, Link
  },
  mounted() {
    const inputElement = document.querySelector(".classic-colorpicker");

    new Pickr({
      el: inputElement,
      theme: "classic", // or 'monolith', or 'nano'
      default: "#405189",
      swatches: [
        "rgba(244, 67, 54, 1)",
        "rgba(233, 30, 99, 0.95)",
        "rgba(156, 39, 176, 0.9)",
        "rgba(103, 58, 183, 0.85)",
        "rgba(63, 81, 181, 0.8)",
        "rgba(33, 150, 243, 0.75)",
        "rgba(3, 169, 244, 0.7)",
        "rgba(0, 188, 212, 0.7)",
        "rgba(0, 150, 136, 0.75)",
        "rgba(76, 175, 80, 0.8)",
        "rgba(139, 195, 74, 0.85)",
        "rgba(205, 220, 57, 0.9)",
        "rgba(255, 235, 59, 0.95)",
        "rgba(255, 193, 7, 1)",
      ],
      components: {
        // Main components
        preview: true,
        opacity: true,
        hue: true,
        // Input / output Options
        interaction: {
          hex: true,
          rgba: true,
          hsva: true,
          input: true,
          clear: true,
          save: true,
        },
      },
    });

    // monolith color picker
    var monolithColorPickr = document.querySelectorAll(".monolith-colorpicker");
    monolithColorPickr.forEach(function () {
      Pickr.create({
        el: ".monolith-colorpicker",
        theme: "monolith",
        default: "#0ab39c",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        defaultRepresentation: "HEXA",
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            hex: false,
            rgba: false,
            hsva: false,
            input: true,
            clear: true,
            save: true,
          },
        },
      });
    });

    // nano color picker
    var nanoColorPickr = document.querySelectorAll(".nano-colorpicker");
    nanoColorPickr.forEach(function () {
      Pickr.create({
        el: ".nano-colorpicker",
        theme: "nano",
        default: "#3577f1",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        defaultRepresentation: "HEXA",
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,
          // Input / output Options
          interaction: {
            hex: false,
            rgba: false,
            hsva: false,
            input: true,
            clear: true,
            save: true,
          },
        },
      });
    });

    // colorpicker demo

    // demo color picker
    var demoColorPickr = document.querySelectorAll(".colorpicker-demo");
    demoColorPickr.forEach(function () {
      Pickr.create({
        el: ".colorpicker-demo",
        theme: "monolith",
        default: "#405189",
        components: {
          // Main components
          preview: true,
          // Input / output Options
          interaction: {
            clear: true,
            save: true,
          },
        },
      });
    });

    // color picker opacity & hue
    var opacityHueColorPickr = document.querySelectorAll(".colorpicker-opacity-hue");
    opacityHueColorPickr.forEach(function () {
      Pickr.create({
        el: ".colorpicker-opacity-hue",
        theme: "monolith",
        default: "#0ab39c",

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            clear: true,
            save: true,
          },
        },
      });
    });

    // color picker swatches
    var swatcherColorPickr = document.querySelectorAll(".colorpicker-swatches");
    swatcherColorPickr.forEach(function () {
      Pickr.create({
        el: ".colorpicker-swatches",
        theme: "monolith",
        default: "#3577f1",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            clear: true,
            save: true,
          },
        },
      });
    });

    // color picker input
    var inputColorPickr = document.querySelectorAll(".colorpicker-input");
    inputColorPickr.forEach(function () {
      Pickr.create({
        el: ".colorpicker-input",
        theme: "monolith",
        default: "#f7b84b",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            input: true,
            clear: true,
            save: true,
          },
        },
      });
    });

    // color picker Format
    var formatColorPickr = document.querySelectorAll(".colorpicker-format");
    formatColorPickr.forEach(function () {
      Pickr.create({
        el: ".colorpicker-format",
        theme: "monolith",
        default: "#f06548",
        swatches: [
          "rgba(244, 67, 54, 1)",
          "rgba(233, 30, 99, 0.95)",
          "rgba(156, 39, 176, 0.9)",
          "rgba(103, 58, 183, 0.85)",
          "rgba(63, 81, 181, 0.8)",
          "rgba(33, 150, 243, 0.75)",
          "rgba(3, 169, 244, 0.7)",
        ],
        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: true,

          // Input / output Options
          interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: true,
          },
        },
      });
    });
  },
};
</script>

<template>
  <Layout>
    <PageHeader title="Pickers" pageTitle="Forms" />
    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Flatpickr - Datepicker</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <form action="#">
              <BRow class="gy-3">
                <BCol lg="6">
                  <div>
                    <label class="form-label mb-0">Basic</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-date-format="d M,
                        Y"</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="date" :config="config" class="form-control flatpickr-input"></flat-pickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div>
                    <label class="form-label mb-0">DateTime</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-date-format="d.m.y"
                        data-enable-time</code>
                      attribute.
                    </p>

                    <flat-pickr v-model="date1" :config="dateTimeConfig" class="form-control"></flat-pickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Human-Friendly Dates</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-altFormat="F j, Y"</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="date2" :config="humanfriendlyConfig" class="form-control flatpickr-input">
                    </flat-pickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">MinDate and MaxDate</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-date-format="d M, Y"
                        data-minDate="Your Min. Date" data-maxDate="Your Max.
                        date"</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="date3" class="form-control flatpickr-input"></flat-pickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Default Date</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-date-format="d M, Y"
                        data-deafult-date="Your Default Date"</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="date10" :config="defaultDateConfig" class="form-control flatpickr-input"></flat-pickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Disabling Dates</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-disable="true"</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="date4" :config="disbleDateConfig" class="form-control"></flat-pickr>
                  </div>
                </BCol>
              </BRow>

              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Selecting Multiple Dates</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-date-format="d M, Y"
                        data-multiple-date="true"</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="date5" :config="multipleDateConfig" class="form-control"></flat-pickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Range</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-date-format="d M, Y"
                        data-range-date="true"</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="date6" :config="rangeDateconfig" class="form-control"></flat-pickr>
                  </div>
                </BCol>
              </BRow>

              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Inline</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-date-format="d M, Y"
                        data-deafult-date="today" data-inline-date="true"</code>
                      attribute.
                    </p>

                    <flat-pickr v-model="date7" :config="inlineConfig" class="form-control"></flat-pickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Week Number</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="flatpickr" data-date-format="d M, Y"
                        data-week-number</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="date9" :config="config" :weekNumber=true class="form-control"></flat-pickr>
                  </div>
                </BCol>
              </BRow>
            </form>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Flatpickr - Timepicker</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <form action="#">
              <BRow class="gy-3">
                <BCol lg="6">
                  <div>
                    <label class="form-label mb-0">Timepicker</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="timepickr" data-time-basic="true"</code>
                      attribute.
                    </p>

                    <flat-pickr v-model="time" :config="timePicker" class="form-control flatpickr-input"></flat-pickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div>
                    <label class="form-label mb-0">24-hour Time Picker</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="timepickr" data-time-hrs="true"</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="time1" :config="hourtimePicker" class="form-control flatpickr-input">
                    </flat-pickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Time Picker w/ Limits</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="timepickr" data-min-time="Min.Time"
                        data-max-time="Max.Time"</code>
                      attribute.
                    </p>

                    <flat-pickr v-model="time2" :config="limittimePicker" class="form-control flatpickr-input">
                    </flat-pickr>
                  </div>
                </BCol>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Preloading Time</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="timepickr" data-default-time="Your
                        Default Time"</code>
                      attribute.
                    </p>

                    <flat-pickr v-model="time3" :config="preloadingTime" class="form-control flatpickr-input">
                    </flat-pickr>
                  </div>
                </BCol>
              </BRow>
              <BRow>
                <BCol lg="6">
                  <div class="mt-3">
                    <label class="form-label mb-0">Inline</label>
                    <p class="text-muted">
                      Set
                      <code>data-provider="timepickr" data-time-inline="Your
                        Default Time"</code>
                      attribute.
                    </p>
                    <flat-pickr v-model="time4" :config="inlineTime" class="form-control"></flat-pickr>
                  </div>
                </BCol>
              </BRow>
            </form>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>

    <BRow>
      <BCol lg="12">
        <BCard no-body>
          <BCardHeader>
            <BCardTitle class="mb-0">Colorpicker</BCardTitle>
          </BCardHeader>

          <BCardBody>
            <div>
              <div>
                <h5 class="fs-14 mb-3">Themes</h5>
                <BRow class="g-4">
                  <BCol lg="4" md="6">
                    <div>
                      <h5 class="fs-13 text-muted mb-2">Classic Demo</h5>
                      <p class="text-muted">
                        Use <code>classic-colorpicker</code> class to set
                        classic colorpicker.
                      </p>
                      <div class="pickr">
                        <div class="classic-colorpicker pcr-button" style="--pcr-color:rgba(64, 81, 137, 1);"></div>
                      </div>
                    </div>
                  </BCol>
                  <BCol lg="4" md="6">
                    <div>
                      <h5 class="fs-13 text-muted mb-2">Monolith Demo</h5>
                      <p class="text-muted">
                        Use <code>monolith-colorpicker</code> class to set
                        monolith colorpicker.
                      </p>
                      <div class="monolith-colorpicker"></div>
                    </div>
                  </BCol>
                  <BCol lg="4" md="6">
                    <div>
                      <h5 class="fs-13 text-muted mb-2">Nano Demo</h5>
                      <p class="text-muted">
                        Use <code>nano-colorpicker</code> class to set nano
                        colorpicker.
                      </p>
                      <div class="nano-colorpicker"></div>
                    </div>
                  </BCol>
                </BRow>
              </div>

              <div class="mt-5">
                <h5 class="fs-14 mb-2">Options</h5>

                <BRow class="g-4">
                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-13 text-muted mb-2">Demo</h5>
                      <p class="text-muted">
                        Use <code>colorpicker-demo</code> class to set demo
                        option colorpicker.
                      </p>
                      <div class="colorpicker-demo"></div>
                    </div>
                  </BCol>

                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-13 text-muted mb-2">
                        Picker with Opacity & Hue
                      </h5>
                      <p class="text-muted">
                        Use <code>colorpicker-opacity-hue</code> class to set
                        colorpicker with opacity & hue.
                      </p>
                      <div class="colorpicker-opacity-hue"></div>
                    </div>
                  </BCol>

                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-13 text-muted mb-2">Switches</h5>
                      <p class="text-muted">
                        Use <code>colorpicker-swatches</code> class to set
                        switch colorpicker.
                      </p>
                      <div class="colorpicker-swatches"></div>
                    </div>
                  </BCol>

                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-13 text-muted mb-2">Picker with Input</h5>
                      <p class="text-muted">
                        Use <code>colorpicker-input</code> class to set
                        colorpicker with input.
                      </p>
                      <div class="colorpicker-input"></div>
                    </div>
                  </BCol>

                  <BCol lg="4" md="6">
                    <div class="mt-2">
                      <h5 class="fs-13 text-muted mb-2">Color Format</h5>
                      <p class="text-muted">
                        Use <code>colorpicker-format</code> class to set
                        colorpicker with format option.
                      </p>
                      <div class="colorpicker-format"></div>
                    </div>
                  </BCol>
                </BRow>
              </div>
            </div>
          </BCardBody>
        </BCard>
      </BCol>
    </BRow>
  </Layout>
</template>
