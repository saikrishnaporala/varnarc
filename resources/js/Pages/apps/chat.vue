<script>
import { Head } from '@inertiajs/vue3';
import Layout from "@/Layouts/main.vue";
import simplebar from 'simplebar-vue';
import { SearchIcon, InfoIcon, MoreVerticalIcon } from '@zhuowenli/vue-feather-icons';
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { chatData, chatMessagesData } from "@/common/data";
import avatar2 from "@assets/images/users/avatar-2.jpg";
import user_dummy_img from "@assets/images/users/user-dummy-img.jpg";

export default {
  setup() {
    return {
      v$: useVuelidate()
    };
  },

  data() {
    return {
      rightOffcanvas: false,
      chatData: chatData,
      chatMessagesData: chatMessagesData,
      submitted: false,
      form: {
        message: "",
      },
      username: "Steven Franklin",
      profile: avatar2,
      user_dummy_img,
      searchQuery: "",
    };
  },
  components: {
    Layout,
    SearchIcon,
    InfoIcon,
    MoreVerticalIcon,
    simplebar,
    Head
  },
  validations: {
    form: {
      message: {
        required: helpers.withMessage("Message is required", required),
      },
    },
  },
  methods: {
    /**
     * Get the name of user
     */
    scrollToBottom(id) {
      setTimeout(function () {
        var simpleBar = document.getElementById(id).querySelector(
          "#chat-conversation .simplebar-content-wrapper") ?
          document.getElementById(id).querySelector("#chat-conversation .simplebar-content-wrapper") : '';
        var offsetHeight = document.getElementsByClassName("chat-conversation-list")[0] ?
          document.getElementById(id).getElementsByClassName("chat-conversation-list")[0].scrollHeight - window.innerHeight + 600 : 0;
        if (offsetHeight)
          simpleBar.scrollTo({
            top: offsetHeight,
            behavior: "smooth"
          });
      }, 300);
    },
    chatUsername(name, image) {
      this.username = name;
      this.profile = image;
      this.usermessage = "Hello";
      this.chatMessagesData = [];
      const currentDate = new Date();
      const hours = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
      const minutes = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();

      this.chatMessagesData.push({
        name: this.username,
        message: this.usermessage,
        time: hours + ":" + minutes,
      });
    },

    /**
     * Char form Submit
     */
    formSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        const message = this.form.message;
        const currentDate = new Date();
        const hours = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
        const minutes = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
        this.chatMessagesData.push({
          align: "right",
          name: "Henry Wells",
          message,
          time: hours + ":" + minutes,
        });
        var currentChatId = "users-chat";
        this.scrollToBottom(currentChatId);
      }
      this.submitted = false;
      this.form = {};
    },
  },
  mounted() {
    var currentChatId = "users-chat";
    this.scrollToBottom(currentChatId);
    document.getElementById('copyClipBoard').style.display = 'none';
    var userChatElement = document.querySelectorAll(".user-chat");
    document.querySelectorAll(".chat-user-list li a").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.add("user-chat-show");
        });

        // chat user list link active
        var chatUserList = document.querySelector(".chat-user-list li.active");
        if (chatUserList) chatUserList.classList.remove("active");
        this.parentNode.classList.add("active");
      });
    });

    // user-chat-remove
    document.querySelectorAll(".user-chat-remove").forEach(function (item) {
      item.addEventListener("click", function () {
        userChatElement.forEach(function (elm) {
          elm.classList.remove("user-chat-show");
        });
      });
    });
  },
  computed: {
    resultQuery() {
      if (this.searchQuery) {
        const search = this.searchQuery.toLowerCase();
        return this.chatMessagesData.filter((data) => {
          return (
            data.message.toLowerCase().includes(search)
          );
        });
      } else {
        return this.chatMessagesData;
      }
    },
  }
};
</script>

<template>
  <Layout>

    <Head title="Chat" />

    <div class="chat-wrapper d-lg-flex gap-1 mx-n4 mt-n4 p-1">
      <div class="chat-leftsidebar minimal-border">
        <div class="px-4 pt-4 mb-4">
          <div class="d-flex align-items-start">
            <div class="flex-grow-1">
              <h5 class="mb-4">Chats</h5>
            </div>
            <div class="flex-shrink-0">
              <div v-b-tooltip.hover title="Add Contact">
                <BButton type="button" variant="soft-success" size="sm" class="material-shadow-none">
                  <i class="ri-add-line align-bottom"></i>
                </BButton>
              </div>
            </div>
          </div>
          <div class="search-box">
            <input type="text" class="form-control bg-light border-light" placeholder="Search here..." />
            <i class="ri-search-2-line search-icon"></i>
          </div>
        </div>

        <simplebar class="chat-room-list" data-simplebar>
          <div class="d-flex align-items-center px-4 mb-2">
            <div class="flex-grow-1">
              <h4 class="mb-0 fs-11 text-muted text-uppercase">
                Direct Messages
              </h4>
            </div>
            <div class="flex-shrink-0">
              <div v-b-tooltip.hover title="New Message">
                <BButton type="button" variant="soft-success" size="sm" class="material-shadow">
                  <i class="ri-add-line align-bottom"></i>
                </BButton>
              </div>
            </div>
          </div>

          <div class="chat-message-list">
            <div class="list-unstyled chat-list chat-user-list">
              <li class v-for="data of chatData" :key="data.id" @click="chatUsername(data.name, data.image)" :class="{ active: username == data.name }">
                <BLink href="javascript: void(0);">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                      <div class="avatar-xxs" v-if="data.image">
                        <img :src="`${data.image}`" class="rounded-circle img-fluid userprofile" alt />
                      </div>
                      <div class="avatar-xxs" v-if="!data.image">
                        <div class="avatar-title rounded-circle bg-danger userprofile">
                          {{ data.name.charAt(0) }}
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-truncate mb-1">
                        {{ data.name }}
                      </p>
                    </div>

                    <div class="flex-shrink-0">
                      <BBadge variant="dark-subtle" class="bg-dark-subtle text-body rounded p-1">{{ data.time
                      }}</BBadge>
                    </div>
                  </div>
                </BLink>
              </li>
            </div>
          </div>

          <div class="d-flex align-items-center px-4 mt-4 pt-2 mb-2">
            <div class="flex-grow-1">
              <h4 class="mb-0 fs-11 text-muted text-uppercase">Channels</h4>
            </div>
            <div class="flex-shrink-0">
              <div v-b-tooltip.hover title="Create group">
                <BButton type="button" variant="soft-success" size="sm">
                  <i class="ri-add-line align-bottom"></i>
                </BButton>
              </div>
            </div>
          </div>

          <div class="chat-message-list">
            <ul class="list-unstyled chat-list chat-user-list mb-0" id="channelList">
              <li>
                <BLink href="javascript: void(0);" class="unread-msg-user">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                      <div class="avatar-xxs">
                        <div class="avatar-title bg-light rounded-circle text-body">
                          #
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-truncate mb-0">Landing Design</p>
                    </div>
                    <div class="flex-shrink-0">
                      <BBadge variant="dark-subtle" class="bg-dark-subtle text-body rounded p-1">7</BBadge>
                    </div>
                  </div>
                </BLink>
              </li>
              <li>
                <BLink href="javascript: void(0);">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                      <div class="avatar-xxs">
                        <div class="avatar-title bg-light rounded-circle text-body">
                          #
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-truncate mb-0">General</p>
                    </div>
                  </div>
                </BLink>
              </li>
              <li>
                <BLink href="javascript: void(0);" class="unread-msg-user">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                      <div class="avatar-xxs">
                        <div class="avatar-title bg-light rounded-circle text-body">
                          #
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-truncate mb-0">Project Tasks</p>
                    </div>
                    <div class="flex-shrink-0">
                      <BBadge variant="dark-subtle" class="bg-dark-subtle text-body rounded p-1">3</BBadge>
                    </div>
                  </div>
                </BLink>
              </li>

              <li>
                <BLink href="javascript: void(0);">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                      <div class="avatar-xxs">
                        <div class="avatar-title bg-light rounded-circle text-body">
                          #
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-truncate mb-0">Meeting</p>
                    </div>
                  </div>
                </BLink>
              </li>
              <li>
                <BLink href="javascript: void(0);">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0 chat-user-img online align-self-center me-2 ms-0">
                      <div class="avatar-xxs">
                        <div class="avatar-title bg-light rounded-circle text-body">
                          #
                        </div>
                      </div>
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <p class="text-truncate mb-0">Reporting</p>
                    </div>
                  </div>
                </BLink>
              </li>
            </ul>
          </div>
        </simplebar>
      </div>
      <div class="user-chat w-100 overflow-hidden minimal-border">
        <div class="chat-content d-lg-flex">
          <div class="w-100 overflow-hidden position-relative">
            <div class="position-relative">
              <div class="p-3 user-chat-topbar">
                <BRow class="align-items-center">
                  <BCol sm="4" cols="8">
                    <div class="d-flex align-items-center">
                      <div class="flex-shrink-0 d-block d-lg-none me-3">
                        <BLink href="javascript: void(0);" class="user-chat-remove fs-18 p-1"><i class="ri-arrow-left-s-line align-bottom"></i></BLink>
                      </div>
                      <div class="flex-grow-1 overflow-hidden">
                        <div class="d-flex align-items-center">
                          <div class="flex-shrink-0 chat-user-img online user-own-img align-self-center me-3 ms-0">
                            <img :src="profile ? profile : user_dummy_img" class="rounded-circle avatar-xs" alt="" />
                            <span class="user-status"></span>
                          </div>
                          <div class="flex-grow-1 overflow-hidden">
                            <h5 class="text-truncate mb-0 fs-16">
                              <BLink class="text-reset username" @click="rightOffcanvas = !rightOffcanvas">{{ username }}
                              </BLink>
                            </h5>
                            <p class="text-truncate text-muted fs-14 mb-0 userStatus">
                              <small>Online</small>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </BCol>
                  <BCol sm="8" cols="4">
                    <ul class="list-inline user-chat-nav text-end mb-0">
                      <li class="list-inline-item m-0">

                        <BDropdown variant="link" class="btn btn-ghost-secondary btn-icon material-shadow-none" no-caret menu-class="dropdown-menu p-0 dropdown-menu-end dropdown-menu-lg" auto-close="outside">
                          <template #button-content> <search-icon class="icon-sm"></search-icon>
                          </template>
                          <BDropdownItemButton>
                            <div class="p-2 dropdown-menu-lg px-0 py-0">
                              <div class="search-box">
                                <input type="text" class="form-control bg-light border-light" placeholder="Search here..." v-model="searchQuery" id="searchMessage" />
                                <i class="ri-search-2-line search-icon"></i>
                              </div>
                            </div>
                          </BDropdownItemButton>
                        </BDropdown>
                      </li>

                      <li class="list-inline-item d-none d-lg-inline-block m-0">
                        <BButton type="button" variant="ghost-secondary" class="btn-icon material-shadow-none" @click="rightOffcanvas = !rightOffcanvas">
                          <info-icon class="icon-sm"></info-icon>
                        </BButton>
                      </li>

                      <li class="list-inline-item m-0">
                        <BDropdown variant="link" class="btn btn-ghost-secondary btn-icon material-shadow-none" no-caret menu-class="dropdown-menu" aria-haspopup="true">
                          <template #button-content> <more-vertical-icon class="icon-sm"></more-vertical-icon>
                          </template>
                          <BDropdownItem><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>
                            Archive
                          </BDropdownItem>
                          <BDropdownItem><i class="ri-mic-off-line align-bottom text-muted me-2"></i>
                            Muted</BDropdownItem>
                          <BDropdownItem><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>
                            Delete</BDropdownItem>
                        </BDropdown>
                      </li>
                    </ul>
                  </BCol>
                </BRow>
              </div>

              <div class="position-relative" id="users-chat">
                <simplebar class="chat-conversation p-3 p-lg-4" id="chat-conversation" data-simplebar ref="current">
                  <ul class="list-unstyled chat-conversation-list">
                    <li v-for="data of resultQuery" :key="data.message" :class="{ right: `${data.align}` === 'right', left: `${data.align}` !== 'right' }" class="chat-list">
                      <div class="conversation-list">
                        <div class="chat-avatar" v-if="data.align !== 'right'">
                          <img :src="profile ? profile : user_dummy_img" alt="" />
                        </div>
                        <div class="user-chat-content">
                          <div class="ctext-wrap">
                            <div class="ctext-wrap-content">
                              <p class="mb-0 ctext-content">
                                {{ data.message }}
                              </p>
                            </div>
                            <BDropdown variant="link" class="dropdown align-self-start message-box-drop" no-caret menu-class="dropdown-menu" aria-haspopup="true">
                              <template #button-content> <i class="ri-more-2-fill"></i>
                              </template>
                              <BDropdownItem> <i class="ri-reply-line me-2 text-muted align-bottom"></i> Reply
                              </BDropdownItem>
                              <BDropdownItem><i class="ri-share-line me-2 text-muted align-bottom"></i>
                                Forward
                              </BDropdownItem>
                              <BDropdownItem><i class="ri-file-copy-line me-2 text-muted align-bottom"></i>
                                Copy</BDropdownItem>
                              <BDropdownItem><i class="ri-bookmark-line me-2 text-muted align-bottom"></i>
                                Bookmark</BDropdownItem>
                              <BDropdownItem><i class="ri-delete-bin-5-line me-2 text-muted align-bottom"></i>
                                Delete</BDropdownItem>
                            </BDropdown>
                            <div class="conversation-name">
                              <small class="text-muted time">{{
                                data.time
                              }}</small>
                              <span class="text-success check-message-icon"><i class="ri-check-double-line align-bottom"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>

                </simplebar>
                <div class="alert alert-warning alert-dismissible copyclipboard-alert px-4 fade show" id="copyClipBoard" role="alert">
                  Message copied
                </div>
              </div>


              <div class="chat-input-section p-3 p-lg-4">
                <form @submit.prevent="formSubmit">
                  <BRow class="g-0 align-items-center">
                    <BCol cols="auto">
                      <div class="chat-input-links me-2">
                        <div class="links-list-item">
                          <BButton type="button" variant="link" class="text-decoration-none emoji-btn" id="emoji-btn">
                            <i class="bx bx-smile align-middle"></i>
                          </BButton>
                        </div>
                      </div>
                    </BCol>
                    <BCol>
                      <div class="chat-input-feedback">
                        Please Enter a Message
                      </div>

                      <input type="text" v-model="form.message" class="form-control chat-input bg-light border-light" placeholder="Enter Message..." :class="{ 'is-invalid': submitted && v$.form.message.$error }" />
                      <div v-if="submitted && v$.form.message.$error" class="invalid-feedback">
                        <span v-if="v$.form.message.required.$message">{{ v$.form.message.required.$message }}</span>
                      </div>
                    </BCol>
                    <BCol cols="auto">
                      <div class="chat-input-links ms-2">
                        <div class="links-list-item">
                          <BButton variant="success" type="submit" class="chat-send">
                            <i class="ri-send-plane-2-fill align-bottom"></i>
                          </BButton>
                        </div>
                      </div>
                    </BCol>
                  </BRow>
                </form>
              </div>

              <div class="replyCard">
                <BCard no-body class="mb-0">
                  <BCardBody class="py-3">
                    <div class="replymessage-block mb-0 d-flex align-items-start">
                      <div class="flex-grow-1">
                        <h5 class="conversation-name"></h5>
                        <p class="mb-0"></p>
                      </div>
                      <div class="flex-shrink-0">
                        <BButton type="button" variant="link" size="sm" id="close_toggle" class="mt-n2 me-n3 fs-18">
                          <i class="bx bx-x align-middle"></i>
                        </BButton>
                      </div>
                    </div>
                  </BCardBody>
                </BCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <BOffcanvas v-model="rightOffcanvas" placement="end" body-class="border-0 p-0 overflow-hidden" header-class="border-bottom">
      <div class="profile-offcanvas p-0">
        <div class="team-cover">
          <img src="@assets/images/small/img-9.jpg" alt="" class="img-fluid" />
        </div>
        <div class="p-1 pb-4 pt-0">
          <div class="team-settings">
            <div class="row g-0">
              <div class="col">
              </div>
              <div class="col-auto">
                <div class="user-chat-nav d-flex">
                  <button type="button" class="btn nav-btn favourite-btn active">
                    <i class="ri-star-fill"></i>
                  </button>

                  <div class="dropdown">
                    <a class="btn nav-btn" href="javascript:void(0);" data-bs-toggle="dropdown" aria-expanded="false">
                      <i class="ri-more-2-fill"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end">
                      <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>Archive</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-mic-off-line align-bottom text-muted me-2"></i>Muted</a></li>
                      <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>Delete</a></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="p-3 text-center">
          <img :src="profile ? profile : user_dummy_img" alt="" class="avatar-lg img-thumbnail rounded-circle mx-auto profile-img">
          <div class="mt-3">
            <h5 class="fs-16 mb-1"><a href="javascript:void(0);" class="link-primary username"> {{ username }}</a></h5>
            <p class="text-muted"><i class="ri-checkbox-blank-circle-fill me-1 align-bottom text-success"></i>Online</p>
          </div>

          <div class="d-flex gap-2 justify-content-center">
            <button type="button" class="btn avatar-xs p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Message">
              <span class="avatar-title rounded bg-light text-body">
                <i class="ri-question-answer-line"></i>
              </span>
            </button>

            <button type="button" class="btn avatar-xs p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Favourite">
              <span class="avatar-title rounded bg-light text-body">
                <i class="ri-star-line"></i>
              </span>
            </button>

            <button type="button" class="btn avatar-xs p-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Phone">
              <span class="avatar-title rounded bg-light text-body">
                <i class="ri-phone-line"></i>
              </span>
            </button>

            <div class="dropdown">
              <button class="btn avatar-xs p-0" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="avatar-title bg-light text-body rounded">
                  <i class="ri-more-fill"></i>
                </span>
              </button>

              <ul class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-inbox-archive-line align-bottom text-muted me-2"></i>Archive</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-mic-off-line align-bottom text-muted me-2"></i>Muted</a></li>
                <li><a class="dropdown-item" href="javascript:void(0);"><i class="ri-delete-bin-5-line align-bottom text-muted me-2"></i>Delete</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="border-top border-top-dashed p-3">
          <h5 class="fs-15 mb-3">Personal Details</h5>
          <div class="mb-3">
            <p class="text-muted text-uppercase fw-medium fs-12 mb-1">Number</p>
            <h6>+(256) 2451 8974</h6>
          </div>
          <div class="mb-3">
            <p class="text-muted text-uppercase fw-medium fs-12 mb-1">Email</p>
            <h6>lisaparker@gmail.com</h6>
          </div>
          <div>
            <p class="text-muted text-uppercase fw-medium fs-12 mb-1">Location</p>
            <h6 class="mb-0">California, USA</h6>
          </div>
        </div>

        <div class="border-top border-top-dashed p-3">
          <h5 class="fs-15 mb-3">Attached Files</h5>

          <div class="vstack gap-2">
            <div class="border rounded border-dashed p-2">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <div class="avatar-title bg-light text-secondary rounded fs-20">
                      <i class="ri-folder-zip-line"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">App pages.zip</a></h5>
                  <div class="text-muted">2.2MB</div>
                </div>
                <div class="flex-shrink-0 ms-2">
                  <div class="d-flex gap-1">
                    <button type="button" class="btn btn-icon text-muted btn-sm fs-18 material-shadow-none"><i class="ri-download-2-line"></i></button>
                    <div class="dropdown">
                      <button class="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-fill"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#"><i class="ri-share-line align-bottom me-2 text-muted"></i> Share</a></li>
                        <li><a class="dropdown-item" href="#"><i class="ri-bookmark-line align-bottom me-2 text-muted"></i> Bookmark</a></li>
                        <li><a class="dropdown-item" href="#"><i class="ri-delete-bin-line align-bottom me-2 text-muted"></i> Delete</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="border rounded border-dashed p-2">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <div class="avatar-title bg-light text-secondary rounded fs-20">
                      <i class="ri-file-ppt-2-line"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">Velzon admin.ppt</a></h5>
                  <div class="text-muted">2.4MB</div>
                </div>
                <div class="flex-shrink-0 ms-2">
                  <div class="d-flex gap-1">
                    <button type="button" class="btn btn-icon text-muted btn-sm fs-18 material-shadow-none"><i class="ri-download-2-line"></i></button>
                    <div class="dropdown">
                      <button class="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-fill"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#"><i class="ri-share-line align-bottom me-2 text-muted"></i> Share</a></li>
                        <li><a class="dropdown-item" href="#"><i class="ri-bookmark-line align-bottom me-2 text-muted"></i> Bookmark</a></li>
                        <li><a class="dropdown-item" href="#"><i class="ri-delete-bin-line align-bottom me-2 text-muted"></i> Delete</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="border rounded border-dashed p-2">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <div class="avatar-title bg-light text-secondary rounded fs-20">
                      <i class="ri-folder-zip-line"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">Images.zip</a></h5>
                  <div class="text-muted">1.2MB</div>
                </div>
                <div class="flex-shrink-0 ms-2">
                  <div class="d-flex gap-1">
                    <button type="button" class="btn btn-icon text-muted btn-sm fs-18 material-shadow-none"><i class="ri-download-2-line"></i></button>
                    <div class="dropdown">
                      <button class="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-fill"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#"><i class="ri-share-line align-bottom me-2 text-muted"></i> Share</a></li>
                        <li><a class="dropdown-item" href="#"><i class="ri-bookmark-line align-bottom me-2 text-muted"></i> Bookmark</a></li>
                        <li><a class="dropdown-item" href="#"><i class="ri-delete-bin-line align-bottom me-2 text-muted"></i> Delete</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="border rounded border-dashed p-2">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 me-3">
                  <div class="avatar-xs">
                    <div class="avatar-title bg-light text-secondary rounded fs-20">
                      <i class="ri-image-2-line"></i>
                    </div>
                  </div>
                </div>
                <div class="flex-grow-1 overflow-hidden">
                  <h5 class="fs-13 mb-1"><a href="#" class="text-body text-truncate d-block">bg-pattern.png</a></h5>
                  <div class="text-muted">1.1MB</div>
                </div>
                <div class="flex-shrink-0 ms-2">
                  <div class="d-flex gap-1">
                    <button type="button" class="btn btn-icon text-muted btn-sm fs-18 material-shadow-none"><i class="ri-download-2-line"></i></button>
                    <div class="dropdown">
                      <button class="btn btn-icon text-muted btn-sm fs-18 dropdown material-shadow-none" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="ri-more-fill"></i>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#"><i class="ri-share-line align-bottom me-2 text-muted"></i> Share</a></li>
                        <li><a class="dropdown-item" href="#"><i class="ri-bookmark-line align-bottom me-2 text-muted"></i> Bookmark</a></li>
                        <li><a class="dropdown-item" href="#"><i class="ri-delete-bin-line align-bottom me-2 text-muted"></i> Delete</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="text-center mt-2">
              <button type="button" class="btn btn-danger">Load more <i class="ri-arrow-right-fill align-bottom ms-1"></i></button>
            </div>
          </div>
        </div>
      </div>
    </BOffcanvas>
  </Layout>
</template>